import mount from './mount';
import { createBrowserHistory } from 'history';

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory({ window }),
    });
  }
}
