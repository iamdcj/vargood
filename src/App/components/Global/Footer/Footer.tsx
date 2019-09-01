import React from 'react';

import './footer.css';

import classNames from 'classnames';

interface Props {
  valid: string;
}

const Footer: React.SFC<Props> = ({}) => {
  const classes = classNames({
    footer: true
  });

  return (
    <footer className={classes}>
      built by
      <a href='http://dcj.codes' target='_blank' rel='noopener noreferrer'>
        dcj
      </a>
    </footer>
  );
};

export { Footer };
