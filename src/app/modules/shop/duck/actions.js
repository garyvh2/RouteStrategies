/**
 
 This is where you define your action creators. All action creators must be functions 
 that return an object with at least the type property. We do not define any async logic in this file.

*/

import Types from './types.js';


// ACTION CREATORS (BASIC)
const removeFromCart = (productId) => {
    return {
        type: Types.REMOVE_FROM_CART,
        productId
    };
};

const addToCartUnsafe = (productId) => {
    return {
        type: Types.ADD_TO_CART,
        productId
    };
};

export default {
    removeFromCart,
    addToCartUnsafe
}
