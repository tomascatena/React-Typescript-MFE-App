import React, { FC, useRef, useEffect } from 'react';
import mountAuthApp from 'authApp/MountAuthApp';
import { Location } from 'history';
import { useNavigate } from 'react-router-dom';
import { useHistory } from './routing/CustomBrowserRouter';

const AuthApp: FC = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountAuthApp(ref.current!, {
      initialPath: history.location.pathname,
      onNavigate: (location: Location) => {
        navigate(location.pathname);
      },
    });

    history.listen(onParentNavigate);
  }, [history]);

  return <div ref={ref} />;
};

export default AuthApp;
