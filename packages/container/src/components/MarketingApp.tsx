import React, { FC, useRef, useEffect } from 'react';
import mountMarketingApp from 'marketingApp/MountMarketingApp';
import { Location } from 'history';
import { useNavigate } from 'react-router-dom';
import { useHistory } from './routing/CustomBrowserRouter';

const MarketingApp: FC = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountMarketingApp(ref.current!, {
      onNavigate: (location: Location) => {
        navigate(location.pathname);
      },
    });

    history.listen(onParentNavigate);
  }, [history]);

  return <div ref={ref} />;
};

export default MarketingApp;
