# Canvas Kit Common

Canvas Kit Common contains common utilities shared across the kit.

Includes:

- Errors
- Forms

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-common
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

You may also import specific modules from `/lib`.

```scss
@import '~@workday/canvas-kit-css-common/index.scss';

or

@import '~@workday/canvas-kit-css-common/lib/errors.scss';
```

## Errors

`errors` has alert and error styles for inputs.

## Forms

`forms` has shared styles for inputs.

## Accessibility

`accessibility` has focus for inputs and method to provide screen reader only content.
