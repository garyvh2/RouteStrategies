/**
 * Action Types
 */
import { INCREMENT, DECREMENT } from "./types.js";

const increment = () => {
    return {
        type: INCREMENT
    };
};

const decrement = () => {
    return {
        type: DECREMENT
    };
};

export default {
    increment,
    decrement
};
