# project-fluent-loader

This loader is for [webpack](https://webpack.js.org/) and loads translation files for [project Fluent](https://projectfluent.org/). It have very simple and naive realization, but works well.

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
default extension for project-fluent files is `.ftl`. I recommend to use it. In this case we need to add only loader to webpack config to work with this kind of files:
```javascript
/** @file webpack.config.js */

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
/** @file translation.ts */
import enGB from './en-GB.ftl';

export const l10n = new ReactLocalization();
l10n.addBundle(enGB);
```

## Typings
Just add `"project-fluent-loader"` to `#compilerOptions.lib` array in your `tsconfig.json` config:
```jsonc
{
  "compilerOptions": {
    "lib": [
      "project-fluent-loader"
    ]
  }
}
```
Or if you prefer to use different file format use declaration from [this file](./module.d.ts).