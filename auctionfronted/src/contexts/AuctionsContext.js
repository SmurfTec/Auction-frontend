import React, { useContext, useEffect, useState } from 'react';
import { useArray, useFetch, useToggleInput } from 'hooks';
import { makeReq, handleCatch, API_BASE_URL } from 'utils/makeReq';
import { AuthContext } from './AuthContext';

export const AuctionsContext = React.createContext();

export const AuctionsProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  // let history = useHistory();
  const [
    auctions,
    setAuctions,
    pushAuction,
    filterAuctions,
    updateAuction,
    removeAuction,
    clearAuctions,
  ] = useArray([], '_id');
  const [loading, toggleLoading] = useToggleInput(true);

  // * My Auctions
  const [
    myAuctions,
    setMyAuctions,
    pushMyAuction,
    filterMyAuctions,
    updateMyAuction,
    removeMyAuction,
    clearMyAuctions,
  ] = useArray([], '_id');
  const [loadingMyAuctions, toggleLoadingMyAuctions] = useToggleInput(true);

  const [watchlist, setWatchlist] = useState([]);
  const [loadingWatchlist, toggleLoadingWatchlist] = useToggleInput(true);

  const fetchMyAuctions = async () => {
    try {
      const resData = await makeReq('/auctions/myauctions');
      console.log(`resData`, resData);
      setMyAuctions(resData.auctions);
    } catch (err) {
      // console.log(`err`, err)
    } finally {
      toggleLoadingMyAuctions();
    }
  };
  const fetchAuctions = async () => {
    try {
      const resData = await makeReq('/auctions');
      console.log(`resData`, resData);
      setAuctions(resData.auctions);
    } catch (err) {
      // console.log(`err`, err)
    } finally {
      toggleLoading();
    }
  };
  const fetchWatchlist = async () => {
    try {
      const resData = await makeReq('/auctions/watchlist');
      console.log(`resData`, resData);
      setWatchlist(resData.watchlist);
    } catch (err) {
      // console.log(`err`, err)
    } finally {
      toggleLoadingWatchlist();
    }
  };

  useEffect(() => {
    fetchAuctions();
    fetchMyAuctions();
  }, []);

  useEffect(() => {
    if (user) fetchWatchlist();
  }, [user]);

  // * CRUD Operations
  const getAuctionById = (id) => auctions.find((el) => el._id === id);

  const createNewAuction = async (auction, successCallback, errorCallback) => {
    try {
      const resData = await makeReq(
        `/auctions`,
        {
          body: { ...auction },
        },
        'POST'
      );

      // ! Auction will go into userAuctions
      pushMyAuction(resData.auction);
      // * if successCallback is defined , then call it
      successCallback?.();
    } catch (err) {
      errorCallback?.();
    } finally {
    }
  };

  return (
    <AuctionsContext.Provider
      displayName='Auctions Context'
      value={{
        auctions,
        loading,
        getAuctionById,
        createNewAuction,
        loadingMyAuctions,
        myAuctions,
        watchlist,
        loadingWatchlist,
      }}
    >
      {children}
    </AuctionsContext.Provider>
  );
};
