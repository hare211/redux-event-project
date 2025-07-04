import axios from "axios";
import {FETCH_EVENT_DETAIL, FETCH_EVENT_LIST, FETCH_EVENT_TODAY} from "./types";


export const fetchEventList = (page) => async dispatch => {
    try {
        const res = await axios.get('http://localhost/api/event/list', {
            params: {
                page, size: 10
            }
        });

        dispatch({
            type: FETCH_EVENT_LIST,
            payload: {
                list: res.data.list,
                totalPage: res.data.totalPage,
                page
            }
        })


    } catch (err) {
        console.error('err: ', err);
    }
}

export const fetchTodayEventList = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost/api/content/today');
        dispatch({
            type: FETCH_EVENT_TODAY,
            payload: res.data,
        })
    } catch (Error) {
        console.error('error: ', Error);
    }
}

export const fetchEventDetail = (contentId) => async dispatch => {
    try {
        const res = await axios.get('http://localhost/api/events/details/' + contentId);
        dispatch({
            type: FETCH_EVENT_DETAIL,
            payload: res.data,
        })
    } catch (err) {
        console.error('err: ', err);
    }
}