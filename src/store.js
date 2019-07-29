import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import login from "./ducks/login";
import pads from "./ducks/pads";

const reducer = combineReducers({
  login,
  pads
});

const store = createStore(reducer, applyMiddleware(thunk));

export const selectUser = store => store.login.user;

export const selectPads = store => store.pads.data;
export const selectArePadsLoading = store => store.pads.isLoading;
export const selectPadsLoadingError = store => store.pads.error;

export default store;
