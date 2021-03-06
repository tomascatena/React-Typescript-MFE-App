import React, { FC } from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import {
  StylesProvider,
  createGenerateClassName,
  CssBaseline,
} from '@material-ui/core';
import CustomBrowserRouter from './components/routing/CustomBrowserRouter';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

const App: FC = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <CssBaseline />

      <CustomBrowserRouter>
        <Header signedIn={false} onSignOut={() => {}} />

        <MarketingApp />

        <AuthApp />
      </CustomBrowserRouter>
    </StylesProvider>
  );
};

export default App;
