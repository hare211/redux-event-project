import { combineReducers } from "redux";

import mainReducer from "./mainReducer";
import boardReducer from "./boardReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
    mains: mainReducer,
    boards: boardReducer,
    events: eventReducer,
})