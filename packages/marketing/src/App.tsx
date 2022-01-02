import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Pricing from './components/Pricing';
import Album from './components/Landing';
import { MemoryHistory, BrowserHistory } from 'history';
import CustomRouter from './components/routing/CustomRouter';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

interface Props {
  history: MemoryHistory | BrowserHistory;
}

const App: FC<Props> = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <CustomRouter history={history}>
        <Routes>
          <Route path='/' element={<Album />} />

          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </CustomRouter>
    </StylesProvider>
  );
};

export default App;
