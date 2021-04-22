import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import challengeReducer from './challenge/challenge.reducer';


const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [" key "],
};

const rootReducer = combineReducers({
  challenge: challengeReducer,
});

export default persistReducer(persistConfig, rootReducer);
