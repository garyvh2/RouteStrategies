// This element is connected to the Redux store.
import { store } from "../../../app.store";

import { Actions } from "../duck/index";

import {
    LitElement,
    html
} from "@polymer/lit-element";

import "../components/counter.component";

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class CounterElement extends LitElement {
    _render(props) {
        return html `
            <counter-element value="${props._value}" clicks="${props._clicks}"
                on-counter-incremented="${() => store.dispatch(Actions.increment())}"
                on-counter-decremented="${() => store.dispatch(Actions.decrement())}">
            </counter-element>
    `;
    }

    static get properties() {
        return {
            /* The total number of clicks you've done. */
            clicks: Number,
            /* The current value of the counter. */
            value: Number
        };
    }

    constructor() {
        super();
        this.clicks = 0;
        this.value = 0;
    }

    _onIncrement() {
        this.value++;
        this.clicks++;
        this.dispatchEvent(new CustomEvent("counter-incremented"));
    }

    _onDecrement() {
        this.value--;
        this.clicks++;
        this.dispatchEvent(new CustomEvent("counter-decremented"));
    }
}

window.customElements.define("counter-element", CounterElement);
