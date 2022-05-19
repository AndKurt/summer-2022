import React from 'react';
import { Provider } from 'react-redux';
import { Router } from './components';
import { setupStore } from './redux/store';

const store = setupStore();

export const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
