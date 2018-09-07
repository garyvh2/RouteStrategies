/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin";

/**
 * Redux Components
 */
import { store } from "../../app.store";
import { push, goBack } from "../../@redux/routes/actions";

/**
 * Component Importings
 */
import "@vaadin/vaadin-button/theme/material/vaadin-button"
import "@vaadin/vaadin-tabs/theme/material/vaadin-tab"
import "@vaadin/vaadin-tabs/theme/material/vaadin-tabs"

/**
 * Element Definition
 */
class NavigationComponent extends connect(store)(LitElement) {
    _render(props) {
        return html `
            <style>
                footer {
                    padding: 24px;
                    background: #293237;
                    color: white;
                    text-align: center;
                }
            </style>
            <div class="navigation">
                <vaadin-tabs>
                    <vaadin-tab onclick="${() => store.dispatch(push("/content/home"))}">Home</vaadin-tab>
                    <vaadin-tab onclick="${() => store.dispatch(push("/counters/counter"))}">Counter</vaadin-tab>
                    <vaadin-tab onclick="${() => store.dispatch(push("/shop/shop"))}">Shop</vaadin-tab>
                    <vaadin-tab onclick="${() => store.dispatch(push("/content/vaadin"))}">Vaadin</vaadin-tab>
                    <vaadin-tab onclick="${() => store.dispatch(goBack())}">Back</vaadin-button>
                </vaadin-tabs>
            </div>
            <slot></slot>
            <footer>
                <p>Made with &hearts; by the BDX team.</p>
            </footer>
    `;
    }

    static get properties() {
        return {
        };
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {

    }

    navigateTo (href) {
        store.dispatch(push(href, null))
    }
}
customElements.define("navigation-component", NavigationComponent);
