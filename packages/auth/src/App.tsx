import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { MemoryHistory, BrowserHistory } from 'history';
import CustomRouter from './components/routing/CustomRouter';
import Register from './components/Register';
import Login from './components/Login';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

interface Props {
  history: MemoryHistory | BrowserHistory;
}

const App: FC<Props> = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <CustomRouter history={history}>
        <Routes>
          <Route path='/auth/register' element={<Register />} />

          <Route path='/auth/login' element={<Login />} />
        </Routes>
      </CustomRouter>
    </StylesProvider>
  );
};

export default App;
