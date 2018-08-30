import {
    createStore,
    compose as origCompose,
    applyMiddleware,
    combineReducers
} from "redux";

import {
    lazyReducerEnhancer
} from "pwa-helpers/lazy-reducer-enhancer";

import createSagaMiddleware from "redux-saga";
import GlobalReducers from "./shared/duck/reducers";

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

// Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    (state, action) => state,
    compose(lazyReducerEnhancer(combineReducers),
        applyMiddleware(sagaMiddleware))
);

// Initially loaded reducers.
store.addReducers({
    GlobalReducers
});