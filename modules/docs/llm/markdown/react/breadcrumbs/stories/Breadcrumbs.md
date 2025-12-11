---
source_file: react/breadcrumbs/stories/Breadcrumbs.mdx
live_url: https://workday.github.io/canvas-kit/react/breadcrumbs/stories/Breadcrumbs
---

<Meta of={BreadcrumbsStories} />

# Canvas Kit Breadcrumbs

Breadcrumbs is a
[compound component](/getting-started/for-developers/resources/compound-components/) that allows
users to keep track and maintain awareness of their location as they navigate through pages,
folders, files, etc.

[> Workday Design Reference](https://design.workday.com/components/navigation/breadcrumbs)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Breadcrumbs` includes a container `Breadcrumbs` component and the following subcomponents which can
be composed in a variety of ways: `Breadcrumbs.List`, `Breadcrumbs.Item`, `Breadcrumbs.CurrentItem`
and `Breadcrumbs.Link`.

Accessibility is built into `Breadcrumbs` in a way that allows you to create an inclusive experience
with little additional configuration. As seen in the example below, you don't need to pass any
accessibility attributes, because they are baked into the component. You only need to add
`aria-label` attribute to a `nav` component through a `aria-label` prop of `Breadcrumbs`.

```tsx
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export const Basic = () => {
  return (
    <Breadcrumbs aria-label="Breadcrumbs">
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/menus">Menus</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/lunch">Lunch</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="/house-specialty-pies" maxWidth={100}>
            House Specialty Pies
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.CurrentItem maxWidth={100}>Canvas Supreme</Breadcrumbs.CurrentItem>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
};

```

Note that all links require an `href` to be properly identified.

### Overflow Breadcrumbs

`Breadcrumbs` is a responsive component based on the width of its container. If the rendered links
exceed the width of the `Breadcrumbs.List`, an overflow menu will be rendered. This only works
against the dynamic API where you give the `BreadcrumbsModel` an array of items to be rendered. The
dynamic API handles the React `key` for you based on the item's identifier. The dynamic API requires
either an `id` on each item object or a `getId` function that returns an identifier based on the
item. The example below uses an `id` property on each item.

```tsx
import * as React from 'react';
import {Breadcrumbs, useBreadcrumbsModel} from '@workday/canvas-kit-react/breadcrumbs';
import {Box} from '@workday/canvas-kit-react/layout';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export interface Breadcrumb {
  id: string;
  link?: string;
  text: string;
}

export const OverflowBreadcrumbs = ({width = '100%'}) => {
  const [items] = React.useState<Breadcrumb[]>([
    {id: '1', text: 'Home', link: '/'},
    {id: '2', text: 'Second Link', link: '#'},
    {id: '3', text: 'Third Link', link: '#'},
    {id: '4', text: 'Fourth Link', link: '#'},
    {id: '5', text: 'Fifth Link', link: '#'},
    {id: '6', text: 'Sixth Link', link: '#'},
    {id: '7', text: 'Current'},
  ]);

  const model = useBreadcrumbsModel({items});
  const [containerWidth, setContainerWidth] = React.useState(width);
  return (
    <div>
      <Box width={containerWidth} marginBottom="xl">
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span>Current Container Width: {containerWidth}</span>
          <span>Overflow visibility: {model.menu.state.visibility}</span>
        </div>
        <hr />
        <Breadcrumbs model={model} aria-label="Breadcrumbs">
          <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
            {item =>
              item.link ? (
                <Breadcrumbs.Item>
                  <Breadcrumbs.Link href={item.link}>{item.text}</Breadcrumbs.Link>
                </Breadcrumbs.Item>
              ) : (
                <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
              )
            }
          </Breadcrumbs.List>
          <Breadcrumbs.Menu.Popper>
            <Breadcrumbs.Menu.Card maxWidth={300} maxHeight={200}>
              <Breadcrumbs.Menu.List>
                {(item: Breadcrumb) => (
                  <Breadcrumbs.Menu.Item href={item.link}>{item.text}</Breadcrumbs.Menu.Item>
                )}
              </Breadcrumbs.Menu.List>
            </Breadcrumbs.Menu.Card>
          </Breadcrumbs.Menu.Popper>
        </Breadcrumbs>
      </Box>
      <hr />
      <h4>Change Breadcrumbs container size</h4>
      <SegmentedControl
        initialValue={width}
        onSelect={data => {
          setContainerWidth(data.id);
        }}
      >
        <SegmentedControl.List aria-label="container width control" marginBottom="m">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="480px">480px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="250px">250px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="150px">150px</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </div>
  );
};

```

The dynamic API takes in any object, but since nothing is known about your object, a
[render prop](https://reactjs.org/docs/render-props.html) is necessary to instruct a list how it
should render.

### Truncating a Link

`Breadcrumbs.Link` is a styled `<a>` element that also renders a tooltip if the text is truncated.
The built-in truncation and tooltip functionality provides an easy-to-use, accessible feature for
managing the length of link text. The `maxWidth` is set to `350px` by default and can be adjusted as
needed. Note that tooltips will only render when text is truncated. The example below uses a
`maxWidth` of `150px`.

```tsx
import * as React from 'react';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export const LinkTruncation = () => {
  return (
    <Breadcrumbs.Link href="/#" maxWidth={150}>
      Small Plates & Appetizers
    </Breadcrumbs.Link>
  );
};

```

### Item Truncation

`Breadcrumbs.CurrentItem` is a styled `<li>` element that also renders a tooltip if the text is
truncated. The built-in truncation and tooltip functionality provides an easy-to-use, accessible
feature for managing the length of the text. The `maxWidth` is set to `350px` by default and can be
adjusted as needed. Normally, this is a non-focusable element; when truncated, however, it sets the
`tabIndex` to `0` to enable the tooltip to appear on keyboard focus. Note that tooltips will only
render when text is truncated. The example below uses a `maxWidth` of `100px`.

```tsx
import * as React from 'react';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';

export const CurrentItemTruncation = () => {
  return (
    <Breadcrumbs aria-label="Breadcrumbs">
      <Breadcrumbs.CurrentItem maxWidth={100}>Foccacia Genovese</Breadcrumbs.CurrentItem>
    </Breadcrumbs>
  );
};

```

### Right-to-Left (RTL)

`Breadcrumbs` has bidirectional support out of the box. That means outside of setting the content
direction in your application's Canvas theme, you don't need to do anything else to make it work.
All you need to supply is the translated text for items and ARIA labels.

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Breadcrumbs} from '@workday/canvas-kit-react/breadcrumbs';
import {Box} from '@workday/canvas-kit-react/layout';

export interface Breadcrumb {
  id: string;
  link?: string;
  text: string;
}

export const RTLOverflowList = () => {
  const [items] = React.useState<Breadcrumb[]>([
    {id: '1', text: 'תנ״ך', link: '/tanakh'},
    {id: '2', text: 'כתובים', link: '/ketuvim'},
    {id: '3', text: 'משלי', link: '/proverbs'},
    {id: '4', text: 'בני תורתי אל־תשכח ומצותי יצר לבך׃', link: '/chapter-3-verse-1'},
    {id: '5', text: 'כי אורך ימים ושנות חיים ושלום יוסיפו לך׃', link: '/chapter-3-verse-2'},
    {id: '7', text: 'ומצא־חן ושכל־טוב בעיני אלהים ואדם׃'},
  ]);

  return (
    <CanvasProvider dir="rtl">
      <Box maxWidth="300px">
        <Breadcrumbs items={items} aria-label="Breadcrumbs">
          <Breadcrumbs.List overflowButton={<Breadcrumbs.OverflowButton aria-label="More links" />}>
            {item =>
              item.link ? (
                <Breadcrumbs.Item>
                  <Breadcrumbs.Link maxWidth={100} href={item.link}>
                    {item.text}
                  </Breadcrumbs.Link>
                </Breadcrumbs.Item>
              ) : (
                <Breadcrumbs.CurrentItem>{item.text}</Breadcrumbs.CurrentItem>
              )
            }
          </Breadcrumbs.List>
          <Breadcrumbs.Menu.Popper>
            <Breadcrumbs.Menu.Card maxWidth={300} maxHeight={200}>
              <Breadcrumbs.Menu.List>
                {(item: Breadcrumb) => (
                  <Breadcrumbs.Menu.Item href={item.link}>{item.text}</Breadcrumbs.Menu.Item>
                )}
              </Breadcrumbs.Menu.List>
            </Breadcrumbs.Menu.Card>
          </Breadcrumbs.Menu.Popper>
        </Breadcrumbs>
      </Box>
    </CanvasProvider>
  );
};

```

### Handling Redirects

`Breadcrumbs.Link` defaults to redirecting with an `href`, which means the page will hard-redirect
when the link is clicked. However, if you're in a single-page application (SPA) environment, you
might want to use the internal SPA router instead. You can override that behavior with a custom
`onClick` handler that blocks the default behavior of the event and passes along the link path to
your SPA router. Most of our consumers use `react-router-dom` for managing SPA routing, so below is
an example of how to do this in V5 and V6 of `react-router-dom`.

```tsx
// React Router DOM V5 API

...
const history = useHistory();
const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link?: string) => {
      event.preventDefault();
    // if no link is provided, default to the current path
    history.push(link || window.location.pathname);
}
return (
  <Breadcrumbs.Link href="/account" onClick={handleClick}>
    Account
  </Breadcrumbs.Link>
);

// React Router DOM V6 API

...
const navigate = useNavigate();
const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link?: string) => {
      event.preventDefault();
    // if no link is provided, default to the current path
    navigate(link || window.location.pathname);
}
return (
  <Breadcrumbs.Link href="/account" onClick={handleClick}>
    Account
  </Breadcrumbs.Link>
);
```

## Component API

<!-- API Reference for Breadcrumbs not found -->

## Specifications

### Specifications for Breadcrumbs

<!-- Component specifications from Breadcrumbs.spec.ts -->
