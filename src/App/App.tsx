import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { keywords, format, messages, versions } from './_constants';

import { Rules } from './components/Global/Rules';
import { Validator } from './components/Validator';
import { Footer } from './components/Global/Footer';

import './_styles/index.css';

const App: React.FC = () => {
  const [isStrict, handleStrict] = useState(false);
  const [mode, handleRadio] = useState('es6');
  const [value, setValue] = useState('');
  const [validity, validator] = useState('');
  const [message, updateMessage] = useState('');

  const runChecks = (version: string) => {
    const validFormat = new RegExp(format).test(value);
    const invalidKeyword = new RegExp(keywords[version]).test(value);
    const sketchyKeyword = new RegExp(keywords.warning).test(value);

    if (!validFormat) {
      validator('invalid');
      updateMessage(messages.format);
    } else if (invalidKeyword) {
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

  const versonSwitch = () => {
    switch (mode) {
      case 'es3': {
        runChecks(mode);
        break;
      }
      case 'es6':
      case 'es5': {
        if (isStrict) {
          runChecks(`${mode}Strict`);
        } else {
          runChecks(mode);
        }
        break;
      }
      default:
        return;
    }
  };

  useEffect(() => {
    if (!value) {
      validator('');
      updateMessage('');
    } else {
      versonSwitch();
    }
  }, [isStrict, mode, value]);

  const classes = classNames({
    main: true,
    [`is--${validity}`]: true
  });

  return (
    <main className={classes}>
      <Rules />
      <Validator
        versions={versions}
        value={value}
        mode={mode}
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
