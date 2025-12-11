---
source_file: docs/mdx/accessibility/SidePanel.mdx
live_url: https://workday.github.io/canvas-kit/docs/mdx/accessibility/SidePanel
---

<Meta title="Guides/Accessibility/Examples/Side Panel Navigation" />

## Side Panel As Navigation

This example demonstrates SidePanel as a navigation system that can be reduced into a "compact view"
to save horizontal space on screen. It combines semantic HTML nested list markup with Canvas Kit's
`<Expandable>` component to create an accordion. When in compact view, the Canvas Kit `<Menu>`
component is used to create the fly-out menus. Both of these components are implemented according to
the [W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/) to provide a
wide range of support for accessibility.

- The `<SidePanel>` uses the `as` prop to render with a semantic HTML `<nav>` element
- The SidePanel's heading element with the `labelProps` must remain in the DOM even while the
  component is in compact view, else the `aria-labelledby` reference for the toggle button will
  become invalid. The `hidden` attribute is conditionally set on the heading based on the `expanded`
  state of the SidePanel provided by the `useSidePanel` hook.
- The semantic HTML nested list markup helps support non-visual screen reader users understand the
  nested hierarchy of the elements inside the expandable containers
- In the compact view, the `<Tooltip>` component is used to provide an accessible name to the icon
  button menu targets

```tsx
import * as React from 'react';
import {system} from '@workday/canvas-tokens-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Subtext} from '@workday/canvas-kit-react/text';
import {Expandable} from '@workday/canvas-kit-react/expandable';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Menu} from '@workday/canvas-kit-react/menu';
import {birthdayIcon, checkIcon, ribbonIcon} from '@workday/canvas-system-icons-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {CanvasSystemIcon} from '@workday/design-assets-types';

interface AccordionItem {
  icon: CanvasSystemIcon;
  title: string;
  subtitle: string;
  items: string[];
}

const data = {
  bestsellers: {
    icon: ribbonIcon,
    title: 'Best Sellers',
    subtitle: 'Award winning sweet treats',
    items: ['Mango Coco Sago', 'Matcha Creme Pie', 'Key Lime Cheesecake', 'Tiramisu'],
  },
  cakes: {
    icon: birthdayIcon,
    title: 'Custom Cakes',
    subtitle: 'To celebrate your life milestones',
    items: ['Anniversary', 'Birthday', 'Graduation', 'Wedding'],
  },
};

const stylesOverride = {
  navContainer: createStyles({
    height: px2rem(800),
    positio: 'relative',
    backgroundColor: system.color.bg.alt.default,
  }),
  heading: createStyles({
    margin: system.space.zero,
  }),
  toggleBtn: createStyles({
    top: system.space.zero,
  }),
  accordionContainer: createStyles({
    listStyle: 'none',
    flexDirection: 'column',
    rowGap: system.space.zero,
    paddingInlineStart: system.space.zero,
  }),
  accordionIcon: createStyles({
    verticalAlign: 'middle',
    padding: system.space.x1,
  }),
  accordionSubText: createStyles({
    margin: system.space.zero,
  }),
  listContainer: createStyles({
    listStyle: 'none',
    padding: system.space.x4,
  }),
  compactListContainer: createStyles({
    listStyle: 'none',
    padding: system.space.x4,
    flexDirection: 'column',
    marginTop: system.space.x8,
  }),
  links: createStyles({
    textDecoration: 'none',
    padding: system.space.x4,
  }),
  linkCheck: createStyles({
    marginLeft: 'auto',
  }),
  flyOut: createStyles({
    marginTop: '8rem',
  }),
};

const Accordion = ({config}: {config: AccordionItem}) => {
  const [currentPage, setCurrentPage] = React.useState('');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    setCurrentPage(target.textContent || '');
  };

  return (
    <Expandable>
      <Expandable.Target>
        <SystemIcon cs={stylesOverride.accordionIcon} icon={config.icon} />
        <Expandable.Title>
          {config.title}
          <Subtext size="medium" cs={stylesOverride.accordionSubText}>
            {config.subtitle}
          </Subtext>
        </Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>
      <Expandable.Content as="ul" cs={stylesOverride.listContainer}>
        {config.items.map((i: string) => {
          return (
            <li key={i}>
              <Flex
                as="a"
                href="#"
                aria-current={i === currentPage ? 'true' : undefined}
                className={stylesOverride.links}
                onClick={handleClick}
              >
                {i}
                {i === currentPage && <SystemIcon icon={checkIcon} cs={stylesOverride.linkCheck} />}
              </Flex>
            </li>
          );
        })}
      </Expandable.Content>
    </Expandable>
  );
};

const IconButtonMenu = ({config}: {config: AccordionItem}) => {
  return (
    <Menu>
      <Tooltip title={config.title} placement="right">
        <Menu.Target as={TertiaryButton}>
          <SystemIcon icon={config.icon} />
        </Menu.Target>
      </Tooltip>
      <Menu.Popper placement="right">
        <Menu.Card cs={stylesOverride.flyOut}>
          <Menu.List>
            {config.items.map((i: string) => (
              <Menu.Item key={i}>{i}</Menu.Item>
            ))}
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
    </Menu>
  );
};

const CompactView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.compactListContainer}>
      <Flex.Item as="li">
        <IconButtonMenu config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <IconButtonMenu config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

const ExpandedView = () => {
  return (
    <Flex as="ul" cs={stylesOverride.accordionContainer}>
      <Flex.Item as="li">
        <Accordion config={data.bestsellers} />
      </Flex.Item>
      <Flex.Item as="li">
        <Accordion config={data.cakes} />
      </Flex.Item>
    </Flex>
  );
};

export const SideBarContent = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <SidePanel as="div" touched={panelProps.touched} expanded={panelProps.expanded}>
      <Heading
        size="small"
        cs={stylesOverride.heading}
        {...labelProps}
        hidden={!expanded ? true : undefined}
      >
        Cake or Death Bakery
      </Heading>
      <SidePanel.ToggleButton cs={stylesOverride.toggleBtn} {...controlProps} />
      {expanded ? <ExpandedView /> : <CompactView />}
    </SidePanel>
  );
};

export const WithNavigation = () => {
  return (
    <Flex as="nav" cs={stylesOverride.navContainer}>
      <SideBarContent />
    </Flex>
  );
};

```
