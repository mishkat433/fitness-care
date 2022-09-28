import React from 'react';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Question from './componants/Question/Question';

const App = () => {
  return (
    <div className='bg-orange-50 '>
      <Header />
      <Home />
      <Question />
    </div>
  );
};

export default App;
