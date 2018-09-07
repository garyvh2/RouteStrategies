/**
 * Component Base Elements
 */
import { html } from "@polymer/lit-element";

/**
 * Component Style Importings
 */
import ViewStyle from "./style";
import { notFound } from "../../styles/svgs.js";


export default function () {
    return  html`
        <section>
            ${ViewStyle}
            <div class='error-banner'>
                ${notFound}
                <div class='error-message'>
                    <h2>Not Found.</h2>
                    <p><span>This page doesn't exist.</span></p>
                </div>
            </div>  
        </section>
    `;
};