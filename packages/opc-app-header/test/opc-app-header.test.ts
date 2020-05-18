import { html, fixture, expect } from '@open-wc/testing';

import {OpcAppHeader} from '../src/OpcAppHeader.js';
import '../opc-app-header.js';

describe('OpcAppHeader', () => {
  // it('has a default title "Hey there" and counter 5', async () => {
  //   const el: OpcAppHeader = await fixture(html`
  //     <opc-app-header></opc-app-header>
  //   `);

  //   expect(el.title).to.equal('Hey there');
  //   expect(el.counter).to.equal(5);
  // });

  // it('increases the counter on button click', async () => {
  //   const el: OpcAppHeader = await fixture(html`
  //     <opc-app-header></opc-app-header>
  //   `);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el: OpcAppHeader = await fixture(html`
  //     <opc-app-header title="attribute title"></opc-app-header>
  //   `);

  //   expect(el.title).to.equal('attribute title');
  // });

  it('passes the a11y audit', async () => {
    const el: OpcAppHeader = await fixture(html`
      <opc-app-header></opc-app-header>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
