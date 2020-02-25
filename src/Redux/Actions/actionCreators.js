
import * as actionTypes from './actionTypes';

import axios from 'axios';

export const saveComment = (comment) => {

    return {
        type: actionTypes.SAVE_COMMENT,
        payload: comment
    }
}


export const fetchComment = async () => {


    const response = await axios.get('https://reqres.in/api/users');
    // console.log(response.data.data);

    return {
        type: actionTypes.FETCH_COMMENTS,
        payload: response.data.data
    }

}