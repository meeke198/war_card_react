//keep track of all of our users.
import { SET_PLAYER_INFO } from "../actions/player_actions.js";
const initialState = {
  email: "",
  token: "",
};
const playersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_PLAYER_INFO:
      return {
        ...state,
        email: action.playerInfo.email,
        token: action.playerInfo.token,
      };
    default:
      return state;
  }
};

export default playersReducer;
