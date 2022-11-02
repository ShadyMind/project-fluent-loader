# project-fluent-loader

## Installation

### Via npm:
```bash
npm install --save @fluent/bundle project-fluent-loader
```

### Via yarn:
```bash
yarn add @fluent/bundle project-fluent-loader
```

## Configuration
default extension for project-fluent files is `.ftl`. We need to add only loader to webpack config:
```javascript
/** @module webpack.config.js */

module.exports = {
  module: {
    rules: [
      {
        test: /\.ftl$/,
        loader: 'project-fluent-loader'
      }
    ]
  }
};
```

## Usage
Importing file returns default instanced of FluentResource from `@fluent/bundle`:

```javascript
/** @module translation.ts */
import enGB from './en-GB.ftl';

export const l10n = new ReactLocalization();
l10n.addBundle(enGB);
```