/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";

/**
 * Component Importings
 */
import template from "./template";

/**
 * Element Definition
 */
class HomeView extends LitElement {
    constructor() { super(); }

    /**
     * Get Component Template
     */
    get template() {
        return template.bind(this)();
    }

    _render(props) {
        return html `
            ${this.template}
        `;
    }
}
customElements.define("home-view", HomeView);
