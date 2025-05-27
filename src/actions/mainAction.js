import axios from "axios";
import {FETCH_MAIN_DATA} from "./types";

export const fetchMainData = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost/api/content/list');
        dispatch({
            type: FETCH_MAIN_DATA,
            payload: res.data,
        });
        console.log('res: ', res.data);
    } catch (Error) {
        console.error('err: ', Error);
    }
}