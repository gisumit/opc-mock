import { newSpecPage } from '@stencil/core/testing';
import { OpAppHeader } from './op-app-header';

describe('op-app-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OpAppHeader],
      html: `<op-app-header></op-app-header>`,
    });
  });
});
