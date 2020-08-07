import React from 'react';
import configureStore from './store/configureStore';
import App from './pages/App'
import {Provider} from 'react-redux'

const store = configureStore;

export default function EntryFile() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


