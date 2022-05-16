import * as React from 'react';
import {composeHooks, EllipsisText, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {PrimaryButton, SecondaryButton, PrimaryButtonProps} from '@workday/canvas-kit-react/button';

import {useActionBarModel} from './useActionBarModel';
import {useActionBarOverflow} from './useActionBarOverflow';
import {useActionBarButtonProps} from './useActionBarButtonProps';

export interface ActionBarItemProps extends PrimaryButtonProps {
  /**
   * Optionally pass index to action item. This should be done if `ActionBar.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The contents of the action item. This will be the accessible name of the action for screen readers.
   *
   * ```tsx
   * <ActionBar.Item>First Tab</ActionBar.Item>
   * ```
   */
  children: React.ReactNode;
  /**
   * The identifier of the action. This identifier will be used for correct overflow behavior.
   * If this property is not provided, it will default to a string representation
   * of the the zero-based index of the Item when it was initialized.
   */
  'data-id'?: string;
  /**
   * Optional id. If not set, it will inherit the ID passed to the `ActionBar` component and append the
   * index at the end. Only set this for advanced cases.
   */
  id?: string;
  isPrimary?: boolean;
}

export const useActionBarItem = composeHooks(useActionBarOverflow, useActionBarButtonProps);

export const ActionBarItem = createSubcomponent('button')({
  displayName: 'ActionBar.Item',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarItem,
  subComponents: {
    Icon: SystemIcon,
    Text: EllipsisText,
  },
})<ActionBarItemProps>(({children, isPrimary, ...elemProps}, Element) => {
  const Component = isPrimary ? PrimaryButton : SecondaryButton;
  return (
    <Component as={Element} {...elemProps}>
      {children}
    </Component>
  );
});
