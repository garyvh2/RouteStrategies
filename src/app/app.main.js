/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import "./app.module";

import {
    LitElement,
    html
} from "@polymer/lit-element";

import {
    connect
} from "pwa-helpers/connect-mixin";

// This element is connected to the Redux store.
import {
    store
} from "./app.store";

import "./app.router";

class MainApp extends connect(store)(LitElement) {
    _render() {
        // Anything that's related to rendering should be done in here.
        return html `
        `;
    }

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    _firstRendered() {

    }

    _didRender() {

    }

    _stateChanged() {

    }
}

window.customElements.define("main-app", MainApp);
