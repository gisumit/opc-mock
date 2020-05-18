import { html, css, LitElement, property } from 'lit-element';

export class OpcBackToTop extends LitElement {
  static styles =css`
    :host {
      display: inline-block;
    }
  `;

  __scrollToTop() {
    window.scrollTo(0,0);
  }

  render() {
    return html`
      <div @click=${this.__scrollToTop}>
        <slot>
          <!-- Render children here  -->
        </slot>
      </div>
    `;
  }
}
