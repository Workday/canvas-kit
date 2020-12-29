import * as React from 'react';
import styled from '@emotion/styled';

import {spacing, commonColors} from '@workday/canvas-kit-react-core';
import {mergeCallbacks} from '@workday/canvas-kit-react-common';

import {useTab, useTab2} from './Tabs';
import {TabProps} from './Tab';
import {getItem, MenuModel} from './useMenuModel';

type Tab = React.ReactElement<TabProps>;

export interface TabListProps extends React.HTMLAttributes<HTMLElement> {
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

const TabsListInnerContainer = styled('div')({
  display: `flex`,
  margin: `0 ${spacing.m}`,
});

const useMenu = (
  {state, events}: MenuModel,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  // keep track of intentional focus changes
  const focusRef = React.useRef(false);

  React.useEffect(() => {
    if (focusRef.current) {
      const item = getItem(state.currentId, state.items);
      item.ref.current?.focus();

      focusRef.current = false;
    }
  }, [state.currentId, state.items]);

  return mergeCallbacks(elemProps, {
    onKeyDown(event: React.KeyboardEvent) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'Left':
          focusRef.current = true;
          events.previous();
          break;
        case 'ArrowRight':
        case 'Right':
          focusRef.current = true;
          events.next();
          break;
        case 'Home':
          focusRef.current = true;
          events.first();
          break;
        case 'End':
          focusRef.current = true;
          events.last();
          break;
        case 'Enter':
        case ' ':
          // hmm, activate
          break;
        default:
          break;
      }
    },
  });
};

const TabList = ({children, ...elemProps}: TabListProps) => {
  const tabsListRef = React.useRef<HTMLDivElement>(null);
  // const [tabIndicatorRef, setDimensions] = useIndicator(tabsListRef);
  const model = useTab();
  const {state, events} = useTab2();
  const menu = useMenu(
    {state, events},
    {
      onKeyDown() {
        state.programmaticFocusRef.current = true;
      },
    }
  );

  const onFocus = () => {
    state.programmaticFocusRef.current = false;
  };

  return (
    <TabsListContainer ref={tabsListRef}>
      <TabsListInnerContainer
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
};

export default TabList;
