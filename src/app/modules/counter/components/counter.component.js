/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {
    LitElement,
    html
} from "@polymer/lit-element";

// These are the elements needed by this element.
import {
    plusIcon,
    minusIcon
} from "../../../shared/icons";

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class CounterPage extends LitElement {
    _render(props) {
        return html `
        <style>
            .counter-container {
                position: relative;
                width: 550px;
                text-align: center;
                margin: 0 auto;
                display: block;
            }
            .counter-value {
                display: inline-block;
                font-weight: bold;
                min-width: 150px;
                width: auto;
                height: 200px;
                background: #fff;
                border-radius: 10px;
                border: 2px dashed #000;
                vertical-align: middle;
                padding: 0 25px;
                position: relative;
                text-align: center;
                white-space: unset;
            }
            .counter-value span {
                position: relative;
                top: 50%;
                margin: 0 auto;
                display: block;
                width: auto;
                transform: translateY(-50%);
            }
            .counter-button {
                display: inline-block;
                width: 100px;
                margin: 20px;
                height: 100px;
                vertical-align: middle;
                background: rgba(255, 74, 74, .3);
                color: #000;
                border-radius: 10px;
                border: 4px dashed #333;
            }
        </style>
        <div class="counter-container">
            <button class="counter-button" on-click="${() => this._onIncrement()}" title="Add 1">${plusIcon}</button>
            <div class="counter-value">
                <span>${props.value}</span>
            </div>
            <button class="counter-button" on-click="${() => this._onDecrement()}" title="Minus 1">${minusIcon}</button>
            <h1>Clicked: <span>${props.clicks}</span> times.</h1>
        </div>
    `;
    }

    static get properties() {
        return {
            // This is the data from the store.
            _clicks: Number,
            _value: Number
        };
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._clicks = state.counter.clicks;
        this._value = state.counter.value;
    }
}

window.customElements.define("counter-page", CounterPage);
