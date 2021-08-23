

import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
export type reducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    notes:noteReducer
})
export default rootReducer;
