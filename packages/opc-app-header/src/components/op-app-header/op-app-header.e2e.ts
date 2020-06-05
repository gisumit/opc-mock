import { newE2EPage } from '@stencil/core/testing';

describe('op-app-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<op-app-header></op-app-header>');

    const element = await page.find('op-app-header');
    expect(element).toHaveClass('hydrated');
  });
});
