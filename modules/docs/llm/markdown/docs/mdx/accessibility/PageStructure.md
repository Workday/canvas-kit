---
source_file: docs/mdx/accessibility/PageStructure.mdx
live_url: https://workday.github.io/canvas-kit/docs/mdx/accessibility/PageStructure
---

<Meta title="Guides/Accessibility/Page Structure" />

## Making Webpages Easy to Use for Everyone

Making a webpage easy to understand is important for everyone, especially for people with
disabilities. We do this by giving the page a clear and meaningful structure. This guide explains
how to use landmark regions, headings, lists, and tables to organize a page.

### Organizing Your Page with Landmark Regions

Imagine a webpage is like a house. It has different rooms for different purposes; a kitchen, a
bedroom, a living room, and so on. A good webpage is set up the same way. It has different sections,
like a header at the top, a main content area, and a footer at the bottom.

These sections are called landmark regions. They act like signs that tell a screen reader user where
they are on the page.

A screen reader user can quickly jump to a specific section, like the main content, without having
to listen to the whole page.

The most common landmark regions are:

- `<header>`: The top of the page.
- `<nav>`: The main navigation menu.
- `<main>`: The most important content on the page.
- `<footer>`: The bottom of the page.

All the content on the page should be inside one of these landmark regions. If you have two
navigation sections, make sure to give them different names so a screen reader can tell them apart.
For example, a global navigation region should be distinguishable from a bread crumb navigation
region.

```tsx
import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const gridLayoutStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.space.x4,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: `auto ${px2rem(300)} auto`,
});

const regionStyles = createStyles({
  border: `${px2rem(1)} solid ${system.color.border.contrast.default}`,
  borderRadius: system.shape.x2,
  padding: system.space.x4,
});

const headingStyles = createStyles({
  margin: system.space.zero,
});

export const LandmarkRegaions = () => {
  return (
    <Grid cs={gridLayoutStyles}>
      <Grid as="header" gridArea="Header" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" gridArea="SideBar" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" gridArea="BodyContent" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" gridArea="Footer" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};

```

### Using Headings to Outline Your Content

Headings are like the chapters and subheadings in a book. They create a clear outline for the page.
Just like you can scan a book's table of contents to see what it's about, a screen reader user can
get a list of all the headings on a page to understand its structure.

- Start your page's main content with a single `<h1>` heading. This is the most important title on
  the page.
- Use other headings (`<h2>`, `<h3>`, etc.) to create a clear order. Don't skip levels if possible.
  For example, don't jump straight from an `<h1>` to an `<h4>` heading unless the content design
  hierarchy leaves no other options.
- The heading levels should match how important the text looks on the page. The biggest, boldest
  titles should be `<h1>`, and so on.

## Full Page Demo

Further reading:
[Examples > Page Header](?path=/docs/guides-accessibility-examples-page-header--docs) and
[Examples > Side Panel Navigation](?path=/docs/guides-accessibility-examples-side-panel-navigation--docs)

```tsx
import React from 'react';
import {Flex, Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {GlobalHeader} from '../GlobalHeader';
import {SideBarContent} from '../SidePanelWithNavigation';
import {BreadcrumbNavRegion} from './BreadcrumbNavRegion';

const gridLayoutStyles = createStyles({
  gridTemplateAreas: `'Header Header Header Header'
    'SideBar BodyContent BodyContent BodyContent'
    'Footer Footer Footer Footer'`,
  gridGap: system.space.x4,
  gridTemplateColumns: '1fr 9fr',
  gridTemplateRows: `auto ${px2rem(800)} auto`,
});

const regionStyles = createStyles({
  border: `${px2rem(1)} solid ${system.color.border.contrast.default}`,
  borderRadius: system.shape.x2,
  padding: system.space.x4,
});

const verticalFlexStyles = createStyles({
  flexDirection: 'column',
  gap: system.space.x4,
});

const headingStyles = createStyles({
  margin: system.space.zero,
});

export const FullPageDemo = () => {
  const [notifications, setNotifications] = React.useState(0);

  function handleAdd() {
    setNotifications(prev => prev + 1);
  }

  function handleClear() {
    setNotifications(0);
  }

  return (
    <Grid cs={gridLayoutStyles}>
      <Grid as="header" gridArea="Header" cs={regionStyles}>
        <GlobalHeader notifications={notifications} />
      </Grid>
      <Grid as="nav" gridArea="SideBar" cs={regionStyles}>
        <Flex cs={verticalFlexStyles}>
          <SideBarContent />
        </Flex>
      </Grid>
      <Grid as="main" gridArea="BodyContent" cs={regionStyles}>
        <Flex cs={verticalFlexStyles}>
          <BreadcrumbNavRegion />
          <Flex gap={system.space.x4}>
            <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>
            <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>
          </Flex>
          <Heading as="h1" size="large" cs={headingStyles}>
            Heading Level 1
          </Heading>
          <Heading size="medium" cs={headingStyles}>
            Heading Level 2
          </Heading>
          <Heading as="h3" size="small" cs={headingStyles}>
            Heading Level 3
          </Heading>
        </Flex>
      </Grid>
      <Grid as="footer" gridArea="Footer" cs={regionStyles}>
        <Heading size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};

```
