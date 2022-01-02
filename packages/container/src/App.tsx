import React, { FC } from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import CustomBrowserRouter from './components/routing/CustomBrowserRouter';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

const App: FC = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <CustomBrowserRouter>
        <Header signedIn={false} onSignOut={() => {}} />

        <MarketingApp />
      </CustomBrowserRouter>
    </StylesProvider>
  );
};

export default App;
