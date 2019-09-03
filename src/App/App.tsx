import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import {
  keywords,
  format,
  messages
} from './_constants';

import { Rules } from './components/Global/Rules';
import { Validator } from './components/Validator';
import { Footer } from './components/Global/Footer';

import './_styles/index.css';

const App: React.FC = () => {
  const [isStrict, handleStrict] = useState(false);
  const [radioSelection, handleRadio] = useState('es5');
  const [value, setValue] = useState('');
  const [validity, validator] = useState('');
  const [message, updateMessage] = useState('');

  const runChecks = (version: string) => {
    const validateFormat = new RegExp(format).test(value);
    const validateKeyword = new RegExp(keywords[`${version}`]).test(value);
    const sketchyKeyword = new RegExp(keywords.warning).test(value);

    if (!value) {
      validator('');
      updateMessage('');
    } else if (!validateFormat) {
      //:todo - ensure escapes are handled correctly
      validator('invalid');
      updateMessage(messages.format);
    } else if (validateKeyword) {
      validator('invalid');
      updateMessage(messages.keyword);
    } else if (sketchyKeyword) {
      validator('sketchy');
      updateMessage(messages.sketchy);
    } else {
      validator('valid');
      updateMessage(messages.valid);
    }
  };

  useEffect(() => {
    switch (radioSelection) {
      case 'es6': {
        if (isStrict) {
          runChecks('es6Strict');
        } else {
          runChecks('es6');
        }
        break;
      }
      default: {
        if (isStrict) {
          runChecks('es5Strict');
        } else {
          runChecks('es5');
        }
        break;
      }
    }
  }, [isStrict, radioSelection, value]);

  const classes = classNames({
    main: true,
    [`is--${validity}`]: true
  });

  return (
    <main className={classes}>
      <Rules />
      <Validator
        value={value}
        radioSelection={radioSelection}
        message={message}
        setValue={setValue}
        handleRadio={handleRadio}
        handleStrict={handleStrict}
      />
      <Footer valid={validity} />
    </main>
  );
};

export default App;
