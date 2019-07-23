import { createStore } from "redux";

// action types:
const LOGIN = "LOGIN";

// actions:
export const loginAction = userObject => ({
  type: LOGIN,
  value: userObject
});

// initial store value:
const initialValue = {
  user: {}
};

// reducer:
function loginReducer(store = initialValue, action) {
  console.warn(action, store);
  switch (action.type) {
    case LOGIN:
      return {
        ...store,
        user: action.value
      };
    default:
      return store;
  }
}

// creating Store
export const store = createStore(loginReducer);

// selectors:
export const selectUser = store => store.user;
