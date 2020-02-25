
import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    comments: []

}


const commentsReducer = (state = initialState, action) => {

    switch (action.type){

        case (actionTypes.SAVE_COMMENT):
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        

        case (actionTypes.FETCH_COMMENTS):
            const res = action.payload.map(comment => comment.first_name);
            
            return {
                ...state,
                comments: [...state.comments, ...res]
            }


        default:
            return state
    }
}

export default commentsReducer;