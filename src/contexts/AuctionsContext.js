import React, { useContext, useEffect, useState } from 'react';
import { useArray, useToggleInput } from 'hooks';
import { makeReq, handleCatch } from 'utils/makeReq';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AuctionsContext = React.createContext();

export const AuctionsProvider = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [
    auctions,
    setAuctions,
    pushAuction,
    ,
    updateAuctionById,
    // removeAuction,
    // clearAuctions,
  ] = useArray([], '_id');
  const [loading, toggleLoading, setLoading] = useToggleInput(true);

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
    ,
    updateMyAuctionById,
    // removeMyAuction,
    // clearMyAuctions,
  ] = useArray([], '_id');
  const [loadingMyAuctions, toggleLoadingMyAuctions, setLoadingMyAuctions] =
    useToggleInput(true);

  const [watchlist, setWatchlist] = useState([]);
  const [loadingWatchlist, toggleLoadingWatchlist, setLoadingWatchlist] =
    useToggleInput(true);

  const [
    claimRequestSent,
    setClaimRequestSent,
    pushClaimRequestSent,
    ,
    updateClaimRequestSentById,
    // removeClaimRequestSent,
    // clearClaimRequestSent,
  ] = useArray([], '_id');

  const [
    claimRequestReceived,
    setClaimRequestReceived,
    pushClaimRequestReceived,
    ,
    updateClaimRequestReceivedById,
    // removeClaimRequestReceived,
    // clearClaimRequestReceived,
  ] = useArray([], '_id');
  const [
    loadingClaimRequests,
    toggleLoadingClaimRequests,
    setLoadingClaimRequests,
  ] = useToggleInput(true);

  const fetchMyAuctions = async () => {
    try {
      const resData = await makeReq('/auctions/myauctions');
      console.log(`resData`, resData);
      setMyAuctions(resData.auctions);
    } catch (err) {
      // console.log(`err`, err)
    } finally {
      console.log('toggleing toggleLoadingMyAuctions');
      toggleLoadingMyAuctions();
    }
  };
  const fetchClaimRequests = async () => {
    try {
      const resData = await makeReq('/claim-requests/me');
      console.log(`resData-claimRequests`, resData);
      setClaimRequestSent(resData.claimRequestsSent.data);
      setClaimRequestReceived(resData.claimRequestsReceived.data);
    } catch (err) {
      // console.log(`err`, err)
    } finally {
      toggleLoadingClaimRequests();
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
      console.log('toggleing toggleLoadingWatchlist');
      toggleLoadingWatchlist();
    }
  };

  useEffect(() => {
    fetchAuctions();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoadingMyAuctions(true);
      setLoadingWatchlist(true);
      setLoadingClaimRequests(true);
      return;
    }
    fetchClaimRequests();
    fetchMyAuctions();
    fetchWatchlist();
  }, [isLoggedIn]);

  // * whenever auctions changed , We have to update published and leaderboard auctions
  useEffect(() => {
    if (loading || !auctions) return;

    setPublishedAuctions(auctions.filter((el) => el.status === 'published'));
    setTopAuctions(auctions.filter((el) => el.status === 'claimed'));
    setUnClaimedAuctions(auctions.filter((el) => el.status === 'archived'));
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
      if (resData.auction.status === 'published')
        pushAuction(resData.auction, 'start');
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
  // * Auctions Related
  const updateAuction = async (auction, id, toggleFunction) => {
    try {
      const resData = await makeReq(
        `/auctions/${id}`,
        {
          body: { ...auction },
        },
        'PATCH'
      );

      toast.success('Auction Updated Successfully!');

      // ! Auction will go into auctions if its status is published
      if (resData.auction.status === 'published') pushAuction(resData.auction);
      navigate(
        resData.auction.status === 'inProgress'
          ? '/myauctions/unpublished'
          : '/'
      );
      updateMyAuctionById(id, resData.auction);
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
        isLoggedIn,
        publishedAuctions,
        topAuctions,
        unClaimedAuctions,
        updateAuction,
        updateAuctionById,
        claimRequestSent,
        claimRequestReceived,
        loadingClaimRequests,
        updateClaimRequestReceivedById,
        updateClaimRequestSentById,
        pushClaimRequestReceived,
      }}
    >
      {children}
    </AuctionsContext.Provider>
  );
};
