/**
 * Actions
 */
import Types from "./types.js";

const increment = () => {
    return {
        type: Types.INCREMENT
    };
};

const decrement = () => {
    return {
        type: Types.DECREMENT
    };
};

export default {
    increment,
    decrement
};
