import axios from "axios";
import {FETCH_EVENT_LIST} from "./types";


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