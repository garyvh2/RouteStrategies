/**
 * Action Types
 */
import {
    LOCATION_CHANGE
} from './types';


const getInitialState = {
    pathname: '/',
    search: '',
    queries: {},
    hash: '',
};

export const routerReducer = (state = getInitialState, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};