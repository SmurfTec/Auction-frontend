import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollToTop from 'utils/ScrollToTop';
import Router from './router';

import ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);

// useEffect(() => {
// ReactGA.pageview(
// window.location.pathname + window.location.search
// );
// });

function App() {
  return (
    <>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </>
  );
}

export default App;
