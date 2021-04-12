import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import challengeReducer from './challenge/challenge.reducer';
import organizationReducer from './organization/organization.reducer';


const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [" key "],
};

const rootReducer = combineReducers({
  challenge: challengeReducer,
  organization: organizationReducer
});

export default persistReducer(persistConfig, rootReducer);
