/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";

/**
 * Element Definition
 */
class ShopItem extends LitElement {
    _render(props) {
        return html `
            ${props.name}:
            <span hidden="${props.amount === 0}">${props.amount} * </span>
                $${props.price}
            </span>
        `;
    }

    static get properties() {
        return {
            name: String,
            amount: String,
            price: String
        }
    }
}

customElements.define('shop-item', ShopItem);