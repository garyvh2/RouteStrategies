/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin";

/**
 * Redux Components
 */
import { store } from "../../../../app.store";
import { Counter } from "../../@redux"
store.addReducers({
    Counter
});

/**
 * Component Importings
 */
import template from "./template";
import "../../components/counter.component";
import '@vaadin/vaadin-button/theme/material/vaadin-button';

/**
 * Element Definition
 */
class CounterView extends connect(store)(LitElement) {
    constructor() { super(); }

    /**
     * Get Component Template
     */
    get template() {
        return template.bind(this)();
    }

    _render() {
        return html `
            ${this.template}
        `;
    }

    static get properties() {
        return {
            // This is the data from the store.
            _clicks: Number,
            _value: Number
        }
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._clicks = state.Counter.clicks;
        this._value = state.Counter.value;
    }

}
customElements.define("counter-view", CounterView);