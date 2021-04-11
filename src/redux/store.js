import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk'; // no changes here 😀

import rootReducer from './root-reducer';

const middlewares = [ReduxThunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);
