
import React from 'react';

import CommentBox from '../components/CommentBox/CommentBox';

import {mount} from 'enzyme';


let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

afterEach(() => {
    wrapped.unmount();
})


it('has a textarea and a button', () => {
    
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

})

describe('the textarea', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        });

        wrapped.update();

    })


    it('has a textarea that users can type in', () => {

       

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })

    it('has an empty textarea when form is submitted', () => {
        

        wrapped.find('form').simulate('submit');

        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })

})