import { useArray, useToggleInput } from 'hooks';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makeReq, handleCatch } from 'utils/makeReq';

export const AuctionsContext = React.createContext();

export const AuctionsProvider = ({ children }) => {
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

  useEffect(() => {
    fetchAuctions();
  }, []);

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

      pushAuction(resData.auction);
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
      }}
    >
      {children}
    </AuctionsContext.Provider>
  );
};
