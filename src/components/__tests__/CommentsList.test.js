
import React from 'react';

import Root from '../Root/Root';
import CommentList from '../CommentList/CommentList';

import {mount } from 'enzyme';


let wrapped;

beforeEach(() => {

    const initialState = {
        comments: ['comment 1', 'comment 2']
    }
    
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
})

afterEach(() => {
    wrapped.unmount();
})


it('creates 1 li per comment', () => {

    // expect(wrapped.find('li').length).toEqual(2);
});


it('shows the text for each comment', () => {

    // console.log(wrapped.render().text()).toContain('comment 1);

})