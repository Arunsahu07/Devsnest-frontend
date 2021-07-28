import todoReducer from "./todoReducers";
import { combineReducers } from "redux";
const rootReducers= combineReducers({todo: todoReducer})


export default rootReducers;