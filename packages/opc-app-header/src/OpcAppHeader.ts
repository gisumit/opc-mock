import { html, css, LitElement } from 'lit-element';

export class OpcAppHeader extends LitElement {
  static styles =css`
    :host {
      display: block;
      padding: 1rem 1rem 0 1rem;
      font-family: 'Red Hat Display';
      background-color: var(--app-header-bg, #fff);
      color: var(--app-header-text-color: #000);
    }

    .top-bar, .bottom-bar{
      height: 72px;
      color: var(--app-header-text-color: #000);
    }

    header > h1 {
      color: var(--app-header-text-color: #000);
    }
  `;

  render() {
    return html`
      <header>
        <div class="top-bar">
          <slot name="top-bar-slot"></slot>
        </div>
        <div class="bottom-bar">
          <slot name="bottom-bar-slot"></slot>
        </div>
      </header>
    `;
  }
}
