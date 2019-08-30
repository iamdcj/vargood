import React from 'react';
import './styles/index.css';

import { Rules } from './Components/Rules';

interface Props {}

const Validator: React.FunctionComponent<Props> = () => {
  const validate = (identifier: string) => {
    console.log(identifier);
  };

  return (
    <section className='validator'>
      <h1>Validate your Identifier</h1>
      <div className='control'>
        <label htmlFor='validator'>
          Please enter your desired variable name
        </label>
        <div>
          <input
            onChange={({ target }) => validate(target.value)}
            className='control__input'
            type='text'
            name='validator'
            id='validator'
          />
        </div>
        <div className='control  control--flex'>
          <div>
            <input
              onChange={({ target }) => validate(target.value)}
              className='control__input'
              type='checkbox'
              name='use-strict'
              id='use-strict'
            />
          </div>
          <label htmlFor='validator'>Strict mode?</label>
        </div>
      </div>
      <Rules />
    </section>
  );
};

export { Validator };
