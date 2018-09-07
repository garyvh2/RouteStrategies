/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";

/**
 * Component Importings
 */
import template from "./template";
import '@vaadin/vaadin-button/theme/material/vaadin-button';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field';
import '@vaadin/vaadin-text-field/theme/material/vaadin-password-field';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-area';

/**
 * Element Definition
 */
class VaadinView extends LitElement {
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
customElements.define("vaadin-view", VaadinView);
