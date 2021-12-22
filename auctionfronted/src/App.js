import { Route, Routes, Navigate } from 'react-router-dom';
import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Home from 'components/Home';
import LeaderBoard from 'components/LeaderBoard';

function App() {
  return (
    <>
      <ThemeConfig>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/leaderboard' element={<LeaderBoard />} />
        </Routes>
      </ThemeConfig>
    </>
  );
}

export default App;
