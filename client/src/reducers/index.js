import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userListReducer from "./userListReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  userList: userListReducer
});