import * as React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  useListItemRegister,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

import {useActionBarModel} from './useActionBarModel';

export interface ActionBarItemProps {
  /**
   * The contents of the action item. This will be the accessible name of the action for screen readers.
   * Omit it to render an icon-only button, and provide an `aria-label` instead.
   *
   * ```tsx
   * <ActionBar.Item>First Action</ActionBar.Item>
   * <ActionBar.Item icon={trashIcon} aria-label="Delete" />
   * ```
   */
  children?: React.ReactNode;
  /**
   * The identifier of the action. This identifier will be used for correct overflow behavior.
   * If this property is not provided, it will default to a string representation
   * of the the zero-based index of the Item when it was initialized.
   */
  'data-id'?: string;
}

export const useActionBarItem = composeHooks(useOverflowListItemMeasure, useListItemRegister);

export const ActionBarItem = createSubcomponent(SecondaryButton)({
  displayName: 'ActionBar.Item',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarItem,
})<ActionBarItemProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});
