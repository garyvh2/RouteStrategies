/**
 * Redux Utils
 */
import { createStore, compose as origCompose, applyMiddleware, combineReducers } 
    from "redux";

/**
 * PWA Utils
 */
import { lazyReducerEnhancer } from "pwa-helpers/lazy-reducer-enhancer";

/**
 * Redux Middlewares
 */
// => Redux Saga
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

// => Redux Thunk
import thunk from 'redux-thunk';

// => Redux Routing First
import { routerReducer, routerMiddleware, startListener as startRouterListener, createBrowserHistory } 
    from "./@redux/routes/index";
const history = createBrowserHistory();
const router = routerMiddleware(history);

/**
 * Global Resources
 */
import { App } from "./@redux/reducers";

/**
 * Store Creation  
 */
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;
export const store = createStore(
    (state, action) => state,
    compose(
        lazyReducerEnhancer(combineReducers), 
        applyMiddleware(thunk, router, sagaMiddleware)
    )
);

/**
 * Lazy load reducers
 */
store.addReducers({
    App,
    router: routerReducer
});

/**
 * Attach Global Listeners
 */
startRouterListener(history, store);