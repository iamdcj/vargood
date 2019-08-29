import React from 'react';

import { Validator } from './components/Validator';
import { Footer } from './components/Global/Footer';

import './_styles/index.css';

const App: React.SFC = () => {
  return (
    <main className='main'>
      <Validator />
      <Footer />
    </main>
  );
};

export default App;
