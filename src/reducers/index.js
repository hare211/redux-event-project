import { combineReducers } from "redux";

import mainReducer from "./mainReducer";
import boardReducer from "./boardReducer";

export default combineReducers({
    mains: mainReducer,
    boards: boardReducer,
})