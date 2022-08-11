import { combineReducers } from "redux";
import players from "./players_reducer";
const rootReducer = combineReducers({
  players
});

export default rootReducer;
