import React, { FC, useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import { MemoryHistory, Location } from 'history';

interface Props {
  basename?: string;
  children: React.ReactNode;
  history: MemoryHistory;
}

const CustomRouter: FC<Props> = ({ basename = '/', children, history }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigator={history}
      navigationType={state.action}
    />
  );
};

export default CustomRouter;
