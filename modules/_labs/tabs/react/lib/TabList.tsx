import * as React from 'react';

import {spacing, commonColors} from '@workday/canvas-kit-react-core';

import {useTabsModelContext} from './Tabs';
import {TabProps} from './Tab';
import {useMenu, orientationKeyMap} from './useMenu';
import {
  createComponent,
  useForkRef,
  styled,
  StyledType,
  useComponentRef,
} from '@workday/canvas-kit-react-common';

type Tab = React.ReactElement<TabProps>;

export interface TabListProps {
  /**
   * A list of Tab components.
   */
  children: Tab | Tab[];
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
  Component: ({children, ...elemProps}: TabListProps, ref, Element) => {
    const tabsListRef = useComponentRef(ref);
    const elementRef = useForkRef(ref, tabsListRef);
    // const [tabIndicatorRef, setDimensions] = useIndicator(tabsListRef);
    const {state, events} = useTabsModelContext();
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
          ref={elementRef}
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
