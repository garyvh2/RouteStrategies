import {
    GET_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE
} from './types';


const PRODUCT_LIST = [{
        "id": 1,
        "title": "Cabot Creamery Extra Sharp Cheddar Cheese",
        "price": 10.99,
        "inventory": 2
    },
    {
        "id": 2,
        "title": "Cowgirl Creamery Mt. Tam Cheese",
        "price": 29.99,
        "inventory": 10
    },
    {
        "id": 3,
        "title": "Tillamook Medium Cheddar Cheese",
        "price": 8.99,
        "inventory": 5
    },
    {
        "id": 4,
        "title": "Point Reyes Bay Blue Cheese",
        "price": 24.99,
        "inventory": 7
    },
    {
        "id": 5,
        "title": "Shepherd's Halloumi Cheese",
        "price": 11.99,
        "inventory": 3
    }
];

const getAllProducts = () => (dispatch, getState) => {
    // Here you would normally get the data from the server. We're simulating
    // that by dispatching an async action (that you would dispatch when you
    // succesfully got the data back)

    // You could reformat the data in the right format as well:
    const products = PRODUCT_LIST.reduce((obj, product) => {
        obj[product.id] = product
        return obj
    }, {});

    dispatch({
        type: GET_PRODUCTS,
        products: products
    });
};

const checkout = (productId) => (dispatch) => {
    // Here you could do things like credit card validation, etc.
    // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
    // by flipping a coin :)
    const flip = Math.floor(Math.random() * 2);
    if (flip === 0) {
        dispatch({
            type: CHECKOUT_FAILURE
        });
    } else {
        dispatch({
            type: CHECKOUT_SUCCESS
        });
    }
};

const addToCart = (productId) => (dispatch, getState) => {
    const state = getState();
    // Just because the UI thinks you can add this to the cart
    // doesn't mean it's in the inventory (user could've fixed it);
    if (state.shop.products[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId));
    }
};

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
    getAllProducts,
    checkout,
    addToCart,
    removeFromCart,
    addToCartUnsafe
}