import { FETCH_MAIN_DATA } from "../actions/types";

const mainState = {
    main_data: []
}

export default (state = mainState, action) => {
    switch (action.type) {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                main_data: action.payload
            }
        default:
            return state;
    }
}