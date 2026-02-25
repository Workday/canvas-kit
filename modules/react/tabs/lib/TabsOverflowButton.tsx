import * as React from 'react';

import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {
  createElemPropsHook,
  composeHooks,
  createSubModelElemPropsHook,
  createSubcomponent,
  useLocalRef,
  useResizeObserver,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {
  useOverflowListModel,
  useListItemRovingFocus,
  useListItemRegister,
} from '@workday/canvas-kit-react/collection';

import {useMenuTarget} from '@workday/canvas-kit-react/menu';
import {useTabsModel, TABS_OVERFLOW_BUTTON_ID} from './useTabsModel';
import {StyledTabItem} from './TabsItem';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

// Re-export for consumers who may need to reference the overflow button ID
export {TABS_OVERFLOW_BUTTON_ID} from './useTabsModel';

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
      gap: system.space.zero,
    },
  },
});

/**
 * Measures the overflow button and reports its size to the model for overflow calculation.
 * Unlike useOverflowListTarget, this does NOT set aria-hidden or visibility styles because
 * we handle visibility via conditional rendering in the TabsOverflowButton component.
 */
const useTabsOverflowButtonMeasure = createElemPropsHook(useOverflowListModel)((model, ref) => {
  const {elementRef, localRef} = useLocalRef(ref as React.Ref<HTMLElement>);

  useResizeObserver({
    ref: localRef,
    onResize: ({width = 0, height = 0}) => {
      if (localRef.current && (width > 0 || height > 0)) {
        const styles = getComputedStyle(localRef.current);
        const w = width + parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        const h = height + parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        model.events.setOverflowTargetSize({width: w, height: h});
      }
    },
  });

  return {
    ref: elementRef,
  };
});

export const useTabsOverflowButton = composeHooks(
  // Measures the overflow button for overflow calculation (no aria-hidden or visibility styles)
  useTabsOverflowButtonMeasure,
  // Adds roving tabindex behavior for arrow key navigation within the tablist
  useListItemRovingFocus,
  // Registers the overflow button as an item in the collection for cursor navigation
  useListItemRegister,
  // Provides the stable data-id needed for collection registration
  createElemPropsHook(useTabsModel)(() => {
    return {
      'data-id': TABS_OVERFLOW_BUTTON_ID,
    } as const;
  }),
  // Connects to the menu sub-model for popup behavior
  createSubModelElemPropsHook(useTabsModel)(m => m.menu, useMenuTarget),
  // Syncs the cursor to the overflow button when it receives focus.
  // This is needed because when the menu closes and focus returns to the overflow button,
  // the cursor state needs to be updated so arrow key navigation works correctly.
  createElemPropsHook(useTabsModel)(model => {
    return {
      onFocus() {
        model.events.goTo({id: TABS_OVERFLOW_BUTTON_ID});
      },
    };
  }),
  // Runs FIRST - Sets ARIA attributes for the overflow tab
  // In composeHooks, hooks run right-to-left, and mergeProps gives precedence to elemProps
  // (props from earlier-running hooks). So this runs first and its props win.
  // Note: We intentionally do NOT include useListItemSelect here because clicking
  // the overflow button should open the menu, not select it as the active tab
  createElemPropsHook(useTabsModel)(() => {
    return {
      'aria-haspopup': 'menu',
      'aria-selected': false,
      role: 'tab',
    } as const;
  })
);

export const TabsOverflowButton = createSubcomponent('button')({
  displayName: 'Tabs.OverflowButton',
  modelHook: useTabsModel,
  elemPropsHook: useTabsOverflowButton,
})<OverflowButtonProps>(({children, ...elemProps}, Element, model) => {
  // Don't render the overflow button if there are no hidden items.
  // This removes it from the DOM entirely, which:
  // - Removes it from keyboard navigation (roving focus)
  // - Removes it from screen reader announcements
  // - Prevents the "8 tabs" announcement when only 7 are visible
  if (model.state.hiddenIds.length === 0) {
    return null;
  }

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
