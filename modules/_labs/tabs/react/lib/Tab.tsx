import * as React from 'react';
import {colors, spacing, type, borderRadius} from '@workday/canvas-kit-react-core';
import styled from '@emotion/styled';
import {useTab} from './Tabs';

const Container = styled('div')<{isSelected: boolean}>(
  {
    ...type.body2,
    fontWeight: 500,
    flex: '0 0 auto',
    cursor: 'pointer',
    maxWidth: '280px',
    padding: '20px',
    boxSizing: 'border-box',
    margin: `${spacing.xxxs}`,
  },
  ({isSelected}) => ({
    color: isSelected ? colors.blueberry400 : colors.licorice300,
    '&:focus': {
      outline: `none`,
      boxShadow: isSelected
        ? ``
        : `0 0 0 0px ${colors.frenchVanilla100}, 0 0 0 2px ${colors.blueberry400}`,
      borderRadius: isSelected ? `` : `${borderRadius.s} ${borderRadius.s} 0px 0px`,
      backgroundColor: isSelected ? `` : colors.soap200,
      color: isSelected ? `` : colors.blackPepper400,
    },
    '&:hover': {
      backgroundColor: isSelected ? `` : colors.soap200,
      borderRadius: isSelected ? `` : `${borderRadius.s} ${borderRadius.s} 0px 0px`,
      color: isSelected ? `` : colors.blackPepper400,
    },
  })
);

export interface TabProps {
  children: React.ReactNode;
  index?: number;
}

const Tab: React.FC<TabProps> = ({children, index = 0}: TabProps) => {
  const {tabIndex, setTabIndex, setSelectedTabRect} = useTab();
  const tabRef = React.useRef<HTMLDivElement>(null);

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
    <Container ref={tabRef} isSelected={isSelected} role="button" tabIndex={0} onClick={onSelect}>
      {children}
    </Container>
  );
};

export default Tab;
