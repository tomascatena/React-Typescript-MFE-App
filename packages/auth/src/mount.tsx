import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserHistory } from 'history';
import { createMemoryHistory, Location, Update } from 'history';

interface MountReturn {
  onParentNavigate: (update: Update) => void;
}

interface AuthOptions {
  onNavigate?: (location: Location) => void;
  defaultHistory?: BrowserHistory;
}

const defaultAuthOptions: AuthOptions = {
  onNavigate: () => {},
};

const mount = (
  el: Element,
  authOptions: AuthOptions = defaultAuthOptions
): MountReturn => {
  const { onNavigate, defaultHistory } = authOptions;

  const history = defaultHistory
    ? defaultHistory
    : createMemoryHistory({
        initialEntries: [{ pathname: window.location.pathname }],
      });

  if (onNavigate) {
    history.listen(({ location }) => {
      onNavigate(location);
    });
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ location }) {
      if (location.pathname !== history.location.pathname) {
        history.push(location.pathname);
      }
    },
  };
};

export default mount;
