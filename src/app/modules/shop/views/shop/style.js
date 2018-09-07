/**
 * Component Base Elements
 */
import { html } from "@polymer/lit-element";

/**
 * Component Style Importings
 */
import SharedStyles from "../../../../shared/styles/shared-styles"

/**
 * Component Style Definition
 */
 export default html `     
    ${SharedStyles}
    <style>
        button {
            border: 2px solid var(--app-dark-text-color);
            border-radius: 3px;
            padding: 8px 16px;
        }
        button:hover {
            border-color: var(--app-primary-color);
            color: var(--app-primary-color);
        }
        .cart, .cart svg {
            fill: var(--app-primary-color);
            width: 64px;
            height: 64px;
            margin: 0 auto;
        }
        .circle.small {
            margin-top: -72px;
            width: 28px;
            height: 28px;
            font-size: 16px;
            font-weight: bold;
            line-height: 30px;
        }
    </style>
`;