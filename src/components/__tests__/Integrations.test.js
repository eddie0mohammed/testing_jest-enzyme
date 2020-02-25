
import React from 'react';

import {mount} from 'enzyme';

import Root from '../Root/Root';
import App from '../../App';
import moxios from 'moxios';



beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://reqres.in/api/users', {
        status: 200,
        response: {data: [{name: 'test1'}, {name: 'test2'}] }
    });
});

afterEach(() => {
    moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {

    // Attempt to render the ENTIRE app
    const wrapper = mount(
        <Root>
            <App />
        </Root>
    )


    //find the 'fetchComments' btn and click it
    wrapper.find('.fetchBtn').simulate('click');


    //expect to find a list of comments

    moxios.wait(() => {
        wrapper.update();

        expect(wrapper.find('li').length).toEqual(2);

        done();
        wrapper.unmount();
    })
})