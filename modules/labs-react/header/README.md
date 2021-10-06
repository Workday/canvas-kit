# Canvas Kit Labs React Header (Deprecated)

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

A set of components to create headers for various Workday applications and sites.

For a full suite of examples, have a look at the [Header Stories](./stories.tsx).

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

# Header

This component renders a responsive, Canvas-style header.

## Usage

```tsx
import * as React from 'react';
import {DeprecatedHeader} from '@workday/canvas-kit-labs-react/header';
import {IconButton} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {notificationsIcon} from '@workday/canvas-system-icons-web';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

<DeprecatedHeader title="Header" brandUrl="#">
  <nav>
    <ul>
      <li className="current">
        <a href="#">Discover</a>
      </li>
      <li>
        <a href="#">Library</a>
      </li>
      <li>
        <a href="#">Create</a>
      </li>
      <li>
        <a href="#">Manage</a>
      </li>
    </ul>
  </nav>
  <IconButton
    icon={notificationsIcon}
    variant="circle"
    title="Notifications"
    aria-label="Notifications"
  />
  <Avatar
    onClick={() => {
      alert('clicked avatar');
    }}
    altText="Profile"
  />
  <PrimaryButton>Sign Up</PrimaryButton>
</DeprecatedHeader>;
```

## Special Children

### `nav, ul, li`

> For a semantic navigation menu, this component will style a child `<nav>` element with an
> un-ordered list inside (`<ul>`). This list can contain any number of `<li>` elements with `<a>`
> elements. You can visually distinguish the link that your page is currently on by adding the class
> name: `"current"` to the `<li>` element containing the current page link.

### `SystemIcon`

_Deprecated (but supported) - please use `IconButton` instead._

> The Header supports Canvas `SystemIcon` components, but will convert them into an `IconButton`
> with the correct styling for the theme you've provided.

### A Note About `Buttons`

> Please use a `Primary` Canvas `Button` for this component's call-to-action buttons (see the
> [usage example](#usage) below).

## Static Properties

#### `Theme: DeprecatedHeaderTheme`

```tsx
<DeprecatedHeader title="Blue Header" themeColor={DeprecatedHeader.Theme.Blue} />
```

---

#### `Variant: DeprecatedHeaderVariant`

```tsx
<DeprecatedHeader title="Marketing Header" variant={DeprecatedHeader.Variant.Full} />
```

## Component Props

### Required

> None

### Optional

#### `title: string`

> The title displayed on the header next to the logo.

Default: `''`

---

#### `themeColor: DeprecatedHeaderTheme`

> The theme of the header (White, Blue, or Transparent).

| Theme       | Description                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| White       | White background with dark-colored text, blue system icons.                                      |
| Blue        | Dark blue gradient background with white text, white system icons.                               |
| Transparent | Transparent background (intended for dark-colored overlays) with white text, white system icons. |

Default: `DeprecatedHeaderTheme.White`

---

#### `variant: DeprecatedHeaderVariant`

> Specifies the variation of the header.

| Variant | Description                                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dub     | "Dub" headers have a singular "Dub" logo and a title, separated by a equivalent-height divider. It is shorter in height (64px) than the "Full" variant.                                                |
| Full    | "Full" headers have the full Workday logo and an optional title at minimum, separated by an equivalent-height divider (when a title is defined). It is taller in height (80px) than the "Dub" variant. |

Default: `DeprecatedHeaderVariant.Dub`

---

#### `brandUrl: string`

> The href attribute when clicking on the title logo. Default: `'#'`

---

#### `brand: React.ReactNode`

> If specified, this replaces the contents of the Dub logo and title. Used for replacing Dub + title
> with a `contained lockup` and/or for adding custon design elements next to the Dub + title lockup.

Default: `DeprecatedDubLogoTitle` (for "Dub" variants) or `DeprecatedWorkdayLogoTitle` (for "Full" variants)

---

#### `isCollapsed: boolean`

> Indicates whether the children in the header should be collapsed.
>
> - The `nav` element collapses into a hamburger icon menu. Any `IconButton` or `SystemIcon` will
>   also collapse.

---

#### `onMenuClick: (React.MouseEvent) => void`

> A click handler for when the user clicks the mobile collapsed nav icon.

---

#### `centeredNav: boolean`

> When true, the header centers the nav in the middle of the header.

#### `leftSlot: React.ReactElement`

> A React element for the left of the header, this is typically a search bar component

# Global Header (Deprecated)

The Global Header (or App Header) is used for Workday applications.

## Usage

```tsx
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {DeprecatedGlobalHeader, DeprecatedDubLogoTitle} from '@workday/canvas-kit-labs-react/header';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {IconButton} from '@workday/canvas-kit-react/button';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';

const HeaderBrand = () => <DeprecatedDubLogoTitle themeColor={Header.Theme.White} />
const HeaderAvatar = () => <Avatar onClick={handleMenuClick} url="https://my.cdn.amazonaws.com/assets/avatar_pic.png" />
const handleSearchSubmit = event => {
  const query = (event.target as HTMLFormElement).getElementsByTagName('input')[0].value;
  console.log("Submitted query: ", query)
}
const openMenu = e => console.log("Menu opened")

/**
 * In this instance, the right-most child will be an Avatar component, when the DeprecatedGlobalHeader
 * shrinks below the specified breakpoint (720 in this case), the children get replaced by a menuToggle.
 * For most DeprecatedGlobalHeader implementations, the menuToggle is also the Avatar component.
 */
<DeprecatedGlobalHeader
  brand={<HeaderBrand />}
  menuToggle={<HeaderAvatar />}
  onMenuClick={openMenu}
  leftSlot={<SearchForm
    isCollapsed={false}
    grow={true}
    onSubmit={handleSearchSubmit}
  />}
  isCollapsed={false}
>
  <IconButton icon={notificationsIcon} variant={IconButton.Variant.Circle} />
  <IconButton icon={inboxIcon} variant={IconButton.Variant.Circle} />
  <HeaderAvatar />
</DeprecatedGlobalHeader>
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `brand: React.ReactNode`

> If specified, this replaces the contents of the Dub logo and title. Used for replacing Dub + title
> with a branded element and/or for adding custon design elements next to the Dub + title lockup.

Default: `<DeprecatedDubLogoTitle />`

#### `menuToggle: React.ReactNode`

> _Note: This `menuToggle` slot only appears when the screen size shrinks below the `breakpoint`._
>
> For most `DeprecatedGlobalHeader` implementations, this is generally the same as the users' `Avatar`. If not
> specified, `menuToggle` defaults to a "hamburger" menu icon or "justify" icon.

Default: `justifyIcon` from `@workday/canvas-system-icons-web`

#### `onMenuClick: (React.MouseEvent) => void`

> A click handler for when the user clicks the `menuToggle` element.

Default: `<DeprecatedDubLogoTitle />`

#### `leftSlot: React.ReactElement`

> A React element for the left of the header, this is typically a search bar component

#### `isCollapsed: boolean`

> If true, renders the header with the children collapsed.

# "Dub" Logo and Title

_Intended to be used in conjunction with the `DeprecatedHeader` component_

A component that encapsulates the 'Dub' logo and a title (we call this the contained lockup). This
is used whenever you want to override the contained lockup that comes default with a header, or if
you want to add more elements next to the title with custom components or markup, or change the
background color of the contained lockup

## Usage

```tsx
import {DeprecatedHeader, DeprecatedDubLogoTitle} from '@workday/canvas-kit-labs-react/header';
import {colors} from '@workday/canvas-kit-react/tokens';

<DeprecatedHeader
  brand={<DeprecatedDubLogoTitle title="This title will show up instead" bgColor={colors.blueberry600} />}
/>;
```

## Static Properties

> None

## Component Props

### Required

#### `title: string`

> The title displayed on the header next to the logo.

Default: `''`

### Optional

#### `themeColor: DeprecatedHeaderTheme`

> The theme of the header (White, Blue, or Transparent).

Default: `DeprecatedHeaderTheme.White`

---

#### `bgColor: string`

> Sets the `background` CSS property for the contained lockup.

Default: `'none'`

# Workday Logo and Title

_Intended to be used in conjunction with the `DeprecatedHeader` component_

A component that contains the full Workday logo and a title. This is used whenever you want to
override the contained lockup that comes default with a header, or if you want to add more elements
next to the title with custom components or markup.

## Usage

```tsx
import {DeprecatedHeader, DeprecatedWorkdayLogoTitle} from '@workday/canvas-kit-labs-react/header';

<DeprecatedHeader brand={<DeprecatedWorkdayLogoTitle title="Display Title" />} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `themeColor: DeprecatedHeaderTheme`

> The theme of the header (White, Blue, or Transparent). See the
> [`themeColor`](#themecolor-headertheme) prop on the `DeprecatedHeader` component.

Default: `DeprecatedHeaderTheme.White`

---

#### `title: string`

> The title displayed on the header next to the logo.

Default `''`
