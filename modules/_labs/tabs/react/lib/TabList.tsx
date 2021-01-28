import * as React from 'react';

import {spacing, commonColors} from '@workday/canvas-kit-react-core';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react-common';

import {TabsModelContext} from './Tabs';
import {useMenu, orientationKeyMap} from './useMenu';
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

export const TabList = createComponent('div')({
  displayName: 'Tabs.List',
  Component: ({children, model, ...elemProps}: TabListProps, ref, Element) => {
    // const [tabIndicatorRef, setDimensions] = useIndicator(tabsListRef);
    const {state, events} = useModelContext(TabsModelContext, model);
    const menu = useMenu(
      {state, events},
      {
        onKeyDown(event) {
          // Programmatic focus only on any focus change via keyboard
          if (Object.keys(orientationKeyMap[state.orientation]).indexOf(event.key) !== -1) {
            state.programmaticFocusRef.current = true;
          }
        },
      }
    );

    const onFocus = () => {
      state.programmaticFocusRef.current = false;
    };

    return (
      <TabsListContainer>
        <TabsListInnerContainer
          as={Element}
          ref={ref}
          role="tablist"
          {...menu}
          // onClick={e => e.preventDefault()}
          onFocus={onFocus}
          {...elemProps}
        >
          {children}
        </TabsListInnerContainer>
      </TabsListContainer>
    );
  },
});
