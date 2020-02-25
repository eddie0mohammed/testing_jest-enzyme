
import commentsReducer from '../commentsReducer';
import * as actionTypes from '../../Actions/actionTypes';


it('has an action of type SAVE_COMMENT', () => {

    const action = {
        type: actionTypes.SAVE_COMMENT,
        payload: 'New Comment'
    };

    const initialState = {
        comments: []
    }
    
    const newState = commentsReducer(initialState, action);

    expect(newState.comments).toEqual(['New Comment']);
});


it('handles action with unknown type', () => {

    const initialState = {
        comments: []
    }

    const action = {
        type: 'RANDOM'
    }
    
    const newState = commentsReducer(initialState, action);

    expect(newState.comments).toEqual([]);
    
})