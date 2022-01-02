import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, Location, Update } from 'history';

interface MountReturn {
  onParentNavigate: (update: Update) => void;
}

interface MarketingOptions {
  onNavigate: (location: Location) => void;
}

const defaultMarketingOptions: MarketingOptions = {
  onNavigate: () => {},
};

const mount = (
  el: Element,
  marketingOptions: MarketingOptions = defaultMarketingOptions
): MountReturn => {
  const history = createMemoryHistory({
    initialEntries: [{ pathname: window.location.pathname }],
  });

  const { onNavigate } = marketingOptions;

  history.listen(({ location }) => {
    onNavigate(location);
  });

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
