import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthReducer } from './reducers';

const rootReducer = combineReducers({
  authReducer: AuthReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;