
import * as actionCreators from '../actionCreators';
import * as actionTypes from '../actionTypes';



describe('saveComment' , () => {

    it('has the correct type', () => {

        const action = actionCreators.saveComment();

        expect(action.type).toEqual('SAVE_COMMENT');

    })

    it('has the correct payload', () => {

        const action = actionCreators.saveComment('new comment');

        expect(action.payload).toEqual('new comment');

    });

})