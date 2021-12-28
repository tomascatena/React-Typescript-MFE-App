import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el: Element) => {
  ReactDOM.render(<h1>Hi there</h1>, el);
};

export default mount;
