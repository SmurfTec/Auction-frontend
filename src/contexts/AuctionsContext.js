import React, { useContext, useEffect, useState } from 'react';
import { useArray, useToggleInput } from 'hooks';
import { makeReq, handleCatch } from 'utils/makeReq';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AuctionsContext = React.createContext();

export const AuctionsProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [
    auctions,
    setAuctions,
    pushAuction,
    // filterAuctions,
    // updateAuction,
    // removeAuction,
    // clearAuctions,
  ] = useArray([], '_id');
  const [loading, toggleLoading] = useToggleInput(true);

  // * Auctions are getting filtered based on their status to show
  // * On different pages , e.g leaderboard has "claimed" status auctions ,
  // * homepage has "published" and so on.
  // * Instead of fitlering auctions in all pages, I have making states here and applying filtering here
  const [publishedAuctions, setPublishedAuctions] = useState([]);
  const [topAuctions, setTopAuctions] = useState([]); // $ for leaderboard
  const [unClaimedAuctions, setUnClaimedAuctions] = useState([]);

  // * My Auctions
  const [
    myAuctions,
    setMyAuctions,
    pushMyAuction,
    // filterMyAuctions,
    // updateMyAuction,
    // removeMyAuction,
    // clearMyAuctions,
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
      // console.log(`resData`, resData);
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
      // console.log(`resData`, resData);
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

  // * whenever auctions changed , We have to update published and leaderboard auctions
  useEffect(() => {
    if (loading || !auctions) return;

    setPublishedAuctions(auctions.filter((el) => el.status === 'published'));
    setTopAuctions(auctions.filter((el) => el.status === 'claimed'));
    setUnClaimedAuctions(auctions.filter((el) => el.status === 'archieved'));
  }, [auctions, loading]);

  // * CRUD Operations
  const getAuctionById = (id) => auctions.find((el) => el._id === id);

  // * Auctions Related
  const createNewAuction = async (auction, toggleFunction) => {
    try {
      const resData = await makeReq(
        `/auctions`,
        {
          body: { ...auction },
        },
        'POST'
      );

      toast.success('Auction Created Successfully!');

      // ! Auction will go into userAuctions
      pushMyAuction(resData.auction);
      // ! Auction will go into auctions if its status is published
      if (resData.auction.status === 'published') pushAuction(resData.auction);
      navigate(
        resData.auction.status === 'inProgress'
          ? '/myauctions/unpublished'
          : '/'
      );
    } catch (err) {
    } finally {
      toggleFunction?.();
    }
  };

  // * Watchlist related
  const addToWatchlist = async (id) => {
    try {
      const resData = await makeReq(`/auctions/${id}/watchlist`, {}, 'POST');
      toast.success('Added to watchlist successfully!');
      setWatchlist((st) => [...st, resData.watchlist]);
    } catch (err) {
      handleCatch(err);
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
        addToWatchlist,
        user,
        publishedAuctions,
        topAuctions,
        unClaimedAuctions,
      }}
    >
      {children}
    </AuctionsContext.Provider>
  );
};
