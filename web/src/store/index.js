import { createStore } from "redux";

const INITIAL_STATE = {
  token: null,
  user: {}
};

function reducer(state = INITIAL_STATE, action) {
  if(action.type === "LOGIN") {
    return {
      ...state,
      token: action.token,
      user: action.user
    };
  }


  return state;
}

const store = createStore(reducer);

export default store;
