import { FETCH_EVENT_LIST} from "../actions/types";


const eventState = {
    eventList: [],
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
        default:
            return state
    }
}