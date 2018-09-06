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
// Redux Story Connect Mixin
import { connect } from "pwa-helpers/connect-mixin";
// App Store
import { goBack } from "../../routes/duck/actions";
import { store } from "../../app.store";


// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class NavigationComponent extends connect(store)(LitElement) {
    _render(props) {
        return html `
        <style>
            .navigation {
                font-family: 'Lato', sans-serif;
                width: 300px;
                height: 100%;
                display: block;
                margin: 0 auto;
                position: relative;
                text-align: center;
            }
            .navigation a {
                color: #000;
                text-decoration: none;
            }
            .navigation h2 {
                text-transform: uppercase;
            }
            .navigation hr {
                border: 0.5px solid #888;
                width: 40%;
            }
            ::slotted(*) {
                border-top: 1px solid #333;
            }
        </style>
        <div class="navigation">
            <a href="/home">
                <h2>home</h2>
            </a>
            <hr>
            <a href="/counters/counter">
                <h2>Counter</h2>
            </a>
            <hr>
            <a href="/shop/shop">
                <h2>Shop</h2>
            </a>
            <button onclick="${() => store.dispatch(goBack())}">Back</button>
        </div>
        <slot></slot>
    `;
    }

    static get properties() {
        return {
        };
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
    }
}

window.customElements.define("navigation-component", NavigationComponent);
