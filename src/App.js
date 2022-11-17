import React from 'react';
import AppRouter from './Router';
import { Provider } from 'react-redux'

import { store } from './app/store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
