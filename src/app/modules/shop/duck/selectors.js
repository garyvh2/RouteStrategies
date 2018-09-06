// Per Redux best practices, the shop data in our store is structured
// for efficiency (small size and fast updates).
//
// The _selectors_ below transform store data into specific forms that
// are tailored for presentation. Putting this logic here keeps the
// layers of our app loosely coupled and easier to maintain, since
// views don't need to know about the store's internal data structures.
//
// We use a tiny library called `reselect` to create efficient
// selectors. More info: https://github.com/reduxjs/reselect.


import {
    createSelector
} from 'reselect';

const cartSelector = state => state.shop.cart;
const productsSelector = state => state.shop.products;

// Return a flattened array representation of the items in the cart

const cartItemsSelector = createSelector(
    cartSelector,
    productsSelector,
    (cart, products) => {
        const items = [];
        for (let id of cart.addedIds) {
            const item = products[id];
            items.push({
                id: item.id,
                title: item.title,
                amount: cart.quantityById[id],
                price: item.price
            });
        }
        return items;
    }
);

// Return the total cost of the items in the cart
const cartTotalSelector = createSelector(
    cartSelector,
    productsSelector,
    (cart, products) => {
        let total = 0;
        for (let id of cart.addedIds) {
            const item = products[id];
            total += item.price * cart.quantityById[id];
        }
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    }
);

// Return the number of items in the cart
const cartQuantitySelector = createSelector(
    cartSelector,
    cart => {
        let num = 0;
        for (let id of cart.addedIds) {
            num += cart.quantityById[id];
        }
        return num;
    }
);

export default {
    cartItemsSelector,
    cartTotalSelector,
    cartQuantitySelector
}
