# Canvas Kit Cookie Banner

Cookie banner component.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-cookie-banner
```

## Usage

Fixes a cookie banner to the bottom of the web page.

Can be configured with a "Cookie Settings" element and a custom notice.

```tsx
import CookieBanner from '@workday/canvas-kit-react-cookie-banner'

<CookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
/>

<CookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  onClickSettings={this.openSettings}
  notice="Custom notice"
/>

<CookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  onClickSettings={this.openSettings}
  notice={`${CookieBanner.DefaultNotice} This is appended.`}
/>

<CookieBanner
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
<CookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  onClickSettings={this.openSettings}
  notice={`${CookieBanner.DefaultNotice} This is appended.`}
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

Default: `CookieBanner.DefaultNotice`

#### `settingsLabel: string`

> Default label for cookie settings

Default: 'Cookie Settings'
