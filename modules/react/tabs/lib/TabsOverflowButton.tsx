import * as React from 'react';

import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {
  createElemPropsHook,
  composeHooks,
  subModelHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';

import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useTabsModel} from './useTabsModel';
import {StyledTabItem} from './TabsItem';

export interface OverflowButtonProps {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
}

export const useTabsOverflowButton = composeHooks(
  createElemPropsHook(useTabsModel)(() => {
    return {
      'aria-haspopup': true,
    };
  }),
  useOverflowListTarget,
  subModelHook((m: ReturnType<typeof useTabsModel>) => m.menu, useMenuTarget)
);

export const TabsOverflowButton = createSubcomponent('button')({
  displayName: 'Tabs.OverflowButton',
  modelHook: useTabsModel,
  elemPropsHook: useTabsOverflowButton,
})<OverflowButtonProps>(({children, ...elemProps}, Element) => {
  return (
    <StyledTabItem type="button" gap="xxxs" as={Element} {...elemProps}>
      <span>{children}</span>
      <SystemIcon icon={chevronDownSmallIcon} />
    </StyledTabItem>
  );
});
