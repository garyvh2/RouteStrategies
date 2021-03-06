/**
 * Component Base Elements
 */
import { html } from '@polymer/lit-element';

export default html`
    <style>
        :host {
            display: block;
            box-sizing: border-box;
        }

        section {
            padding: 24px;
            background: var(--app-section-odd-color);
        }

        section {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }

        section:nth-of-type(even) {
            background: var(--app-section-even-color);
        }

        h2 {
            font-size: 24px;
            text-align: center;
            color: var(--app-dark-text-color);
        }

        @media (min-width: 460px) {
            h2 {
                font-size: 36px;
            }
        }

        .circle {
            display: block;
            width: 64px;
            height: 64px;
            margin: 0 auto;
            text-align: center;
            border-radius: 50%;
            background: var(--app-primary-color);
            color: var(--app-light-text-color);
            font-size: 30px;
            line-height: 64px;
        }
    </style>
`;
