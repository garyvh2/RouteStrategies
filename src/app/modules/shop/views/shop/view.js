/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin";

/**
 * Redux Components
 */
import { shop, Selectors  } from "../../@redux";
import { store } from "../../../../app.store";
store.addReducers({
    shop
});

/**
 * Component Importings
 */
import template from "./template";
import "../../components/products.component";
import "../../components/cart.component";
import '@vaadin/vaadin-button/theme/material/vaadin-button';

/**
 * Element Definition
 */
class ShopView extends connect(store)(LitElement) {
    constructor() { super(); }

    /**
     * Get Component Template
     */
    get template() {
        return template.call(this);
    }

    _render() {
        return html `
            ${this.template}
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
customElements.define("shop-view", ShopView);