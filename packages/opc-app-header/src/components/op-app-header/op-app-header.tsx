import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'op-app-header',
  styleUrl: 'op-app-header.css',
  shadow: true,
})
export class OpAppHeader implements ComponentInterface {

  render() {
    return (
      <h1>op-app-header works</h1>
    );
  }

}
