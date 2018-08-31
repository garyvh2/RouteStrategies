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

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class HomePage extends LitElement {
    _render(props) {
        return html `
            <navigation-element></navigation-element>
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

window.customElements.define("home-page", HomePage);
