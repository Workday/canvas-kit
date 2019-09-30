# Canvas Kit Labs React Header

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/UNSTABLE-alpha-orange" alt="UNSTABLE: Alpha" />
</a>  This component is work in progress and currently in pre-release.

A set of components to create headers for various Workday applications and sites.

For a full suite of examples, have a look at the [Header Stories](./stories.tsx).

## Coming Soon

- Search Support
- Mobile Expanded Nav

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-header
```

# Header

This component renders a responsive, Canvas-style header.

## Usage

```tsx
import * as React from 'react';
import {Header} from '@workday/canvas-kit-labs-react-header';
import {AvatarButton} from '@workday/canvas-kit-react-avatar';
import {IconButton} from '@workday/canvas-kit-react-button';
import {notificationsIcon} from '@workday/canvas-system-icons-web';
import {Button} from '@workday/canvas-kit-react-button';

<Header title="Header" brandUrl="#">
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
    variant={IconButton.Variant.Circle}
    title="Notifications"
    aria-label="Notifications"
  />
  <AvatarButton
    onClick={() => {
      alert('clicked avatar');
    }}
    altText="Profile"
  />
  <Button variant={Button.Variant.Primary}>Sign Up</Button>
</Header>;
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

#### `Theme: HeaderTheme`

```tsx
<Header title="Blue Header" themeColor={Header.Theme.Blue} />
```

---

#### `Variant: HeaderVariant`

```tsx
<Header title="Marketing Header" variant={Header.Variant.Full} />
```

## Component Props

### Required

> None

### Optional

#### `title: string`

> The title displayed on the header next to the logo.

Default: `''`

---

#### `themeColor: HeaderTheme`

> The theme of the header (White, Blue, or Transparent).

| Theme       | Description                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| White       | White background with dark-colored text, blue system icons.                                      |
| Blue        | Dark blue gradient background with white text, white system icons.                               |
| Transparent | Transparent background (intended for dark-colored overlays) with white text, white system icons. |

Default: `HeaderTheme.White`

---

#### `variant: HeaderVariant`

> Specifies the variation of the header.

| Variant | Description                                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dub     | "Dub" headers have a singular "Dub" logo and a title, separated by a equivalent-height divider. It is shorter in height (64px) than the "Full" variant.                                                |
| Full    | "Full" headers have the full Workday logo and an optional title at minimum, separated by an equivalent-height divider (when a title is defined). It is taller in height (80px) than the "Dub" variant. |

Default: `HeaderVariant.Dub`

---

#### `brandUrl: string`

> The href attribute when clicking on the title logo. Default: `'#'`

---

#### `brand: React.ReactNode`

> If specified, this replaces the contents of the Dub logo and title. Used for replacing Dub + title
> with a `contained lockup` and/or for adding custon design elements next to the Dub + title lockup.

Default: `DubLogoTitle` (for "Dub" variants) or `WorkdayLogoTitle` (for "Full" variants)

---

#### `breakpoints: { sm: number, md: number, lg: number }`

> The min-width breakpoints at which to collapse the children of the header.
>
> Special children collapse in this order:
>
> - The `nav` element collapses into a hamburger icon menu after the screen width falls below the
>   `lg` breakpoint
> - Any `IconButton` or `SystemIcon` collapses after the screen width falls below the `md`
>   breakpoint
> - _`sm` may be reserved for future functionality_

Default:

```tsx
{
  sm: 320,
  md: 768,
  lg: 1120,
}
```

---

#### `onMenuClick: (React.SyntheticEvent) => void`

> A click handler for when the user clicks the mobile collapsed nav icon.

---

#### `centeredNav: boolean`

> When true, the header centers the nav in the middle of the header.

#### `onSearchSubmit: (React.SyntheticEvent) => void`

> A function that accepts a `React.SyntheticEvent` for when the user submits from the search input.
> A search input will not be rendered if this is not provided.

#### `highlightSearch: boolean`

> A flag to highlight the search on the left beside the logo. Will only work if `onSearchSubmit` is
> provided.

#### `onBreakpointChange: (BreakpointType | string) => void`

> If specified, this callback is executed after the screen size changes with the new breakpoint key.
> It also gets called on initialization so the consumer has the original breakpoint

# Global Header

The Global Header (or App Header) is used for Workday applications.

## Usage

```tsx
import {AvatarButton} from '@workday/canvas-kit-react-avatar';
import {GlobalHeader, DubLogoTitle} from '@workday/canvas-kit-labs-react-header';
import {Avatar} from '@workday/canvas-kit-react-avatar';
import {IconButton} from '@workday/canvas-kit-react-button';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';

const HeaderBrand = () => <DubLogoTitle themeColor={Header.Theme.White} />
const HeaderAvatar = () => <AvatarButton onClick={handleMenuClick} url="https://my.cdn.amazonaws.com/assets/avatar_pic.png" />
const handleSearchSubmit = query => console.log("Submitted query: ", query)
const openMenu = e => console.log("Menu opened")
const handleBreakpointChange = key => console.log(`Breakpoint change: ${key}`)

/**
 * In this instance, the right-most child will be an AvatarButton component, when the GlobalHeader
 * shrinks below the specified breakpoint (720 in this case), the children get replaced by a menuToggle.
 * For most GlobalHeader implementations, the menuToggle is also the AvatarButton component.
 */
<GlobalHeader
  brand={<HeaderBrand />}
  menuToggle={<HeaderAvatar />}
  onMenuClick={openMenu}
  onSearchSubmit={handleSearchSubmit}
  breakpoint={720}
  onBreakpointChange={handleBreakpointChange}
>
  <IconButton icon={notificationsIcon} variant={IconButton.Variant.Circle} />
  <IconButton icon={inboxIcon} variant={IconButton.Variant.Circle} />
  <HeaderAvatar />
</GlobalHeader>
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

Default: `<DubLogoTitle />`

#### `menuToggle: React.ReactNode`

> _Note: This `menuToggle` slot only appears when the screen size shrinks below the `breakpoint`._
>
> For most `GlobalHeader` implementations, this is generally the same as the users' `Avatar`. If not
> specified, `menuToggle` defaults to a "hamburger" menu icon or "justify" icon.

Default: `justifyIcon` from `@workday/canvas-system-icons-web`

#### `onMenuClick: (React.SyntheticEvent) => void`

> A click handler for when the user clicks the `menuToggle` element.

Default: `<DubLogoTitle />`

#### `onSearchSubmit: React.ReactNode`

> A function that accepts a `React.SyntheticEvent` for when the user submits from the search input.
> A search input will not be rendered if this is not provided.

#### `onBreakpointChange: (BreakpointType | string) => void`

> If specified, this callback is executed after the screen size changes with the new breakpoint key.
> It also gets called on initialization so the consumer has the original breakpoint

# "Dub" Logo and Title

_Intended to be used in conjunction with the `Header` component_

A component that encapsulates the 'Dub' logo and a title (we call this the contained lockup). This
is used whenever you want to override the contained lockup that comes default with a header, or if
you want to add more elements next to the title with custom components or markup, or change the
background color of the contained lockup

## Usage

```tsx
import {Header, DubLogoTitle} from '@workday/canvas-kit-labs-react-header';
import {colors} from '@workday/canvas-kit-react-core';

<Header
  brand={<DubLogoTitle title="This title will show up instead" bgColor={colors.blueberry600} />}
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

#### `themeColor: HeaderTheme`

> The theme of the header (White, Blue, or Transparent).

Default: `HeaderTheme.White`

---

#### `bgColor: string`

> Sets the `background` CSS property for the contained lockup.

Default: `'none'`

# Workday Logo and Title

_Intended to be used in conjunction with the `Header` component_

A component that contains the full Workday logo and a title. This is used whenever you want to
override the contained lockup that comes default with a header, or if you want to add more elements
next to the title with custom components or markup.

## Usage

```tsx
import {Header, WorkdayLogoTitle} from '@workday/canvas-kit-labs-react-header';

<Header brand={<WorkdayLogoTitle title="Display Title" />} />;
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `themeColor: HeaderTheme`

> The theme of the header (White, Blue, or Transparent). See the
> [`themeColor`](#themecolor-headertheme) prop on the `Header` component.

Default: `HeaderTheme.White`

---

#### `title: string`

> The title displayed on the header next to the logo.

Default `''`
