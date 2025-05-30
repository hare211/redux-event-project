import axios from "axios";
import {FETCH_BOARD_DETAILS, FETCH_BOARD_LIST} from "./types";

export const fetchBoardList = (page) => async dispatch => {
    try {
        const res = await axios.get('http://localhost/api/boards/list', {
            params: {
                page: page,
            }
        });
        dispatch({
            type: FETCH_BOARD_LIST,
            payload: res.data
        });
    } catch (Error) {
        console.error('err: ', Error);
    }
}

export const insertBoard = (boardData, onSuccess, onError) => async dispatch => {
    try {
        const res = await axios.post(`http://localhost/api/boards/insert`, boardData);

        if (onSuccess) onSuccess();
    } catch (Error) {
        console.error('err: ', Error);
        if (onError) onError(Error);
    }
}

export const fetchBoardDetails = (no) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost/api/boards/details/${no}`);
        dispatch({
            type: FETCH_BOARD_DETAILS,
            payload: res.data
        });
    } catch (Error) {
        console.error('err: ', Error);
    }
}