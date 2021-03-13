# Canvas Kit CSS Fonts

By default, no fonts are included with Canvas Kit modules. To use official Canvas Kit fonts, install
and import the `@workday/canvas-kit-css-fonts` module. Note that this module sources fonts from the
Workday CDN.

Canvas Kit Fonts requires users to opt in to using fonts by including it into their project
declaratively through a link tag or through an import statement processed by a bundler like webpack.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-fonts
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-fonts/index.scss';
```

This import provides `@font-face` declarations for the `Roboto` and `Roboto Mono` font families.
