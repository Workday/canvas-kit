import * as React from 'react';
import {colors, spacing, type, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';
import styled from '@emotion/styled';
import {useTab} from './Tabs';

export interface TabProps {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
  /**
   * The index of the Tab in the list of tabs. This is passed in from TabList.
   */
  index?: number;
}

const Container = styled('button')<{isSelected: boolean}>(
  {
    ...type.body,
    ...type.variant.button,
    border: 'none',
    background: 'transparent',
    flex: '0 0 auto',
    maxWidth: '280px',
    padding: '20px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    margin: `${spacing.xxxs}`,
    marginBottom: 0,
    borderRadius: `${borderRadius.m} ${borderRadius.m} 0px 0px`,
    transition: 'background 150ms ease, color 150ms ease',
  },
  ({isSelected}) => ({
    color: isSelected ? colors.blueberry400 : colors.licorice300,
    '&:hover': {
      backgroundColor: isSelected ? `` : colors.soap200,
      color: isSelected ? `` : colors.blackPepper400,
    },
    '&:focus': {
      outline: `none`,
      backgroundColor: isSelected ? `` : colors.soap200,
      color: isSelected ? `` : colors.blackPepper400,
      ...focusRing({inset: 'outer', width: 0, separation: 2}),
    },
    ...hideMouseFocus,
  })
);

const Tab = ({index = 0, children}: TabProps) => {
  const {tabIndex, setTabIndex, setSelectedTabRect} = useTab();
  const tabRef = React.useRef<HTMLButtonElement>(null);

  const onSelect = () => {
    setTabIndex(index);
  };

  const isSelected = tabIndex === index;

  React.useEffect(() => {
    if (isSelected && tabRef.current) {
      setSelectedTabRect(tabRef.current.getBoundingClientRect());
    }
  }, [isSelected, tabRef, setSelectedTabRect]);

  return (
    <Container ref={tabRef} isSelected={isSelected} disabled={isSelected} onClick={onSelect}>
      {children}
    </Container>
  );
};

export default Tab;
