import React, { useContext, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import { useGaTracker } from 'hooks';

import Loading from 'components/common/Loading';
const DrawerLayout = lazy(() =>
  import('components/layouts/DrawerLayout/DrawerLayout')
);
const WatchList = lazy(() => import('components/Auction/MyAuctions/WatchList'));
const Unpulished = lazy(() =>
  import('components/Auction/MyAuctions/Unpublished')
);
const Unclaimed = lazy(() => import('components/Auction/MyAuctions/Unclaimed'));
const Completed = lazy(() => import('components/Auction/MyAuctions/Completed'));
const Profile = lazy(() => import('components/Profile'));
const Create = lazy(() => import('components/Auction/Create'));
const HomePage = lazy(() => import('components/Home'));
const LeaderBoard = lazy(() => import('components/LeaderBoard'));
const AuctionDetails = lazy(() => import('components/Auction/Details'));
const ContactUs = lazy(() => import('components/ContactUs'));
const PrivacyPolicy = lazy(() =>
  import('components/Rules_Regulations/PrivacyPolicy')
);
const TermsOfService = lazy(() =>
  import('components/Rules_Regulations/TermsOfService')
);
const Faq = lazy(() => import('components/Rules_Regulations/Faq'));
const Register = lazy(() => import('components/common/Register'));
const Login = lazy(() => import('components/common/Login'));
const CommonLayout = lazy(() => import('components/layouts/CommonLayout'));
const Chat = lazy(() => import('components/Chat'));
const ClaimRequests = lazy(() =>
  import('components/Auction/MyAuctions/ClaimedRequests')
);

const Router = () => {
  useGaTracker();

  const { user, token } = useContext(AuthContext);
  if (token && !user) return <Loading />;

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<Loading />}>
            <CommonLayout />
          </Suspense>
        }
      >
        {/* Common Routes / Public Routes */}
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path='leaderboard'
          element={
            <Suspense fallback={<Loading />}>
              <LeaderBoard />
            </Suspense>
          }
        />
        <Route
          path='auctionDetails/:id'
          element={
            <Suspense fallback={<Loading />}>
              <AuctionDetails />
            </Suspense>
          }
        />
        <Route
          path='auctionDetails/:id/edit'
          element={
            <Suspense fallback={<Loading />}>
              <Create isUpdate />
            </Suspense>
          }
        />
        <Route
          path='contact-us'
          element={
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path='privacy'
          element={
            <Suspense fallback={<Loading />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path='tos'
          element={
            <Suspense fallback={<Loading />}>
              <TermsOfService />
            </Suspense>
          }
        />
        <Route
          path='faq'
          element={
            <Suspense fallback={<Loading />}>
              <Faq />
            </Suspense>
          }
        />

        {/* Protechted Routes */}
        {user ? (
          <>
            <Route
              path='myauctions'
              element={
                <Suspense fallback={<Loading />}>
                  <DrawerLayout />
                </Suspense>
              }
            >
              <Route
                path='watchlist'
                element={
                  <Suspense fallback={<Loading />}>
                    <WatchList />
                  </Suspense>
                }
              />
              <Route
                path='published'
                element={
                  <Suspense fallback={<Loading />}>
                    <Unpulished status='published' />
                  </Suspense>
                }
              />
              <Route
                path='unpublished'
                element={
                  <Suspense fallback={<Loading />}>
                    <Unpulished status='inProgress' />
                  </Suspense>
                }
              />
              <Route
                path='unclaimed'
                element={
                  <Suspense fallback={<Loading />}>
                    <Unclaimed />
                  </Suspense>
                }
              />
              <Route
                path='completed'
                element={
                  <Suspense fallback={<Loading />}>
                    <Completed />
                  </Suspense>
                }
              />
              <Route
                path='claim-requests'
                element={
                  <Suspense fallback={<Loading />}>
                    <ClaimRequests />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path='createAuction'
              element={
                <Suspense fallback={<Loading />}>
                  <Create />
                </Suspense>
              }
            />
            <Route
              path='account'
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path='chat'
              element={
                <Suspense fallback={<Loading />}>
                  <Chat />
                </Suspense>
              }
            />
          </>
        ) : (
          // * As login and other auth pages has redirect logic implemented,
          // * thats why they are inside common routes
          <>{/*  */}</>
        )}
        <Route
          path='/register'
          element={
            <Suspense fallback={<Loading />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />

        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default Router;
