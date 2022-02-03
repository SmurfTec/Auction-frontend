import React, { useContext, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Add from '@material-ui/icons/Add';
import { Box, Container, InputBase, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { SocketContext } from 'contexts/SocketContext';
import { useTextInput } from 'hooks';
import { useToggleInput } from 'hooks';
import { AuthContext } from 'contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { makeReq } from 'utils/makeReq';
import useStyles from './styles';
import ChatItem from './ChatItem';
import ChatMessage from './ChatMessage';
import chatImg from 'assets/chat.svg';
import SearchBar from 'components/common/Search';
import SvgIcon from '@material-ui/core/SvgIcon';
import { v4 } from 'uuid';
import { useGaTracker } from 'hooks';

const Chat = () => {
  useGaTracker();
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const { chats, sendNewMessage, loadingChatId, addNewChat } =
    useContext(SocketContext);
  const [messageTxt, handleTxtChange, resetMessageTxt] = useTextInput('');

  const [activeChat, setActiveChat] = useState();

  const location = useLocation();

  function ChatIcon(props) {
    return <SvgIcon>{chatImg}</SvgIcon>;
  }

  useEffect(() => {
    (async () => {
      let newMessageUser = location.search && location.search.split('=')[1];
      console.log(`newMessageUser`, newMessageUser);

      if (!newMessageUser) return;

      // * Find Chat in the chats
      let chat = chats.find(
        (el) => !!el.participants.find((p) => p._id === newMessageUser)
      );

      console.log(`chat`, chat);

      if (!chat) {
        // * Create New Chat
        const resData = await makeReq(
          `/chats`,
          {
            body: {
              receiver: newMessageUser,
            },
          },
          'POST'
        );
        console.log(`resData`, resData);
        addNewChat(resData.chat);
      }
    })();
  }, [location.search]);

  useEffect(() => {
    if (!chats?.length) return;

    // * Update Active Chat (if any)
    if (activeChat)
      setActiveChat(chats.find((el) => el._id === activeChat._id));
    else setActiveChat(chats[0]);
  }, [chats]);

  const scrollChat = () => {
    const messagedContainer = document.getElementById('messageArea');
    messagedContainer.scrollTop = messagedContainer.scrollHeight;
  };

  useEffect(() => {
    scrollChat();
  }, [activeChat?.messages]);

  const handleChatClick = (e) => {
    const { selected } = e.currentTarget.dataset;
    // console.log(`selected`, selected);
    setActiveChat(chats.find((el) => el._id === selected));
  };

  const isMyMsg = (msg) => {
    return msg.sender._id === user?._id;
  };

  const handleCreateMessage = (e) => {
    e.preventDefault();

    sendNewMessage(
      messageTxt,
      // * No need to add receiver bcoz receiver will be the 2nd participant of chat
      // receiver:
      //   isMe(activeChat) === true
      //     ? activeChat.participants[1]._id
      //     : activeChat.participants[1]._id,
      activeChat._id
    );

    resetMessageTxt();
  };

  const isMe = (chat) => {
    // console.log(`chat.participants`, chat.participants);
    return chat.participants?.[0]._id === user?._id;
  };

  return (
    <Container sx={{ paddingTop: 2, maxWidth: 'unset' }}>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={4} className={classes.borderRight500}>
          {/* <Divider /> */}
          <div className={classes.padding}>
            {/* <div className={classes.chatTitle}>
              <img src={chatImg} alt='chat' />
              <Typography variant='h4'>Chat</Typography>
            </div> */}
            <SearchBar />
          </div>
          <Box>
            <Divider />
          </Box>
          <List className={`${classes.chatList} ${classes.padding}`}>
            {chats
              ? chats.map((chat) => (
                  <React.Fragment key={chat._id}>
                    <ChatItem
                      chat={chat}
                      isMe={isMe}
                      activeChat={activeChat}
                      handleChatClick={handleChatClick}
                    />
                    <Divider />
                  </React.Fragment>
                ))
              : Array(5)
                  .fill()
                  .map(() => (
                    <Skeleton
                      key={v4()}
                      variant='rect'
                      width='200px'
                      height='50px'
                      sx={{
                        marginBottom: 2,
                        marginInline: 'auto',
                        borderRadius: '5px',
                      }}
                    />
                  ))}
          </List>
        </Grid>
        <Grid item xs={8} style={{ minHeight: '70vh' }}>
          <List id='messageArea' className={classes.messageArea}>
            {activeChat?.messages &&
              activeChat.messages.map((message) => (
                <React.Fragment key={message._id}>
                  <ChatMessage
                    classes={classes}
                    user={user}
                    isMyMsg={isMyMsg}
                    message={message}
                  />
                </React.Fragment>
              ))}
          </List>
          <Divider />
          {activeChat && (
            <Grid container style={{ padding: '13px', alignItems: 'center' }}>
              <Grid item xs={10}>
                <form id='messageForm' onSubmit={handleCreateMessage}>
                  <div className={classes.typeMessage}>
                    <InputBase
                      fullWidth
                      inputProps={{ required: true }}
                      placeholder='Type your message ...'
                      value={messageTxt}
                      onChange={handleTxtChange}
                    />
                  </div>
                </form>
              </Grid>

              <Grid item xs={2} align='right'>
                <Button
                  color='primary'
                  aria-label='add'
                  type='submit'
                  form='messageForm'
                  variant='contained'
                >
                  <SendIcon />
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
