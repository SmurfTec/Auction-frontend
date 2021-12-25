import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';

import Profile from './components/dashboard/profile/Profile';
import CreateBlog from './components/dashboard/Blog/CreateBlog';
import Blogs from './components/dashboard/Blog/Blogs';

import Customers from './components/dashboard/Visitor/Visitors';
import CreateVisitor from './components/dashboard/Visitor/CreateVisitor';
import EditVisitor from './components/dashboard/Visitor/EditVisitor';

import AddStaffer from './components/dashboard/Staffer/AddStaffer';
import EditStaffer from './components/dashboard/Staffer/EditStaffer';
import Staffers from './components/dashboard/Staffer/Staffers';

import TourCategories from './components/dashboard/categories/ProductCategories';

import CustomTrips from './components/dashboard/Trip/CustomTrips';
import CustomTrip from './components/dashboard/Trip/CustomTrip';

import CreateProduct from './components/dashboard/product/CreateProduct';
import Products from './components/dashboard/product/Products';
import EditProduct from 'components/dashboard/product/EditProduct';

import Reservations from './components/dashboard/Reservations';

import Orders from './components/dashboard/Order/Orders';
import Order from './components/dashboard/Order/Order';

import Payments from './components/dashboard/payment/Payments';
import DetailReservation from './components/dashboard/Reservations/DetailReservation';

import OrganizedTrips from './components/dashboard/Trip/OrganizedTrips';

import Loading from 'pages/Loading';
import Logout from 'components/common/Logout';
import ModifyOffer from 'components/dashboard/Offer/ModifyOffer';
import DashboardHome from 'components/dashboard/DashboardHome';
import Comments from 'components/dashboard/comments/Comments';
import Offers from 'components/dashboard/Offer';
import CreateOffer from 'components/dashboard/Offer/CreateOffer';
import ViewOffer from 'components/dashboard/Offer/ViewOffer';
import ModifyBlog from 'components/dashboard/Blog/ViewBlog';
import ArchieveOffers from 'components/dashboard/Offer/archievesOffers';
import FlashSales from 'components/dashboard/Offer/flashSales';
import Promos from 'components/dashboard/Offer/promos';
import Chat from 'components/dashboard/Chat';

export const protechtedRoutes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      //-----------------   MY PAGES ------------------------------
      { path: '/', element: <DashboardHome /> },
      { path: 'profile', element: <Profile /> },
      { path: 'messages', element: <Chat /> },
      {
        path: 'blogs',
        children: [
          {
            path: '/',
            element: <Blogs />,
          },
          {
            path: '/:id',
            element: <ModifyBlog />,
          },
          { path: 'create', element: <CreateBlog /> },
        ],
      },
      {
        path: 'customers',
        children: [
          {
            path: '/',
            element: <Customers />,
          },
          { path: '/new', element: <CreateVisitor /> },
          { path: 'edit/:id', element: <EditVisitor /> },
        ],
      },
      {
        path: 'staffers',
        children: [
          {
            path: '/',
            element: <Staffers />,
          },
          {
            path: 'edit/:id',
            element: <EditStaffer />,
          },
          {
            path: '/create',
            element: <AddStaffer />,
          },
        ],
      },
      { path: '/categories', element: <TourCategories /> },
      // { path: '/subcategories', element: <SubCategories /> },
      {
        path: '/customtrips',
        children: [
          { path: '/', element: <CustomTrips /> },
          { path: '/:id', element: <CustomTrip /> },
        ],
      },
      {
        path: 'products',
        children: [
          {
            path: '/',
            element: <Products />,
          },
          { path: '/create', element: <CreateProduct /> },
          { path: '/edit/:id', element: <EditProduct /> },
        ],
      },

      {
        path: '/reservations',
        children: [
          { path: '/', element: <Reservations /> },
          {
            path: '/:id',
            element: <DetailReservation />,
          },
        ],
      },

      { path: '/organizedTrips', element: <OrganizedTrips /> }, //* ??????

      {
        path: 'orders',
        children: [
          {
            path: '/',
            element: <Orders />,
          },
          {
            path: '/edit/:id',
            element: <Order />,
          },
        ],
      },
      { path: 'payments', element: <Payments /> },
      { path: 'comments', element: <Comments /> },
      {
        path: 'offers',
        children: [
          { path: '/', element: <Offers /> },
          { path: '/archieves', element: <ArchieveOffers /> },
          { path: '/flash-sales', element: <FlashSales /> },
          { path: '/promos', element: <Promos /> },
          { path: 'createOffer', element: <CreateOffer /> },
          { path: '/:id', element: <ViewOffer /> },
          { path: '/:id/edit', element: <ModifyOffer /> },
        ],
      },

      //  Other
      // { path: 'account', element: <Account /> },
      // { path: 'customers', element: <CustomerList /> },
      // { path: 'dashboard', element: <Dashboard /> },
      // { path: 'products', element: <ProductList /> },

      { path: 'settings', element: <Settings /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: 'logout', element: <Logout /> },
  { path: '*', element: <Navigate to='/app' /> },
];

export const publicRoutes = [
  { path: 'login', element: <Login /> },
  { path: '*', element: <Navigate to='/login' /> },
];

export const loading = [{ path: '*', element: <Loading /> }];
