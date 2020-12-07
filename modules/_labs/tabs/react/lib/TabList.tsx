import * as React from 'react';
import {spacing, commonColors} from '@workday/canvas-kit-react-core';
import styled from '@emotion/styled';
import {useTab} from './Tabs';
import {TabProps} from './Tab';
import {getItem} from './list';

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

const TabList = ({children, ...elemProps}: TabListProps) => {
  const tabsListRef = React.useRef<HTMLDivElement>(null);
  // const [tabIndicatorRef, setDimensions] = useIndicator(tabsListRef);
  const {state, events} = useTab();

  const focusTab = (nextState: typeof state) => {
    getItem(nextState.context.intentTab, nextState.context.items).element.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    let nextState;
    switch (event.key) {
      case 'ArrowLeft':
      case 'Left':
        nextState = events.setIntentTab('previous');
        focusTab(nextState);
        break;
      case 'ArrowRight':
      case 'Right':
        nextState = events.setIntentTab('next');
        focusTab(nextState);
        break;
      case 'Home':
        nextState = events.setIntentTab('first');
        focusTab(nextState);
        break;
      case 'End':
        nextState = events.setIntentTab('last');
        focusTab(nextState);
        break;
      case 'Enter':
      case ' ':
        events.activateTab(state.context.intentTab);
        event.preventDefault(); // prevent clicking this button
        break;
      default:
        break;
    }
  };

  React.useLayoutEffect(() => {
    events.initializeTab(state.context.initialTab);
  }, []);

  return (
    <TabsListContainer ref={tabsListRef}>
      <TabsListInnerContainer
        role="tablist"
        onKeyDown={onKeyDown}
        onFocus={events.resetProgrammaticFocus}
        {...elemProps}
      >
        {children}
      </TabsListInnerContainer>
    </TabsListContainer>
  );
};

export default TabList;
