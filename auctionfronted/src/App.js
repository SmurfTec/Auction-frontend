import { Route, Routes } from 'react-router-dom';
import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Home from 'components/Home';
import LeaderBoard from 'components/LeaderBoard';
import UserAuctions from 'components/Auction/UserAuctions';
import AuctionDetails from 'components/Auction/AuctionDetails';

function App() {
  return (
    <>
      <ThemeConfig>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/leaderboard' element={<LeaderBoard />} />
          <Route exact path='/myauctions' element={<UserAuctions />} />
          <Route exact path='/auctionDetails' element={<AuctionDetails />} />
        </Routes>
      </ThemeConfig>
    </>
  );
}

export default App;
