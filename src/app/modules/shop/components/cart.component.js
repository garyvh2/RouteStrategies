/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin";

/**
 * Redux Components
 */
import { store } from "../../../app.store";
import { Operations, Selectors  } from "../@redux";

/**
 * Component Style Importings
 */
import { removeFromCartIcon } from "../../../shared/styles/icons";

/**
 * Component Importings
 */
import "./item.component";

/**
 * Element Definition
 */
class ShopCart extends connect(store)(LitElement) {
    _render({
        _items,
        _total
    }) {
        return html `
          <style>
            :host { display: block; }
          </style>
          <p hidden="${_items.length !== 0}">Please add some products to cart.</p>
          ${_items.map((item) =>
            html`
              <div>
                <shop-item name="${item.title}" amount="${item.amount}" price="${item.price}"></shop-item>
                <vaadin-button
                    on-click="${(e) => store.dispatch(Operations.removeFromCart(e.currentTarget.dataset['index']))}"
                    data-index$="${item.id}"
                    title="Remove from cart">
                  ${removeFromCartIcon}
                </vaadin-button>
              </div>
            `
          )}
          <p hidden="${!_items.length}"><b>Total:</b> ${_total}</p>
        `;
    }

    static get properties() {
        return {
            _items: Array,
            _total: Number
        }
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._items = Selectors.cartItemsSelector(state);
        this._total = Selectors.cartTotalSelector(state);
    }
}

customElements.define("shop-cart", ShopCart );