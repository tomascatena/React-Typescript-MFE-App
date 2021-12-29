import React, { FC } from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

const App: FC = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={false} onSignOut={() => {}} />

        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
