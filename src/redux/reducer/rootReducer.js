import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";
import addCartReducer from "./addCartReducer";

const rootReducer = combineReducers({
  //   counter: counterReducer,
  addCart: addCartReducer,
});

export default rootReducer;
