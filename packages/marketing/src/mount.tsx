import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserHistory } from 'history';
import { createMemoryHistory, Location, Update } from 'history';

interface MountReturn {
  onParentNavigate: (update: Update) => void;
}

interface MarketingOptions {
  onNavigate?: (location: Location) => void;
  defaultHistory?: BrowserHistory;
  initialPath?: string;
}

const defaultMarketingOptions: MarketingOptions = {};

const mount = (
  el: Element,
  marketingOptions: MarketingOptions = defaultMarketingOptions
): MountReturn => {
  const { onNavigate, defaultHistory, initialPath } = marketingOptions;

  const history = defaultHistory
    ? defaultHistory
    : createMemoryHistory({
        initialEntries: [initialPath ? initialPath : window.location.pathname],
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
