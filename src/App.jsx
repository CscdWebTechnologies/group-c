import React from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PriceTable from './components/PriceTable';
import BannerList from './components/BannerList';
import Overview from './components/Overview';
import Features from './components/Features';
import Achievement from './components/Achievement';
import QuickStart from './components/QuickStart';
import BannerImage from './components/BannerImage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <NavBar />
			<Hero />
			<PriceTable />
			<BannerList />
			<Overview />
			<Features />
			<Achievement />
			<QuickStart />
			<BannerImage />
			<Footer />
    </div>
  )
}

export default App
