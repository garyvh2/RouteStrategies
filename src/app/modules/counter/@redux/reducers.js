/**
 * Action Types
 */
import { INCREMENT, DECREMENT } from "./types.js";

const counter = (state = {clicks: 0, value: 0}, action) => {
    switch (action.type) {
    case INCREMENT:
        return {
            clicks: state.clicks + 1,
            value: state.value + 1
        };
    case DECREMENT:
        return {
            clicks: state.clicks + 1,
            value: state.value - 1
        };
    default:
        return state;
    }
};

export default counter;
