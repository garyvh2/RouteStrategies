/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";

/**
 * Component Style Importings
 */
import { plusIcon, minusIcon } from "../../../shared/styles/icons";

/**
 * Element Definition
 */
class CounterElement extends LitElement {
    _render(props) {
        return html `
            <style>
                span { 
                    width: 20px;
                    display: inline-block;
                    text-align: center; 
                    font-weight: bold;
                }
            </style>
            <div>
                <p>
                    Clicked: <span>${props.clicks}</span> times.
                    Value is <span>${props.value}</span>.
                    <vaadin-button on-click="${() => this._onIncrement()}" title="Add 1">${plusIcon}</vaadin-button>
                    <vaadin-button on-click="${() => this._onDecrement()}" title="Minus 1">${minusIcon}</vaadin-button>
                </p>
            </div>
      `;
    }

    static get properties() {
        return {
            /* The total number of clicks you've done. */
            clicks: Number,
            /* The current value of the counter. */
            value: Number
        }
    };

    constructor() {
        super();
        this.clicks = 0;
        this.value = 0;
    }

    _onIncrement() {
        this.value++;
        this.clicks++;
        this.dispatchEvent(new CustomEvent('counter-incremented'));
    }

    _onDecrement() {
        this.value--;
        this.clicks++;
        this.dispatchEvent(new CustomEvent('counter-decremented'));
    }
}

customElements.define("counter-element", CounterElement);