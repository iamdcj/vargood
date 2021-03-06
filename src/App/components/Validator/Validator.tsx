import React from 'react';
import './styles/index.css';
import { Control } from '../Global/Control/Control';

interface Props {
  versions: string[];
  value: string;
  message: string;
  mode: string;
  setValue: (value: string) => void;
  handleRadio: (value: string) => void;
  handleStrict: (value: boolean) => void;
}

const Validator: React.SFC<Props> = ({
  versions,
  value,
  mode,
  message,
  setValue,
  handleRadio,
  handleStrict
}) => {
  return (
    <section className='validator'>
      <div className='validator__inner'>
        <h1 className='validator__title'>Validate Identifier</h1>
        <div className='control control--fw'>
          {value ? (
            <p className='validator__subtitle'>{message}</p>
          ) : (
            <label htmlFor='validator' className='validator__subtitle'>
              Please enter your desired variable name
            </label>
          )}
          <Control
            onChange={setValue}
            className='control__input'
            type='text'
            label='validator'
            hiddenLabel
            name='validator'
            id='validator'
            value={value}
            placeholder='foo'
          />
        </div>
        <legend className='control-group'>
          <div className='controls'>
            {versions.map((version: string) => (
              <Control
                onChange={handleRadio}
                className='control__input'
                type='radio'
                name={version}
                checked={version === mode}
                id={version}
                value={version}
                label={version.toUpperCase()}
              />
            ))}
          </div>
          {mode !== 'es3' && (
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
          )}
        </legend>
      </div>
    </section>
  );
};

export { Validator };
