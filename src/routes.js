import AuctionDetails from 'components/Auction/Details';
import Completed from 'components/Auction/MyAuctions/Completed';
import Unclaimed from 'components/Auction/MyAuctions/Unclaimed';
import Unpulished from 'components/Auction/MyAuctions/Unpublished';
import WatchList from 'components/Auction/MyAuctions/WatchList';
import Login from 'components/common/Login';
import Home from 'components/Home';
import DrawerLayout from 'components/layouts/DrawerLayout/DrawerLayout';
import LeaderBoard from 'components/LeaderBoard';
import CreateAuction from 'components/Auction/Create';
import Profile from 'components/Profile';
import ContactUs from 'components/ContactUs';
import Register from 'components/common/Register';
import Loading from 'components/common/Loading';
import { Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

export const protectedRoutes = [
  {
    path: 'myauctions',
    element: <DrawerLayout />,
    children: [
      {
        path: 'watchlist',
        element: <WatchList />,
      },
      {
        path: 'published',
        element: <Unpulished status='published' />,
      },
      {
        path: 'unpublished',
        element: <Unpulished status='inProgress' />,
      },
      {
        path: 'unclaimed',
        element: <Unclaimed />,
      },
      {
        path: 'completed',
        element: <Completed />,
      },
    ],
  },
  {
    path: '/createAuction',
    element: <CreateAuction />,
  },
  {
    path: '/account',
    element: <Profile />,
  },
];

export const commonRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'leaderboard',
    element: <LeaderBoard />,
  },
  {
    path: 'auctionDetails/:id',
    element: <AuctionDetails />,
  },
  {
    path: 'auctionDetails/:id/edit',
    element: <CreateAuction isUpdate />,
  },
  {
    path: 'contact-us',
    element: <ContactUs />,
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  },
];

export const publicRoutes = [
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export const loading = [{ path: '*', element: <Loading /> }];

export const defaultRoute = [{ path: '*', element: <Loading /> }];
