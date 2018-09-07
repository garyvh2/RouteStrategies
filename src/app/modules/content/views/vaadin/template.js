/**
 * Component Base Elements
 */
import { html } from "@polymer/lit-element";

/**
 * Component Style Importings
 */
import ViewStyle from "./style";

export default function () {
    return html `
        ${ViewStyle}
        <section>
            <h5>Text</h5>

            <vaadin-button>Normal</vaadin-button>
            <vaadin-button disabled>Disabled</vaadin-button>

            <vaadin-button>
                <span>Prefix</span>
                <iron-icon icon="add" slot="prefix"></iron-icon>
            </vaadin-button>
            <vaadin-button>
                <span>Suffix</span>
                <iron-icon icon="chevron-right" slot="suffix"></iron-icon>
            </vaadin-button>

            <h5>Outlined</h5>

            <vaadin-button theme="outlined">Normal</vaadin-button>
            <vaadin-button theme="outlined" disabled>Disabled</vaadin-button>

            <vaadin-button theme="outlined">
                <span>Prefix</span>
                <iron-icon icon="add" slot="prefix"></iron-icon>
            </vaadin-button>
            <vaadin-button theme="outlined">
                <span>Suffix</span>
                <iron-icon icon="chevron-right" slot="suffix"></iron-icon>
            </vaadin-button>

            <h5>Contained</h5>

            <vaadin-button theme="contained">Normal</vaadin-button>
            <vaadin-button theme="contained" disabled>Disabled</vaadin-button>

            <vaadin-button theme="contained">
                <span>Prefix</span>
                <iron-icon icon="add" slot="prefix"></iron-icon>
            </vaadin-button>
            <vaadin-button theme="contained">
                <span>Suffix</span>
                <iron-icon icon="chevron-right" slot="suffix"></iron-icon>
            </vaadin-button>
        </section>
        <section>
            <vaadin-text-field label="Text" value="Value"></vaadin-text-field>
            <vaadin-password-field label="Password" value="Secret –&nbsp;hush!" placeholder="Type a secret"></vaadin-password-field>
            <br>
            <vaadin-text-area label="Text area" value="Value" placeholder="Placeholder"></vaadin-text-area>
        </section>
    `;
};