import React, { FC } from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header signedIn={false} onSignOut={() => {}} />

      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
