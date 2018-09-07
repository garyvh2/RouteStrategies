/**
 * Action Types
 */
import {
    REMOVE_FROM_CART,
    ADD_TO_CART
} from "./types";

const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        productId
    };
};

const addToCartUnsafe = (productId) => {
    return {
        type: ADD_TO_CART,
        productId
    };
};

export default {
    removeFromCart,
    addToCartUnsafe
}
