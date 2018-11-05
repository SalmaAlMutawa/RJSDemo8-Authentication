import { combineReducers } from "redux";

// Reducers
import thingReducer from "./thingReducer";
import authReducer from "./authReducer";

export default combineReducers({
  things: thingReducer,
  auth: authReducer
});
