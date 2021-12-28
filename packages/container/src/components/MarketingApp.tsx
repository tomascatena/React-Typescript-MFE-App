import React, { FC, useRef, useEffect } from 'react';
import mountMarketingApp from 'marketingApp/MountMarketingApp';

const MarketingApp: FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketingApp(ref.current!);
  });

  return <div ref={ref} />;
};

export default MarketingApp;
