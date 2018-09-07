/**
 * Component Base Elements
 */
import { LitElement, html } from "@polymer/lit-element";

/**
 * Element Definition
 */
class RouterOutlet extends LitElement {
    constructor() { super(); }

    _render() {
        return html `
            <slot></slot>
        `;
    }
}
customElements.define("router-outlet", RouterOutlet);
