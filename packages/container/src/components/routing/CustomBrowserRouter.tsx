import React, {
  FC,
  createContext,
  useContext,
  useRef,
  useState,
  useLayoutEffect,
} from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

const initialBrowserHistory = createBrowserHistory({
  window,
});

const HistoryContext = createContext(initialBrowserHistory);

export const useHistory = () => useContext(HistoryContext);

interface Props {
  basename?: string;
}

const CustomBrowserRouter: FC<Props> = ({ children, basename = '/' }) => {
  const { current: history } = useRef(initialBrowserHistory);
  const [{ action, location }, setHistoryState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setHistoryState), [history]);

  return (
    <Router
      navigationType={action}
      location={location}
      navigator={history}
      basename={basename}
    >
      <HistoryContext.Provider value={history}>
        {children}
      </HistoryContext.Provider>
    </Router>
  );
};

export default CustomBrowserRouter;
