import * as React from 'react';
import {colors, spacing, borderRadius, commonColors} from '@workday/canvas-kit-react-core';
import styled from '@emotion/styled';
import {useTab} from './Tabs';
import {TabProps} from './Tab';

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

const TabsListInnerContainer = styled('div')({
  display: `flex`,
});

const TabIndicator = styled('div')<{left?: number; width?: number}>(
  {
    position: 'absolute',
    height: spacing.xxxs,
    borderRadius: `${borderRadius.m} ${borderRadius.m} 0px 0px`,
    backgroundColor: colors.blueberry400,
    transition: 'width 200ms ease, transform 200ms ease-out',
    marginTop: '-2px',
    bottom: 0,
  },
  ({left, width}) => ({
    transform: `translateX(${left ? left : 0}px)`,
    width: width ? width : 0,
  })
);

const TabList = ({children}: TabListProps) => {
  const tabsListRef = React.useRef<HTMLDivElement>(null);
  const {selectedTabRect} = useTab();

  const clonedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    return React.cloneElement(child, {index});
  });

  const selectedTabLeft = selectedTabRect ? selectedTabRect.left : 0;
  const selectedTabWidth = selectedTabRect ? selectedTabRect.width : 0;
  const tabsListLeft = tabsListRef.current ? tabsListRef.current.getBoundingClientRect().left : 0;

  const tabIndicatorLeft = selectedTabLeft - tabsListLeft;

  return (
    <TabsListContainer ref={tabsListRef}>
      <TabsListInnerContainer role="tablist">{clonedChildren}</TabsListInnerContainer>
      <TabIndicator left={tabIndicatorLeft} width={selectedTabWidth} />
    </TabsListContainer>
  );
};

export default TabList;
