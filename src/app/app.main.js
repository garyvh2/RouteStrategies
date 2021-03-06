/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";
import { connect } from "pwa-helpers/connect-mixin";

/**
 * Redux Components
 */
import { store } from "./app.store";

/**
 * Route Management
 */
import { init } from "./utils/routerHelpers";
import { loadRoutes } from "./app.router";


/**
 * Component Style Importings
 */
import { Material, LightTheme } from "./shared/styles/material-theme";
import { Colors } from "./shared/styles/colors";
import SharedStyles from "./shared/styles/shared-styles";

/**
 * Component Importings
 */
import "./shared/components/router.component";


/**
 * Main Element Definition
 */
class AppMain extends connect(store)(LitElement) {
    constructor() { super(); }

    /**
     * Element properties mapping
     */
    static get properties() {
        return {
        };
    }
    
    /**
     * First time and re-render funtion
     */
    _render() {
        return html `
            ${Material}
            ${LightTheme}
            ${Colors}
            ${SharedStyles}
            <router-outlet></router-outlet>
        `;
    }

    /**
     * Called after the element DOM is rendered for the first time.
     * Implement to perform tasks after first rendering like capturing a
     * reference to a static node which must be directly manipulated.
     * This should not be commonly needed. For tasks which should be performed
     * before first render, use the element constructor.
     */
    _firstRendered() {

    }
    /**
     * Called after element DOM has been rendered. Implement to
     * directly control rendered DOM. Typically this is not needed as `lit-html`
     * can be used in the `_render` method to set properties, attributes, and
     * event listeners. However, it is sometimes useful for calling methods on
     * rendered elements, like calling `focus()` on an element to focus it.
     * @param _props Current element properties
     * @param _changedProps Changing element properties
     * @param _prevProps Previous element properties
     */
    _didRender() {
        init(this.shadowRoot.querySelector("router-outlet"));
        loadRoutes()
    }

    /**
     * This is called every time something is updated in the store.
     * @param state current state changed
     */
    _stateChanged() {

    }
}
customElements.define("app-main", AppMain);