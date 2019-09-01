import React, { useState, useEffect } from 'react';
import './styles/index.css';
import { es5, es6, format, messages } from './_constants';

interface Props {}

const Validator: React.FunctionComponent<Props> = () => {
  const [isStrict, handleStrict] = useState(false);
  const [radioSelection, handleRadio] = useState('es5');
  const [value, setValue] = useState('');
  const [valid, validator] = useState(false);
  const [message, updateMessage] = useState('');

  const runChecks = (version: any) => {
    const validateFormat = new RegExp(format).test(value);
    const validateKeyword = new RegExp(version.keyword).test(value);

    if (!validateFormat) {
      validator(false);
      updateMessage(messages.format);
    } else if (validateKeyword) {
      validator(false);
      updateMessage(messages.keyword);
    } else {
      validator(true);
      updateMessage(messages.valid);
    }
  };

  useEffect(() => {
    if (!value) {
      return updateMessage('');
    }

    switch (radioSelection) {
      case 'es6': {
        runChecks(es6);
        break;
      }
      default: {
        runChecks(es5);
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
        <p>{message}</p>
        <div className='control control--fw'>
          <label htmlFor='validator' className='validator__subtitle'>
            Please enter your desired variable name
          </label>
          <div>
            <input
              onChange={({ target }) => setValue(target.value)}
              className='control__input'
              type='text'
              name='validator'
              id='validator'
              value={value}
            />
          </div>
        </div>
        <legend className='control-group'>
          <div className='controls'>
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
          </div>
          <div className='control  control--flex control--checkbox'>
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
        </legend>
      </div>
    </section>
  );
};

export { Validator };
