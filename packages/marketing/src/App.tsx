import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import Pricing from './components/Pricing';
import Album from './components/Landing';

const App: FC = () => {
  return (
    <BrowserRouter>
      <StylesProvider>
        <Routes>
          <Route path='/' element={<Album />} />

          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
