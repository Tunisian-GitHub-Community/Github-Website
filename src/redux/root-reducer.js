import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import challengeReducer from "./challenge/challenge.reducer";
import eventReducer from "./event/event.reducer";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [" key "],
};

const rootReducer = combineReducers({
  challenge: challengeReducer,
  event: eventReducer,
});

export default rootReducer;
//export default persistReducer(persistConfig, rootReducer);
