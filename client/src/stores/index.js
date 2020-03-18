import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthReducer, ModalReducer, EventReducer } from './reducers';

const rootReducer = combineReducers({
  authReducer: AuthReducer,
  modalReducer: ModalReducer,
  eventReducer: EventReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;