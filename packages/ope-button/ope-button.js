import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `ope-button`
 * one-portal-element-button
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class OpeButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ope-button',
      },
    };
  }
}

window.customElements.define('ope-button', OpeButton);
