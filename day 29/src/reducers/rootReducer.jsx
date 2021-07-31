import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import toggleThemeReducer from './toggleThemeReducer'
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    place : placeReducer,
    placeData : placeDataReducer ,
    theme : toggleThemeReducer
})

export default rootReducer;