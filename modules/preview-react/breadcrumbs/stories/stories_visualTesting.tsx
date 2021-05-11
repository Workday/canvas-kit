/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {StaticStates} from '@workday/canvas-kit-labs-react/tokens';

import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../utils/storybook';

import {Breadcrumbs} from '../index';
import README from '../README.md';
import {BreadcrumbLinkProps} from '../lib/Breadcrumbs/List/Link';
import {useDropdown} from '../lib/Breadcrumbs/Dropdown/hooks';
import {DropdownMenu} from '../lib/Breadcrumbs/Dropdown/Menu';

export default withSnapshotsEnabled({
  title: 'Testing/React/Labs/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [withReadme(README)],
});

const leftToRightItems = [
  {
    href: '/hover',
    children: 'Hover Link Truncated Text',
    maxWidth: 120,
    className: 'hover',
  },
  {
    href: '/focus"',
    children: 'Focus Link Truncated Text',
    maxWidth: 120,
    className: 'focus',
  },
  {
    href: '/hover focus"',
    children: 'Hover Focus',
    maxWidth: 150,
    className: 'hover focus',
  },
  {
    href: '/default_link_truncated_text',
    children: 'Default Link Truncated Text',
    maxWidth: 120,
  },
];

const leftToRightCurrentItem = {
  children: 'Current Item Truncated Text',
  maxWidth: 120,
};

const leftToRightDropdownItems = [
  {
    link: '/active',
    text: 'active',
    maxWidth: 120,
    className: 'focus',
  },
  {
    link: '/hover"',
    text: 'Hover',
    maxWidth: 120,
    className: 'hover',
  },
  {
    link: '/documents"',
    text: 'Documents',
    maxWidth: 120,
  },
  {
    link: '/long-text-that-wraps-inside-the-menu',
    text: 'long_snake_case_text_that_wraps_inside_the_menu',
    maxWidth: 120,
  },
];

const rightToLeftItems = [
  {href: '/tanakh', children: 'תנ״ך', maxWidth: 120, className: 'hover'},

  {href: '/ketuvim', children: 'כתובים', maxWidth: 120, className: 'focus'},

  {href: '/proverbs-of-solomon', children: 'משלי שלמה', maxWidth: 120, className: 'hover focus'},

  {
    href: '/do-not-forget-my-teaching',
    children: 'בני תורתי אל תשכח ומצותי יצר לבך׃',
    maxWidth: 120,
  },

  {
    href: '/long-life-and-peace-they-shall-add',
    children: 'כי ארך ימים ושנות חיים ושלום יוסיפו לך׃',
    maxWidth: 120,
  },

  {href: '/let-mercy-and-truth-not-forsake-you', children: 'חסד ואמת אל יעזבך', maxWidth: 150},

  {href: '/bind-them-around-your-neck', children: 'קשרם על גרגרותיך', maxWidth: 150},

  {href: '/write-them-on-your-heart', children: 'כתבם על לוח לבך', maxWidth: 150},
];

const rightToLeftCurrentItem = {
  children: 'ולבם שמו שמיר משמוע את התורה ואת',
  maxWidth: 120,
};

const rightToLeftDropdownItems = [
  {link: '/tanakh', text: 'תנ״ך', maxWidth: 120, className: 'focus'},
  {link: '/ketuvim', text: 'כתובים', maxWidth: 120, className: 'hover'},
  {link: '/proverbs-of-solomon', text: 'משלי שלמה', maxWidth: 150},
  {
    link: '/long-life-and-peace-they-shall-add',
    text: 'כי ארך ימים ושנות חיים ושלום יוסיפו לך׃',
    maxWidth: 120,
  },
];

const TableRenderer = ({listItems, currentItem, direction = ContentDirection.LTR}) => {
  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <StaticStates>
        <ComponentStatesTable
          rowProps={[
            {label: 'Default', props: {}},
            {label: 'Collapsible', props: {isCollapsible: true}},
          ]}
          columnProps={[
            {
              label: 'Default',
              props: {listItems, currentItem},
            },
          ]}
        >
          {({listItems, currentItem, isCollapsible}) => {
            if (isCollapsible) {
              return (
                <Breadcrumbs.Nav aria-label="Breadcrumb">
                  <Breadcrumbs.CollapsibleList maxWidth={600} buttonAriaLabel="More links">
                    {listItems.map((item: BreadcrumbLinkProps, i) => (
                      <Breadcrumbs.ListItem key={i}>
                        <Breadcrumbs.Link {...item} />
                      </Breadcrumbs.ListItem>
                    ))}
                    <Breadcrumbs.CurrentItem {...currentItem} />
                  </Breadcrumbs.CollapsibleList>
                </Breadcrumbs.Nav>
              );
            }
            return (
              <Breadcrumbs.Nav aria-label="Breadcrumb">
                <Breadcrumbs.List>
                  {listItems.map((item: BreadcrumbLinkProps, i) => (
                    <Breadcrumbs.ListItem key={i}>
                      <Breadcrumbs.Link {...item} />
                    </Breadcrumbs.ListItem>
                  ))}
                  <Breadcrumbs.CurrentItem {...currentItem} />
                </Breadcrumbs.List>
              </Breadcrumbs.Nav>
            );
          }}
        </ComponentStatesTable>
      </StaticStates>
    </CanvasProvider>
  );
};

const DropdownMenuRenderer = ({items, direction = ContentDirection.LTR}) => {
  const activeItemRef = React.useRef();
  const ref = React.useRef();
  const {dropdownMenuProps} = useDropdown(activeItemRef, ref, items);
  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <StaticStates>
        <ComponentStatesTable
          rowProps={[{label: 'Default', props: {}}]}
          columnProps={[{label: 'Default', props: {}}]}
        >
          {() => <DropdownMenu {...dropdownMenuProps} />}
        </ComponentStatesTable>
      </StaticStates>
    </CanvasProvider>
  );
};

export const VisualStatesLeftToRight = () => {
  return (
    <>
      <h2>Left-To-Right Breadcrumbs</h2>
      <TableRenderer listItems={leftToRightItems} currentItem={leftToRightCurrentItem} />
      <h2>Left-To-Right Dropdown Menu</h2>
      <DropdownMenuRenderer items={leftToRightDropdownItems} />
    </>
  );
};

export const VisualStatesRightToLeft = () => {
  return (
    <>
      <h2>Right-To-Left Breadcrumbs</h2>
      <TableRenderer
        listItems={rightToLeftItems}
        currentItem={rightToLeftCurrentItem}
        direction={ContentDirection.RTL}
      />
      <h2>Right-To-Left Dropdown Menu</h2>
      <DropdownMenuRenderer items={rightToLeftDropdownItems} direction={ContentDirection.RTL} />
    </>
  );
};
