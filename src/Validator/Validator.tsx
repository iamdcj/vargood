import React from 'react';

import './styles/index.css';

interface Props {}

const Validator = () => {
  const validate = (identifier: string) => {
    console.log(identifier);
  };

  return (
    <section className='validator'>
      <h1>Valide your Identifier</h1>
      <p>Please enter your desired identifier intothe following input;</p>
      <input
        onChange={({ target }) => validate(target.value)}
        className='validator__input'
        type='text'
        name='validator'
        id='validator'
      />
    </section>
  );
};

export { Validator };
