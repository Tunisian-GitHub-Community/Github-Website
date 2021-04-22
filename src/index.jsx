import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App';
import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';
import './index.css';

const queryClient = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorker.register();
