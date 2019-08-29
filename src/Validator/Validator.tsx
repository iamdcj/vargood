import React from 'react';

import './styles/index.css';

interface Props {}

const Validator = () => {
  const validate = (identifier: string) => {
    console.log(identifier);
  };

  return (
    <section className='validator'>
      <h1>Validate your Identifier</h1>
      <div className='validator__control'>
        <label htmlFor='validator'>
          Please enter your desired variable name
        </label>
        <div>
          <input
            onChange={({ target }) => validate(target.value)}
            className='validator__input'
            type='text'
            name='validator'
            id='validator'
          />
        </div>
      </div>
    </section>
  );
};

export { Validator };
