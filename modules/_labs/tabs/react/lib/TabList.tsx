import * as React from 'react';

import {spacing, commonColors} from '@workday/canvas-kit-react-core';
import {
  composeHooks,
  createComponent,
  mergeProps,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react-common';

import {TabsModelContext} from './Tabs';
import {useRovingFocus, orientationKeyMap} from './cursor/hooks';
import {TabsModel} from './useTabsModel';

export interface TabListProps {
  children: React.ReactNode;
  /** Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel;
}

const TabsListContainer = styled('div')({
  display: 'inline-block',
  position: 'relative',
  width: `100%`,
  borderBottom: `1px solid ${commonColors.divider}`,
});

const TabsListInnerContainer = styled('div')<StyledType>({
  display: `flex`,
  margin: `0 ${spacing.m}`,
});

/**
 * Reset the cursor to the active tab when the tab list looses focus
 */
const useResetCursorOnBlur = ({state, events}: TabsModel, elemProps = {}) => {
  const programmaticFocusRef = React.useRef(false);
  return mergeProps(
    {
      onKeyDown(event: React.KeyboardEvent) {
        // Programmatic focus only on any focus change via keyboard
        if (Object.keys(orientationKeyMap[state.orientation]).indexOf(event.key) !== -1) {
          programmaticFocusRef.current = true;
        }
      },
      onFocus() {
        programmaticFocusRef.current = false;
      },
      onBlur() {
        if (!programmaticFocusRef.current) {
          events.setCurrentId({id: state.activeTab});
        }
      },
    },
    elemProps
  );
};

export const TabList = createComponent('div')({
  displayName: 'Tabs.List',
  Component: ({children, model, ...elemProps}: TabListProps, ref, Element) => {
    // const [tabIndicatorRef, setDimensions] = useIndicator(tabsListRef);
    const {state, events} = useModelContext(TabsModelContext, model);
    const props = composeHooks(useRovingFocus, useResetCursorOnBlur)({state, events}, elemProps);

    console.log('currentId', state.currentId);

    return (
      <TabsListContainer>
        <TabsListInnerContainer as={Element} ref={ref} role="tablist" {...props}>
          {children}
        </TabsListInnerContainer>
      </TabsListContainer>
    );
  },
});
