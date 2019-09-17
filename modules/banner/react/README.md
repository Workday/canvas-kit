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

#### `ErrorType: ErrorType`

```tsx
<Banner error={Banner.ErrorType.Error} label="3 errors" />
```

---

#### `Variant: BannerVariant`

```tsx
<Banner variant={Banner.Variant.Sticky} label="3 errors" />
```

## Component Props

### Required

#### `label: String`

> Label of the banner

### Optional

#### `onClick: (e: React.SyntheticEvent) => void`

> Function called when the user click on the banner

#### `variant: BannerVariant`

> Set the banner variant as `full` or `sticky`

Default: `BannerVariant.Full`

#### `error: ErrorType`

> Set the banner type as `alert` or `error`

Default: `ErrorType.Alert`

#### `actionText: string`

> Set the action text in the `full` variant

Default: `'View All'`
