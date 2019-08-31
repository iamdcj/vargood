import React from 'react';

import { Rules } from './components/Global/Rules';
import { Validator } from './components/Validator';
import { Footer } from './components/Global/Footer';

import './_styles/index.css';

const App: React.SFC = () => {
  return (
    <main className='main'>
      <Rules />
      <Validator />
      {/* <Footer /> */}
    </main>
  );
};

export default App;
