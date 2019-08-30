import React from 'react';
import './styles/index.css';

interface Props {}

const Validator: React.FunctionComponent<Props> = () => {
  const validate = (identifier: string) => {
    console.log(identifier);
  };

  return (
    <section className='validator'>
      {/* <h1 className='validator__title'>Validate Identifier</h1> */}
      <div className='control control--fw'>
        <label htmlFor='validator' className='validator__subtitle'>
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
        <label htmlFor='use-strict'>Strict mode?</label>
      </div>
    </section>
  );
};

export { Validator };
