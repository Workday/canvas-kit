import * as React from 'react';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';
import {
  useListItemRegister,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';

import {chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';
import {BreadcrumbsLink} from './BreadcrumbsLink';

export interface BreadcrumbsItemProps extends FlexProps {
  /**
   * The contents of the action item. This will be the accessible name of the action for screen readers.
   *
   * ```tsx
   * <Breadcrumbs.Item>First Action</Breadcrumbs.Item>
   * ```
   */
  children: React.ReactNode;
  /**
   * The identifier of the action. This identifier will be used for correct overflow behavior.
   * If this property is not provided, it will default to a string representation
   * of the the zero-based index of the Item when it was initialized.
   */
  'data-id'?: string;
}

export const breadcrumbsItemStencil = createStencil({
  parts: {
    chevronRightIcon: 'breadcrumbs-item-chevron-right-icon',
  },
  base: ({chevronRightIconPart}) => ({
    alignItems: 'center',
    display: 'inline-flex',
    whiteSpace: 'nowrap',
    [systemIconStencil.vars.size]: px2rem(20),
    [systemIconStencil.vars.color]: system.color.icon.default,
    [chevronRightIconPart]: {
      height: system.space.x8,
      width: system.space.x8,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex',
      ':dir(rtl)': {
        transform: 'scaleX(-1)',
      },
    },
  }),
});

export const useBreadcrumbsItem = composeHooks(useOverflowListItemMeasure, useListItemRegister);

export const BreadcrumbsItem = createSubcomponent('li')({
  displayName: 'Breadcrumbs.Item',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useBreadcrumbsItem,
  subComponents: {
    Link: BreadcrumbsLink,
  },
})<BreadcrumbsItemProps>(({children, ...elemProps}, Element) => {
  return (
    <Element {...mergeStyles(elemProps, breadcrumbsItemStencil())}>
      {children}
      <SystemIcon
        icon={chevronRightSmallIcon}
        {...breadcrumbsItemStencil.parts.chevronRightIcon}
        aria-hidden
      />
    </Element>
  );
});
