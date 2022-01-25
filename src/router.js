import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loading from 'components/common/Loading';
import DrawerLayout from 'components/layouts/DrawerLayout/DrawerLayout';
import WatchList from 'components/Auction/MyAuctions/WatchList';
import Unpulished from 'components/Auction/MyAuctions/Unpublished';
import Unclaimed from 'components/Auction/MyAuctions/Unclaimed';
import Completed from 'components/Auction/MyAuctions/Completed';
import Profile from 'components/Profile';
import Create from 'components/Auction/Create';
import HomePage from 'components/Home';
import LeaderBoard from 'components/LeaderBoard';
import AuctionDetails from 'components/Auction/Details';
import ContactUs from 'components/ContactUs';
import PrivacyPolicy from 'components/Rules_Regulations/PrivacyPolicy';
import TermsOfService from 'components/Rules_Regulations/TermsOfService';
import Faq from 'components/Rules_Regulations/Faq';
import Register from 'components/common/Register';
import Login from 'components/common/Login';
import { AuthContext } from 'contexts/AuthContext';
import CommonLayout from 'components/layouts/CommonLayout';
import Chat from 'components/Chat';
import { useGaTracker } from 'hooks';
import ClaimRequests from 'components/Auction/MyAuctions/ClaimedRequests';

const Router = () => {
  useGaTracker();

  const { user, token } = useContext(AuthContext);
  if (token && !user) return <Loading />;

  return (
    <Routes>
      <Route path='/' element={<CommonLayout />}>
        {/* Common Routes / Public Routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='leaderboard' element={<LeaderBoard />} />
        <Route path='auctionDetails/:id' element={<AuctionDetails />} />
        <Route path='auctionDetails/:id/edit' element={<Create isUpdate />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
        <Route path='tos' element={<TermsOfService />} />
        <Route path='faq' element={<Faq />} />

        {/* Protechted Routes */}
        {user ? (
          <>
            <Route path='myauctions' element={<DrawerLayout />}>
              <Route path='watchlist' element={<WatchList />} />
              <Route
                path='published'
                element={<Unpulished status='published' />}
              />
              <Route
                path='unpublished'
                element={<Unpulished status='inProgress' />}
              />
              <Route path='unclaimed' element={<Unclaimed />} />
              <Route path='completed' element={<Completed />} />
              <Route path='claim-requests' element={<ClaimRequests />} />
            </Route>
            <Route path='createAuction' element={<Create />} />
            <Route path='account' element={<Profile />} />
            <Route path='chat' element={<Chat />} />
          </>
        ) : (
          // * As login and other auth pages has redirect logic implemented,
          // * thats why they are inside common routes
          <>{/*  */}</>
        )}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default Router;
