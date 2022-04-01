# Canvas Kit Cookie Banner (Deprecated)

> Note: As of Canvas Kit v6, CookieBanner is being soft-deprecated. It will be hard-deprecated
> (completely removed) in v7. Please see the
> [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v6-0--page)
> for more information.

Cookie banner component.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

Fixes a cookie banner to the bottom of the web page.

Can be configured with a "Cookie Settings" element and a custom notice.

```tsx
import DeprecatedCookieBanner from '@workday/canvas-kit-react/cookie-banner'

<DeprecatedCookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
/>

<DeprecatedCookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  onClickSettings={this.openSettings}
  notice="Custom notice"
/>

<DeprecatedCookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  onClickSettings={this.openSettings}
  notice={`${DeprecatedCookieBanner.DefaultNotice} This is appended.`}
/>

<DeprecatedCookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  notice={<Component />}
/>
```

## Static Properties

#### `DefaultNotice: string`

> We use cookies to ensure that we give you the best experience on our website. If you continue
> without changing your settings, we’ll assume that you are willing to receive cookies.

```tsx
<DeprecatedCookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  onClickSettings={this.openSettings}
  notice={`${DeprecatedCookieBanner.DefaultNotice} This is appended.`}
/>
```

## Component Props

### Required

#### `onAccept: (e: React.MouseEvent<HTMLButtonElement>) => void`

> Callback executed upon accepting cookies. The function should set `isClosed` to true.

### Optional

#### `isClosed: boolean`

> Whether or not the banner is closed.

Default: `false`

---

#### `onClickSettings: (e: React.MouseEvent<HTMLButtonElement>) => void`

> Callback executed upon clicking the "Cookie Settings" button. Adding this will automatically
> display the "Cookie Settings" button.

Default: `undefined`

---

#### `notice: React.ReactNode`

> Custom cookie notice text or element to display.

Default: `DeprecatedCookieBanner.DefaultNotice`

#### `settingsLabel: string`

> Default label for cookie settings

Default: 'Cookie Settings'
