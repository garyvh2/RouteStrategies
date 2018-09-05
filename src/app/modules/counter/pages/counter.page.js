// ======= Component Base Elements =======
// LIT-HTML/Element
import { LitElement, html } from "@polymer/lit-element";
// Redux Story Connect Mixin
import { connect } from "pwa-helpers/connect-mixin";
// App Store
import { store } from "../../../app.store";
// Actions
import { Actions, Counter } from "../duck";
store.addReducers({
    Counter
});


// ========= Compoment Importings =========
import { SharedStyles } from "../../../shared/styles/shared-styles";
import "../components/counter.component";

// ====== Counter Element Definition ======
class CounterPage extends connect(store)(LitElement) {
    constructor() { super(); }

    _render(props) {
        return html `
        ${SharedStyles}
        <section>
          <h2>Redux example: simple counter</h2>
          <div class="circle">${props._value}</div>
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
            <counter-element value="${props._value}" clicks="${props._clicks}"
                on-counter-incremented="${() => store.dispatch(Actions.increment())}"
                on-counter-decremented="${() => store.dispatch(Actions.decrement())}">
            </counter-element>
          </p>
        </section>
      `;
    }

    static get properties() {
        return {
            // This is the data from the store.
            _clicks: Number,
            _value: Number
        }
    }

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._clicks = state.Counter.clicks;
        this._value = state.Counter.value;
    }
}
customElements.define("counter-page", CounterPage);