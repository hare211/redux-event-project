import {FETCH_EVENT_DETAIL, FETCH_EVENT_LIST, FETCH_EVENT_TODAY} from "../actions/types";


const eventState = {
    eventList: [],
    eventDetail: {}
}

export default (state = eventState, action) => {
    switch (action.type) {
        case FETCH_EVENT_LIST:
            return {
                ...state,
                eventList: action.payload.list,
                totalPage: action.payload.totalPage,
                page: action.payload.page,
            }
        case FETCH_EVENT_TODAY:
            return {
                ...state,
                eventToday: action.payload
            }
        case FETCH_EVENT_DETAIL:
            return {
                ...state,
                eventDetail: action.payload
            }
        default:
            return state
    }
}