import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Pricing from './components/Pricing';
import Album from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App: FC = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Routes>
          <Route path='/' element={<Album />} />

          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
