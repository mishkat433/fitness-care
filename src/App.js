import React, { useEffect } from 'react';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='bg-orange-50 '>
      <Header />
      <Home />

    </div>
  );
};

export default App;
