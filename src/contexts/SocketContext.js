import { createContext, useContext, useEffect, useState } from 'react';

import socketIo from 'socket.io-client';
import { AuthContext } from './AuthContext';
import { API_BASE_ORIGIN, makeReq } from 'utils/makeReq';
import { v4 } from 'uuid';
import { AuctionsContext } from './AuctionsContext';

export const SocketContext = createContext();

export const SocketProvider = (props) => {
  const [socket, setSocket] = useState();
  const { updateAuctionById } = useContext(AuctionsContext);
  const { user, setUser, token } = useContext(AuthContext);
  const [chats, setChats] = useState([]);

  //* socket connection
  useEffect(() => {
    // socket = socketIo.connect('https://mern-chat-project.herokuapp.com', {
    const newSocket = socketIo.connect(API_BASE_ORIGIN, {
      transports: ['websocket'],
    });
    setSocket(newSocket);
    if (!newSocket) return;
    newSocket.on('connect', () => {
      console.log(`Hurrah Socket ${newSocket.id} Connected`);
    });
  }, []);

  const fetchMyChats = async () => {
    const resData = await makeReq(`/chats/me`);

    setChats(resData.chats);
  };

  useEffect(() => {
    if (!socket || !user) return;

    fetchMyChats();
    socket.on('newNotification', (data) => {
      // console.log(`data`, data);

      console.log(` data?.userId?.toString()`, data?.userId?.toString());
      console.log(`user._id`, user._id);

      if (data?.userId?.toString().trim() !== user?._id.toString().trim())
        return;
      // if (JSON.stringify(data.user._id) !== JSON.stringify(user._id)) return;

      const newUser = {
        ...user,
        notifications: user.notifications
          ? [data.newNotification, ...user.notifications]
          : [data.newNotification],
      };
      console.log(`newUser`, newUser);
      setUser(newUser);
    });
    socket.on('newMessage', ({ chatId, message, receiver }) => {
      console.log(`newMessage received :`, message);
      console.log(`chatId :`, chatId);
      console.log(`receiver :`, receiver);
      console.log(`user._id)`, user._id);
      // * Push New Message to that chats

      if (receiver === user._id)
        setChats((st) =>
          st.map((el) => {
            console.log(`el._id === chatId`, el._id === chatId);
            console.log(`{ ...el, messages: [...el.messages, message] }`, {
              ...el,
              messages: [...el.messages, message],
            });
            return el._id === chatId
              ? { ...el, messages: [...el.messages, message] }
              : el;
          })
        );
    });
  }, [socket, user]);

  const addNewChat = (data) => {
    setChats((el) => [...el, data]);
  };

  const sendNewMessage = (text, chatId) => {
    // console.log(`text`, text);
    // console.log(`chatId`, chatId);
    console.log('emitting newMessage with', {
      text: text,
      token: token,
      chatId,
    });
    socket.emit('newMessage', { text: text, token: token, chatId });

    setChats((st) =>
      st.map((el) =>
        el._id === chatId
          ? {
              ...el,
              messages: [
                ...el.messages,
                {
                  text: text,
                  _id: v4(),
                  sender: user,
                  createdAt: new Date(),
                },
              ],
            }
          : el
      )
    );
  };

  return (
    <SocketContext.Provider
      displayName='Socket Context'
      value={{ socket, chats, sendNewMessage, fetchMyChats, addNewChat }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};
