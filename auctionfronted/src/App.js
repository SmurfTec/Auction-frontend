import { useRoutes } from 'react-router-dom';
import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { protectedRoutes } from './routes';
import ScrollToTop from 'utils/ScrollToTop';

function App() {
  // const { user, token } = useContext(AuthContext);
  const content = useRoutes(protectedRoutes);

  return (
    <>
      <ThemeConfig>
        <ScrollToTop>{content}</ScrollToTop>
      </ThemeConfig>
    </>
  );
}

export default App;
