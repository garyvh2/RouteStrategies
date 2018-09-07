/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin";

/**
 * Redux Components
 */
import { store } from "../../../app.store";
import { Operations } from "../@redux";

/**
 * Component Style Importings
 */
import { addToCartIcon } from "../../../shared/styles/icons";

/**
 * Component Importings
 */
import "./item.component";


/**
 * Element Definition
 */
class ShopProducts extends connect(store)(LitElement) {
    _render({
        _products
    }) {
        return html `
            <style>
                :host { display: block; }
            </style>
            ${Object.keys(_products).map((key) => {
                const item = _products[key];
                return html`
                    <div>
                        <shop-item name="${item.title}" amount="${item.inventory}" price="${item.price}"></shop-item>
                        <vaadin-button
                            disabled="${item.inventory === 0}"
                            on-click="${(e) => store.dispatch(Operations.addToCart(e.currentTarget.dataset['index']))}"
                            data-index$="${item.id}"
                            title="${item.inventory === 0 ? 'Sold out' : 'Add to cart' }">
                            ${item.inventory === 0 ? 'Sold out': addToCartIcon }
                        </vaadin-button>
                    </div>
                `
            })}
        `;
    }

    static get properties() {
        return {
            _products: Object
        }
    }

    _firstRendered() {
        store.dispatch(Operations.getAllProducts());
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._products = state.shop.products;
    }
}

customElements.define("shop-products", ShopProducts );