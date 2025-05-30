import {FETCH_EVENT_DETAILS, FETCH_MAIN_DATA} from "../actions/types";

const mainState = {
    main_data: [],
    event_details: [],
}

export default (state = mainState, action) => {
    switch (action.type) {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                main_data: action.payload
            }
        case FETCH_EVENT_DETAILS:
            return {
                ...state,
                event_details: action.payload
            }
        default:
            return state;
    }
}