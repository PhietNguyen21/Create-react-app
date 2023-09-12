import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  loginReducer: loginReducer,
});

export default rootReducer;
