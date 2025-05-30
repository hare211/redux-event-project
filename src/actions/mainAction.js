import axios from "axios";
import {FETCH_EVENT_DETAILS, FETCH_MAIN_DATA} from "./types";

export const fetchMainData = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost/api/content/list');
        dispatch({
            type: FETCH_MAIN_DATA,
            payload: res.data,
        });
    } catch (Error) {
        console.error('err: ', Error);
    }
}

export const fetchEventDetails = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost/api/event-details');
        dispatch({
            type: FETCH_EVENT_DETAILS,
            payload: res.data,
        });
    } catch (Error) {
        console.error('err: ', Error);
    }
}