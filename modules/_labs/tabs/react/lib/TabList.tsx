import * as React from 'react';
import {colors, spacing, borderRadius, commonColors} from '@workday/canvas-kit-react-core';
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

const TabIndicator = styled('div')({
  position: 'absolute',
  height: spacing.xxxs,
  borderRadius: `${borderRadius.m} ${borderRadius.m} 0px 0px`,
  backgroundColor: colors.blueberry400,
  transition: 'width 200ms ease, transform 200ms ease-out',
  marginTop: '-2px',
  bottom: 0,
});

const useIndicator = (containerRef?: React.RefObject<HTMLElement>) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const setDimensions = (left: number, width: number) => {
    const containerLeft = containerRef?.current?.getBoundingClientRect().left || 0;
    ref.current!.style.transform = `translateX(${left - containerLeft}px)`;
    ref.current!.style.width = `${width}px`;
  };

  return [ref, setDimensions] as const;
};

const TabList = ({children, ...elemProps}: TabListProps) => {
  const tabsListRef = React.useRef<HTMLDivElement>(null);
  const [tabIndicatorRef, setDimensions] = useIndicator(tabsListRef);
  const {selectedTabRect, setIntentTab, setActiveTab, intentTab, programmaticFocusRef} = useTab();

  React.useLayoutEffect(() => {
    const selectedTabLeft = selectedTabRect?.left || 0;
    const selectedTabWidth = selectedTabRect?.width || 0;

    setDimensions(selectedTabLeft, selectedTabWidth);
  }, [tabsListRef, selectedTabRect, setDimensions]);

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
      <TabIndicator ref={tabIndicatorRef} />
    </TabsListContainer>
  );
};

export default TabList;
