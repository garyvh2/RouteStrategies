/**
 * Component Base Elements
 */
import { html } from "@polymer/lit-element";

/**
 * Component Style Importings
 */
import ViewStyle from "./style";

/**
 * Redux Components
 */
import { store } from "../../../../app.store";
import { Actions } from "../../@redux";
 

export default function () {
    return html `
        ${ViewStyle}
        <section>
          <h2>Redux example: simple counter</h2>
          <div class="circle">${this._value}</div>
          <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
          element is not built in a Redux-y way (you can think of it as being a
          third-party element you got from someone else), but this page is connected to the
          Redux store. When the element updates its counter, this page updates the values
          in the Redux store, and you can see the current value of the counter reflected in
          the bubble above.</p>
          <br><br>
        </section>
        <section>
          <p>
            <counter-element value="${this._value}" clicks="${this._clicks}"
                on-counter-incremented="${() => store.dispatch(Actions.increment())}"
                on-counter-decremented="${() => store.dispatch(Actions.decrement())}">
            </counter-element>
          </p>
        </section>
    `;
};