// ========== Redux Utils ==========
import { createStore, compose as origCompose, applyMiddleware, combineReducers } from "redux";
// =========== PWA Utils ===========
import { lazyReducerEnhancer } from "pwa-helpers/lazy-reducer-enhancer";
// ======= Redux Middlewares =======
// => Redux Saga
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
// => Redux Thunk
import thunk from 'redux-thunk';
// => Redux Routing First
import { routerReducer, routerMiddleware, startListener, createBrowserHistory, push } from "./routes/duck/index";
const history = createBrowserHistory();
const router = routerMiddleware(history);
// ======== Global Resources =======
import GlobalReducers from "./shared/duck/reducers";
//import { onLocationChanged } from "./utils/history";

// == Store Enhancers Composition ==
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

export const store = createStore(
    (state, action) => state,
    compose(
        lazyReducerEnhancer(combineReducers), 
        applyMiddleware(thunk, router, sagaMiddleware)
    )
);


// ===== Add Global Components =====
store.addReducers({
    GlobalReducers,
    router: routerReducer
});

// ==== Attach Global Listeners ====
// Routing Management
startListener(history, store);
let currentLocation = store.getState().router.pathname
let unsubscribe = store.subscribe(() => {
    let previousLocation = currentLocation
    currentLocation = store.getState().router.pathname

    if (previousLocation !== currentLocation) {
        console.log(`Location changed from ${previousLocation} to ${currentLocation}`)
        // Render your application reactively here (optionally using a compatible router)
    }
})