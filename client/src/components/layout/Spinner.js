import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'blog' }}
      alt="Loading..."
    />
  );
};
