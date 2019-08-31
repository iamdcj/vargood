import React, { useState, useEffect } from 'react';
import './styles/index.css';
import { es5, es5Strict, es6, es6Strict } from './_constants';

interface Props {}

const Validator: React.FunctionComponent<Props> = () => {
  const validate = (identifier: string) => {
    setValue(identifier);
  };

  const [isStrict, handleStrict] = useState(false);
  const [radioSelection, handleRadio] = useState('es5');
  const [value, setValue] = useState('');
  const [valid, validator] = useState(false);

  useEffect(() => {
    console.log(radioSelection);

    switch (radioSelection) {
      case 'es6': {
        const valid = es6.test(value);
        validator(valid);
        break;
      }
      default: {
        const valid = es5.test(value);
        validator(valid);
        break;
      }
    }
  }, [isStrict, radioSelection, value]);

  return (
    <section
      className={`validator ${
        value ? (valid ? 'is--valid' : 'is--invalid') : ''
      }`}
    >
      <div className='validator__inner'>
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
              value={value}
            />
          </div>
        </div>
        <div className='control  control--flex'>
          <div>
            <input
              onChange={({ target }) => handleRadio(target.value)}
              className='control__input'
              type='radio'
              name='version'
              id='es5'
              value='es5'
              checked={radioSelection === 'es5' ? true : false}
            />
          </div>
          <label htmlFor='es5'>ES5</label>
        </div>
        <div className='control  control--flex'>
          <div>
            <input
              onChange={({ target }) => handleRadio(target.value)}
              className='control__input'
              type='radio'
              name='version'
              id='es6'
              value='es6'
              checked={radioSelection === 'es6' ? true : false}
            />
          </div>
          <label htmlFor='es6'>ES6</label>
        </div>
        <div className='control  control--flex'>
          <div>
            <input
              onChange={({ target }) => handleStrict(target.checked)}
              className='control__input'
              type='checkbox'
              name='use-strict'
              id='use-strict'
            />
          </div>
          <label htmlFor='use-strict'>Strict mode?</label>
        </div>
      </div>
    </section>
  );
};

export { Validator };
