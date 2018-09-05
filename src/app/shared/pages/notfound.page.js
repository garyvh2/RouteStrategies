// ======= Component Base Elements =======
// LIT-HTML/Element
import { LitElement, html } from "@polymer/lit-element";

// Import shared styles
import { SharedStyles } from "../styles/shared-styles"

class NotFoundPage extends LitElement {
    constructor() { super(); }

    _render(props) {
        return html `
            ${SharedStyles}
            <section>
                <h2>Oops! You hit a 404</h2>
                <p>The page you're looking for doesn't seem to exist. Head back
                <a href="/home">home</a> and try again?
                </p>
            </section>
      `;
    }
}

window.customElements.define("not-found-page", NotFoundPage);
