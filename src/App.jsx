import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import PriceTable from './components/PriceTable';
import Features from './components/Features';
import Achievement from './components/Achievement';
import EarnBanner from './components/EarnBanner';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Header />
			<Hero />
			<PriceTable />
			<Features />
			<Achievement />
			<EarnBanner />
    </div>
  )
}

export default App
