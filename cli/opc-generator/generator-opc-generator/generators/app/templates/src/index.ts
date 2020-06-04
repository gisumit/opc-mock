import { LitElement, html, css } from "lit-element";

export default class MyCounter extends LitElement {
  count = 0;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    setInterval(() => {
      this.count += 1;
    }, 1000);
  }

  static get styles() {
    return css`
      * {
        font-size: 200%;
      }
    `;
  }

  render() {
    return html` <span>${this.count}</span> `;
  }
}

customElements.define("<%= elementName %>", MyCounter);
