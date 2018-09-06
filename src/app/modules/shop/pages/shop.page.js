// ======= Component Base Elements =======
// LIT-HTML/Element
import { LitElement, html } from "@polymer/lit-element";
// Redux Story Connect Mixin
import { connect } from "pwa-helpers/connect-mixin";
// App Store
import { store } from "../../../app.store";
// Actions
import { Operations, shop, Selectors  } from "../duck";
store.addReducers({
    shop
});
import { addToCartIcon } from "../../../shared/icons";


// ========= Compoment Importings =========
import { SharedStyles } from "../../../shared/styles/shared-styles";
import { ButtonSharedStyles} from "../../../shared/styles/button-shared-styles";

import "../components/products.component";
import "../components/cart.component";

// ====== Counter Element Definition ======
class ShopPage extends connect(store)(LitElement) {
    constructor() { super(); }

    _render({
        _quantity,
        _error
    }) {
        return html `
        ${SharedStyles}
        ${ButtonSharedStyles}
        <style>
          button {
            border: 2px solid var(--app-dark-text-color);
            border-radius: 3px;
            padding: 8px 16px;
          }
          button:hover {
            border-color: var(--app-primary-color);
            color: var(--app-primary-color);
          }
          .cart, .cart svg {
            fill: var(--app-primary-color);
            width: 64px;
            height: 64px;
          }
          .circle.small {
            margin-top: -72px;
            width: 28px;
            height: 28px;
            font-size: 16px;
            font-weight: bold;
            line-height: 30px;
          }
        </style>
        <section>
          <h2>Redux example: shopping cart</h2>
          <div class="cart">${addToCartIcon}<div class="circle small">${_quantity}</div></div>
          <p>This is a slightly more advanced Redux example, that simulates a
            shopping cart: getting the products, adding/removing items to the
            cart, and a checkout action, that can sometimes randomly fail (to
            simulate where you would add failure handling). </p>
          <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and
          <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>
        </section>
        <section>
          <h3>Products</h3>
          <shop-products></shop-products>
          <br>
          <h3>Your Cart</h3>
          <shop-cart></shop-cart>
          <div>${_error}</div>
          <br>
          <p>
            <button hidden="${_quantity == 0}"
                on-click="${() => store.dispatch(Operations.checkout())}">
              Checkout
            </button>
          </p>
        </section>
      `;
    }

    static get properties() {
        return {
            // This is the data from the store.
            _quantity: Number,
            _error: String
        }
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._quantity = Selectors.cartQuantitySelector(state);
        this._error = state.shop.error;
    }
}
customElements.define("shop-page", ShopPage);