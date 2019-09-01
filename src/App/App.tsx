import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { es5, es6, format, messages } from './_constants';

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

  const runChecks = (version: any) => {
    const validateFormat = new RegExp(format).test(value);
    const validateKeyword = new RegExp(version.keyword).test(value);

    if (!validateFormat) {
      validator('invalid');
      updateMessage(messages.format);
    } else if (validateKeyword) {
      validator('invalid');
      updateMessage(messages.keyword);
    } else {
      validator('valid');
      updateMessage(messages.valid);
    }
  };

  useEffect(() => {
    if (!value) {
      updateMessage('');
      validator('');

      return;
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
