import * as React from 'react';

import {useOverflowListTarget} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createElemPropsHook,
  createSubModelElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {StyledTabItem} from './TabsItem';
import {useTabsModel} from './useTabsModel';

export interface OverflowButtonProps {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
}

const tabsOverflowButtonStencil = createStencil({
  base: {
    '&:has([data-part="tabs-overflow-button-icon"])': {
      display: 'flex',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      gap: cssVar(system.gap.none, system.space.zero),
    },
  },
});

export const useTabsOverflowButton = composeHooks(
  createElemPropsHook(useTabsModel)(() => {
    return {
      'aria-haspopup': true,
    } as const;
  }),
  useOverflowListTarget,
  createSubModelElemPropsHook(useTabsModel)(m => m.menu, useMenuTarget)
);

export const TabsOverflowButton = createSubcomponent('button')({
  displayName: 'Tabs.OverflowButton',
  modelHook: useTabsModel,
  elemPropsHook: useTabsOverflowButton,
})<OverflowButtonProps>(({children, ...elemProps}, Element) => {
  return (
    <StyledTabItem
      type="button"
      as={Element}
      {...mergeStyles(elemProps, tabsOverflowButtonStencil())}
    >
      <span>{children}</span>
      <SystemIcon data-part="tabs-overflow-button-icon" icon={chevronDownSmallIcon} />
    </StyledTabItem>
  );
});
