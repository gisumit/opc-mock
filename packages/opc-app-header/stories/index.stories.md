```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/opc-app-header.js';

export default {
  title: 'OpcAppHeader',
  component: 'opc-app-header',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# OpcAppHeader

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add opc-app-header
```

```js
import 'opc-app-header/opc-app-header.js';
```

```js preview-story
export const Simple = () => html`
  <opc-app-header></opc-app-header>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <opc-app-header title="Hello World"></opc-app-header>
`;
```
