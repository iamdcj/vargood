import React from 'react';
import './styles/index.css';

interface Props {
  value: string;
  message: string;
  radioSelection: string;
  setValue: (value: string) => void;
  handleRadio: (value: string) => void;
  handleStrict: (value: boolean) => void;
}

const Validator: React.SFC<Props> = ({
  value,
  radioSelection,
  message,
  setValue,
  handleRadio,
  handleStrict
}) => {
  return (
    <section className='validator'>
      <div className='validator__inner'>
        {/* <h1 className='validator__title'>Validate Identifier</h1> */}
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

        <p>{message}</p>
      </div>
    </section>
  );
};

export { Validator };
