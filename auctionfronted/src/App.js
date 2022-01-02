import { useEffect, useContext, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollToTop from 'utils/ScrollToTop';
import { AuthContext } from 'contexts/AuthContext';
import {
  commonRoutes,
  protectedRoutes,
  publicRoutes,
  defaultRoute,
  loading,
} from 'routes';
import { OutdoorGrill } from '@material-ui/icons';
import { common } from '@material-ui/core/colors';
import CommonLayout from 'components/layouts/CommonLayout';

function App() {
  const { user, token } = useContext(AuthContext);
  const [routes, setRoutes] = useState(loading);

  useEffect(() => {
    if (token && user)
      setRoutes((st) => [
        {
          path: '/',
          element: <CommonLayout />,
          children: protectedRoutes.concat(commonRoutes),
        },
      ]);
    else if (token) setRoutes(loading);
    else
      setRoutes((st) => [
        {
          path: '/',
          element: <CommonLayout />,
          children: publicRoutes.concat(commonRoutes),
        },
      ]);
  }, [user, token]);

  const content = useRoutes(routes);

  return (
    <>
      <ThemeConfig>
        <ScrollToTop>{content}</ScrollToTop>
      </ThemeConfig>
    </>
  );
}

export default App;
