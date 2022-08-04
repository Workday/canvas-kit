import * as React from 'react';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';
import {
  useListItemRegister,
  useListItemRovingFocus,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {useBreadcrumbsModel} from './useBreadcrumbsModel';

export interface BreadcrumbsItemProps {
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

export const useBreadcrumbsItem = composeHooks(
  useOverflowListItemMeasure,
  useListItemRovingFocus,
  useListItemRegister
);

export const BreadcrumbsItem = createSubcomponent('li')({
  displayName: 'Breadcrumbs.Item',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useBreadcrumbsItem,
})<BreadcrumbsItemProps>(({children, ...elemProps}, Element) => {
  return (
    <Flex as={Element} alignItems="center" {...elemProps}>
      {children}
      <SystemIcon
        icon={chevronRightSmallIcon}
        color={colors.licorice200}
        colorHover={colors.licorice200}
        size={20}
        height={32}
        width={32}
        styles={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}
        aria-hidden
      />
    </Flex>
  );
});
