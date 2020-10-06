/// <reference path="../../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react-common';

import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';

import {Breadcrumbs} from '../index';
import README from '../README.md';
import {BreadcrumbLinkProps} from '../lib/Breadcrumbs/List/Link';
import {useDropdown} from '../lib/Breadcrumbs/Dropdown/hooks';
import {DropdownMenu} from '../lib/Breadcrumbs/Dropdown/Menu';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [withReadme(README)],
});

const leftToRightItems = [
  {
    href: '/2019-q2-financial-documents',
    children: '2019_Q2_financial_documents',
    maxWidth: 150,
  },
  {
    href: '/ledger-account"',
    children: 'Ledger Account is “4200: Property”',
    maxWidth: 150,
  },
  {
    href: '/documents"',
    children: 'Documents',
    maxWidth: 150,
  },
  {
    href: '/2018-08-28-annual-recurring-revenue',
    children: '2018_08_28_Summary_of_Annual_Recurring_Revenue',
    maxWidth: 150,
  },
];

const leftToRightCurrentItem = {
  children: 'Policy_Type_is_Homeowners_Year_is_FY2020_Version_is_Actuals',
  maxWidth: 150,
};

const rightToLeftItems = [
  {href: '/tanakh', children: 'תנ״ך', maxWidth: 150},

  {href: '/ketuvim', children: 'כתובים', maxWidth: 150},

  {href: '/proverbs-of-solomon', children: 'משלי שלמה', maxWidth: 150},

  {
    href: '/do-not-forget-my-teaching',
    children: 'בני תורתי אל תשכח ומצותי יצר לבך׃',
    maxWidth: 150,
  },

  {
    href: '/long-life-and-peace-they-shall-add',
    children: 'כי ארך ימים ושנות חיים ושלום יוסיפו לך׃',
    maxWidth: 150,
  },

  {href: '/let-mercy-and-truth-not-forsake-you', children: 'חסד ואמת אל יעזבך', maxWidth: 150},

  {href: '/bind-them-around-your-neck', children: 'קשרם על גרגרותיך', maxWidth: 150},

  {href: '/write-them-on-your-heart', children: 'כתבם על לוח לבך', maxWidth: 150},
];

const rightToLeftCurrentItem = {
  children: 'ולבם שמו שמיר משמוע את התורה ואת',
  maxWidth: 150,
};

const TableRenderer = ({listItems, currentItem, direction = ContentDirection.LTR}) => {
  return (
    <CanvasProvider theme={{canvas: {direction}}}>
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
                <Breadcrumbs.CollapsibleList maxWidth={600} expanderAriaLabel="More links">
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
    </CanvasProvider>
  );
};

const buildDropdownItems = (items = []) => {
  // Doing a little transformation since we're not using the collapsible hook.
  return items.map((item, index) => ({
    index,
    link: item.href,
    text: item.children,
    width: item.maxWidth,
  }));
};

const DropdownMenuRenderer = ({listItems, direction = ContentDirection.LTR}) => {
  const activeItemRef = React.useRef();
  const buttonRef = React.useRef();
  const dropdownItems = buildDropdownItems(listItems);
  const {dropdownMenuProps} = useDropdown(activeItemRef, buttonRef, dropdownItems);

  return (
    <CanvasProvider theme={{canvas: {direction}}}>
      <DropdownMenu {...dropdownMenuProps} />
    </CanvasProvider>
  );
};

export const VisualStatesLeftToRight = () => {
  return (
    <>
      <h2>Left-To-Right Breadcrumbs</h2>
      <TableRenderer listItems={leftToRightItems} currentItem={leftToRightCurrentItem} />
      <h2>Left-To-Right Dropdown Menu</h2>
      <DropdownMenuRenderer listItems={leftToRightItems} />
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
      <DropdownMenuRenderer listItems={rightToLeftItems} direction={ContentDirection.RTL} />
    </>
  );
};
