import * as React from 'react';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import styled from '@emotion/styled';
import {useTab} from './Tabs';
import {TabPanelProps} from './TabPanel';
import {TabProps} from './Tab';

const TabsListContainer = styled('div')({
  display: 'inline-block',
  position: 'relative',
  width: `100%`,
  borderBottom: '1px solid',
  borderColor: colors.soap400,
  margin: `${spacing.l} 0`,
});

const TabsListInnerContainer = styled('div')({
  display: `flex`,
});

const TabIndicator = styled('div')<{left?: number; width?: number}>(
  {
    position: 'absolute',
    height: '3px',
    borderRadius: '3px 3px 0px 0px',
    backgroundColor: colors.blueberry400,
    transition: 'all 200ms ease 0s',
    marginTop: '-2px',
    bottom: 0,
  },
  ({left, width}) => ({
    left: left ? left : 0,
    width: width ? width : 0,
  })
);

export type TabListChild = React.ReactElement<TabProps>;

export interface TabListProps {
  children: TabListChild | TabListChild[];
}

export const TabList: React.FC<TabListProps> = ({children}: TabListProps) => {
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
