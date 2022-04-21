import * as React from 'react';

import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {
  createElemPropsHook,
  composeHooks,
  subModelHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {useOverflowListTarget} from '@workday/canvas-kit-react/list';

import {useMenuTarget} from './menu';
import {useTabsModel2} from './useTabsModel';
import {StyledTabItem} from './TabsItem';

export interface OverflowButtonProps {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
}

export const useTabsOverflowButton = composeHooks(
  createElemPropsHook(useTabsModel2)(
    (model, _?: React.Ref<HTMLButtonElement>, elemProps: {name?: string} = {}) => {
      return {
        'aria-haspopup': true,
      };
    }
  ),
  useOverflowListTarget,
  subModelHook((m: ReturnType<typeof useTabsModel2>) => m.menu, useMenuTarget)
);

export const TabsOverflowButton = createSubcomponent('button')({
  displayName: 'Tabs.OverflowButton',
  modelHook: useTabsModel2,
  elemPropsHook: useTabsOverflowButton,
})<OverflowButtonProps>(({children, ...elemProps}, Element) => {
  return (
    <StyledTabItem type="button" hasIcon={true} spacing="xxxs" as={Element} {...elemProps}>
      <span>{children}</span>
      <SystemIcon icon={chevronDownSmallIcon} />
    </StyledTabItem>
  );
});
