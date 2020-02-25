import React from 'react';

import {Provider} from 'react-redux';


import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../../Redux/Reducers/rootReducer';

import ReduxPromise from 'redux-promise';


const Root = (props) => {
    const {initialState = {}} = props;
    // console.log(initialState)
    

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store =  createStore(rootReducer, initialState , composeEnhancers(
        applyMiddleware(ReduxPromise)
        )   
    );

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default Root;