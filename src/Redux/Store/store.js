
import {createStore, compose, applyMiddleware} from 'redux';

import rootReducer from '../Reducers/rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
)
);

export default store;