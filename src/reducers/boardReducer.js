import {FETCH_BOARD_DETAILS, FETCH_BOARD_LIST, FETCH_EVENT_DETAILS} from "../actions/types";

const boardState = {
    boardList: [],
    boardDetails: {},
}

export default (state = boardState, action) => {
    switch (action.type) {
        case FETCH_BOARD_LIST:
            return {
                ...state,
                boardList: action.payload.content
            }
        case FETCH_BOARD_DETAILS:
            return {
                ...state,
                boardDetails: action.payload
            }
        default:
            return state;
    }
}