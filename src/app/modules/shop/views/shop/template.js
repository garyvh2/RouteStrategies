/**
 * Component Base Elements
 */
import { html } from "@polymer/lit-element";

/**
 * Component Style Importings
 */
import ViewStyle from "./style";
import { addToCartIcon } from "../../../../shared/styles/icons";

/**
 * Redux Components
 */
import { store } from "../../../../app.store";
import { Operations } from "../../@redux";

export default function () {
    return html `
        ${ViewStyle}

        <section>
            <h2>Redux example: shopping cart</h2>
            <div class="cart">${addToCartIcon}
                <div class="circle small">${this._quantity}</div>
            </div>
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
            <div>${this._error}</div>
            <br>
            <p>
                <vaadin-button 
                    hidden="${this._quantity == 0}"
                    on-click="${() => store.dispatch(Operations.checkout())}">
                        Checkout
                </vaadin-button>
            </p>
        </section>
    `;
};