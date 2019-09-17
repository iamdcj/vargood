import React, { useState } from 'react';

import './styles/index.css';

interface Props {}

const Rules: React.FunctionComponent<Props> = () => {
  const [visible, toggleVisibility] = useState(false);

  return (
    <div className={`rules ${visible ? 'is--visible' : 'is--hidden'}`}>
      <button
        className='rules__toggle'
        onClick={() => toggleVisibility(!visible)}
      >
        {visible ? 'hide' : 'show'} rules
      </button>
      <div className='rules__inner'>
        <div className='rules__content'>
          <h3 className='rules__title'>Identifier Rules</h3>
          <ul>
            <li>A-Z, $, or _ to start identifier.</li>
            <li>Following characters can contain digits.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Rules };
