import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el: Element) => {
  ReactDOM.render(<App />, el);
};

export default mount;
