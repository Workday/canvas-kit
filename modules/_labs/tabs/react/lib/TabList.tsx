import * as React from 'react';
import {spacing, commonColors} from '@workday/canvas-kit-react-core';
import styled from '@emotion/styled';
import {useTab} from './Tabs';
import {TabProps} from './Tab';

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
  const {setIntentTab, setActiveTab, intentTab, programmaticFocusRef} = useTab();

  const onKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
      case 'Left':
        setIntentTab('previous');
        break;
      case 'ArrowRight':
      case 'Right':
        setIntentTab('next');
        break;
      case 'Home':
        setIntentTab('first');
        break;
      case 'End':
        setIntentTab('last');
        break;
      case 'Enter':
      case ' ':
        setActiveTab(intentTab);
        event.preventDefault(); // prevent clicking this button
        break;
      default:
        break;
    }
  };

  const resetProgrammaticFocus = () => {
    programmaticFocusRef.current = false;
  };

  return (
    <TabsListContainer ref={tabsListRef}>
      <TabsListInnerContainer
        role="tablist"
        onKeyDown={onKeyDown}
        onFocus={resetProgrammaticFocus}
        {...elemProps}
      >
        {children}
      </TabsListInnerContainer>
    </TabsListContainer>
  );
};

export default TabList;
