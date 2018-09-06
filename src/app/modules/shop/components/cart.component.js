// ======= Component Base Elements =======
// LIT-HTML/Element
import { LitElement, html } from "@polymer/lit-element";
// Redux Story Connect Mixin
import { connect } from "pwa-helpers/connect-mixin";
// App Store
import { store } from "../../../app.store";

// Actions
import { Operations, Selectors  } from "../duck";

// ========= Compoment Importings =========
import { ButtonSharedStyles } from "../../../shared/styles/button-shared-styles";
import { removeFromCartIcon } from "../../../shared/icons";
import "./item.component";

class ShopCart extends connect(store)(LitElement) {
    _render({
        _items,
        _total
    }) {
        return html `
          ${ButtonSharedStyles}
          <style>
            :host { display: block; }
          </style>
          <p hidden="${_items.length !== 0}">Please add some products to cart.</p>
          ${_items.map((item) =>
            html`
              <div>
                <shop-item name="${item.title}" amount="${item.amount}" price="${item.price}"></shop-item>
                <button
                    on-click="${(e) => store.dispatch(Operations.removeFromCart(e.currentTarget.dataset['index']))}"
                    data-index$="${item.id}"
                    title="Remove from cart">
                  ${removeFromCartIcon}
                </button>
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