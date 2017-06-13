# Canvas Kit Banner

Errors and Alerts notify users of missteps that happen within a workflow and describe how the user
can take appropriate action to resolve them.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-banner
```

## Usage

```tsx
import Banner from '@workday/canvas-kit-react-banner';

<Banner label="3 errors" />;
```

## Static Properties

> None

## Component Props

### Required

#### `label: String`

> Label of the banner

### Optional

#### `onClick: (e: React.SyntheticEvent) => void`

> Function called when the user click on the banner

#### `variant: BannerVariant`

> Set the banner variant as `full` or `sticky`

#### `theme: BannerTheme`

> Set the banner theme as `alert` or `error`

#### `actionText: string`

> Set the action text in the `full` variant
