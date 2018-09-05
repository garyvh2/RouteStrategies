// ========== Redux Utils ==========
import { createStore, compose as origCompose, applyMiddleware, combineReducers } from "redux";
// =========== PWA Utils ===========
import { lazyReducerEnhancer } from "pwa-helpers/lazy-reducer-enhancer";
// ======= Redux Middlewares =======
// => Redux Saga
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
// ======== Global Resources =======
import GlobalReducers from "./shared/duck/reducers";

// == Store Enhancers Composition ==
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

export const store = createStore(
    (state, action) => state,
    compose(
        lazyReducerEnhancer(combineReducers), 
        applyMiddleware(sagaMiddleware)
    )
);

// ===== Add Global Components =====
store.addReducers({
    GlobalReducers
});