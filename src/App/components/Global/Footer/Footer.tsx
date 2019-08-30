import React from 'react';

import './footer.css';

interface Props {}

const Footer: React.FunctionComponent<Props> = () => {
  return (
    <footer className='footer'>
      a thing by
      <a href='http://dcj.codes' target='_blank' rel='noopener noreferrer'>
        DCJ
      </a>
    </footer>
  );
};

export { Footer };
