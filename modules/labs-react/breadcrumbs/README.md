# Canvas Kit React Breadcrumbs

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This component is work in progress and currently in pre-release.

Breadcrumbs provides navigation to previous levels of pages.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

Breadcrumbs is a composable component that provides more flexibility in its structure. There are two
main variations: `List` and `CollapsibleList`. First, we'll discuss `List`. There will also be
information about the shared sub-components below.

### `List`

The `List` component is a styled, unordered list (`ul`) with no additional behaviors. Use this when
you're not concerned about collapsing the list of breadcrumb items into a dropdown menu at a
specified width.

#### Component Props

This component supports
[all native `ul` props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#Attributes).

#### Usage

```tsx
import React from 'react';
import Breadcrumbs from '@workday/canvas-kit-labs-react/breadcrumbs';

const AccountInvoiceBreadcrumbNav = () => {
  return (
    <Breadcrumbs.Nav aria-label="Breadcrumb">
      <Breadcrumbs.List>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/account">Account</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/billing">Billing</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/invoices">Invoices</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentItem>
          2020_08_01_invoice.pdf
        </Breadcrumbs.CurrentItem>
      </BreadCrumbs.List>
    </Breadcrumbs.Nav>
  );
}
```

### CollapsibleList

The `CollapsibleList` component is built on top of `List`. It has additional functionality to
collapse items in the list into a dropdown menu at a specified width.

#### Component Props

| name            | type               | required | default              | recommended                              |
| --------------- | ------------------ | -------- | -------------------- | ---------------------------------------- |
| maxWidth        | `number`           | `true`   | n/a                  | n/a                                      |
| buttonAriaLabel | `string`           | `true`   | n/a                  | "more links" (and translated equivalent) |
| buttonIcon      | `CanvasSystemIcon` | `false`  | `relatedActionsIcon` | n/a                                      |

This component also supports
[all native `ul` props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul#Attributes).
The `buttonAriaLabel` prop is required for accessibility. We recommend using `"more links"` as seen
in the example. This label is applied to the dropdown menu button.

##### Handling Collapse

The `maxWidth` prop sets the point to collapse. If the length of the list exceeds that value, items
will be collapsed into a dropdown menu. Note that the first (root) item and last (current) items in
the list will never be collapsed.

##### Handling Custom Dropdown Button Icons

By default the icon for the dropdown button is `relatedActionsIcon`. However, you can set this to
any [Canvas System Icon](https://design.workday.com/tokens/assets/icons/system-icons) with the
`buttonIcon` prop. Please consult the Canvas team if you decide to do this, as we'd like to keep
breadcrumb navigation as consistent as possible.

#### Usage

```tsx
const AccountInvoiceCollapsibleBreadcrumbNav = () => {
  return (
    <Breadcrumbs.Nav aria-label="Breadcrumb">
      <Breadcrumbs.CollapsibleList maxWidth={800} buttonAriaLabel="more links">
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/account">Account</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/billing">Billing</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.ListItem>
          <Breadcrumbs.Link href="/invoices">Invoices</Breadcrumbs.Link>
        </Breadcrumbs.ListItem>
        <Breadcrumbs.CurrentItem>
          2020_08_01_invoice.pdf
        </Breadcrumbs.CurrentItem>
      </BreadCrumbs.CollapsibleList>
    </Breadcrumbs.Nav>
  );
}
```

### Nav

`Breadcrumb.Nav` a styled `nav` element.

#### Component Props

| name       | type     | required | default | recommended                              |
| ---------- | -------- | -------- | ------- | ---------------------------------------- |
| aria-label | `string` | `true`   | n/a     | "Breadcrumb" (and translated equivalent) |

This component supports
[all native HTMLElement props](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
The `aria-label` prop is required for accessibility. We recommend using `"Breadcrumb"` as seen in
the example.

#### Usage

```tsx
import React from 'react';
import Breadcrumbs from '@workday/canvas-kit-labs-react/breadcrumbs';

...

return (
  <Breadcrumbs.Nav aria-label="Breadcrumb">
    {/* breadcrumb list goes here */}
  </Breadcrumbs.Nav>
);
```

### ListItem

`ListItem` is a styled `li` element that contains a `SystemIcon` separator.

#### Component Props

This component supports
[all native `li` element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#Attributes).

#### Usage

```tsx
import React from 'react';
import Breadcrumbs from '@workday/canvas-kit-labs-react/breadcrumbs';

return <Breadcrumbs.ListItem>{/* breadcrumb link goes here */}</Breadcrumbs.ListItem>;
```

#### RTL (Right-To-Left) Support

This component will automatically toggle the separator icon from `chevronRightSmallIcon` to
`chevronLeftSmallIcon` when RTL is in use.

### Link

`Link` is a styled `a` element that also renders a tooltip if the text is truncated.

#### Component Props

| name     | type                     | required | default |
| -------- | ------------------------ | -------- | ------- |
| href     | `string`                 | `true`   | n/a     |
| maxWidth | `number`                 | `false`  | `350`   |
| onAction | `(href: string) => void` | `false`  | n/a     |

This component also supports
[all native `a` element props](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes).

#### Usage

##### Handling Redirects

`Link` defaults to redirecting with an `href`, meaning the page will hard-redirect when the link is
clicked. However, if you're in a single page application (SPA) environment, you might want to use
the internal SPA router instead. You can override this hard-redirect with the `onAction` prop. Note
that `onAction` will not block any `onClick` if provided. Let's look at an example below:

```tsx
import React from 'react';
// using the history package
import { createBrowserHistory } from 'history';
import Breadcrumbs from '@workday/canvas-kit-labs-react/breadcrumbs';

// this is likely being done at the root of your application and not inside this component.
const history = createBrowserHistory();

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // handle any click side-effects here
  console.log('click event', event);
}

const handleRedirect = (href: string) => {
  // redirect using the internal SPA router
  history.push(href);
}

return (
  <Breadcrumbs.Link
    href="/account"
    onAction={handleRedirect}
    onClick={handleClick}
  >
    Account
  </Breadcrumbs.Link>;
)
```

##### Handling Truncation

`Link` has built-in truncation + tooltip functionality to provide an easy-to-use, accessible feature
for managing the length of link text. By default, the `maxWidth` is set to `350`, however you can
adjust this as needed. Note that tooltips will only render when text is truncated. Here's an
example:

```tsx
import React from 'react';
import Breadcrumbs from '@workday/canvas-kit-labs-react/breadcrumbs';

return (
  <Breadcrumbs.Link maxWidth={150} href="/account">
    2019_Q2_financial_documents
  </Breadcrumbs.Link>
);
```

### CurrentItem

`CurrentItem` is a styled `li` element also renders a tooltip if the text is truncated.

#### Component Props

| name     | type     | required | default |
| -------- | -------- | -------- | ------- |
| maxWidth | `number` | `false`  | `350`   |

This component also supports
[all native `li` element props](<(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#Attributes).>).

#### Usage

```tsx
import React from 'react';
import Breadcrumbs from '@workday/canvas-kit-labs-react/breadcrumbs';

return (
  <Breadcrumbs.CurrentItem>
    2020_06_28_Summary_of_Annual_Recurring_Revenue.pdf
  </Breadcrumbs.CurrentItem>
);
```

##### Handling Truncation

`CurrentItem` has built-in truncation + tooltip functionality to provide an easy-to-use, accessible
feature for managing the length of link text. By default, the `maxWidth` is set to `350`, however
you can adjust this as needed. Note that tooltips will only render when text is truncated. Here's an
example:

```tsx
import React from 'react';
import Breadcrumbs from '@workday/canvas-kit-labs-react/breadcrumbs';

return (
  <Breadcrumbs.CurrentItem maxWidth={150}>
    2020_06_28_Summary_of_Annual_Recurring_Revenue.pdf
  </Breadcrumbs.CurrentItem>
);
```

### RTL (Right-To-Left) Support

`Breadcrumbs` handles RTL internally without additional configuration needed. All you need to supply
is the translated text for items and ARIA labels.

### Accessibility

Accessibility is built into `Breadcrumbs` in a way that allows you to create an inclusive experience
little additional configuration. The only ARIA labels you'll need to add are the `aria-label` for
the `Nav` and the `buttonAriaLabel` for the `CollapsibleList`. And all links require `href`s to be
properly identified. All other accessible attributes are baked into the components.
