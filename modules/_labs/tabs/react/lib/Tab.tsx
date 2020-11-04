import * as React from 'react';
import {colors, spacing, type, borderRadius} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus, styled} from '@workday/canvas-kit-react-common';
import {useTab} from './Tabs';

export interface TabProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The label text of the Tab.
   */
  children: React.ReactNode;
  /**
   * The name of the tab. This name will be used in change events and for `initialTab`. Must match
   * the `name` of the associated tab panel. If this property is not provided, it will default to a
   * string representation of the the zero-based index of the Tab when it was initialized.
   */
  name?: string;
}

const StyledButton = styled('button')<{isSelected: boolean}>(
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

const Tab = ({name = '', children, ...elemProps}: TabProps) => {
  const {
    id,
    intentTab,
    resetIntentTab,
    activeTab,
    setActiveTab,
    setSelectedTabRect,
    registerTab,
    unregisterTab,
  } = useTab();
  const tabRef = React.useRef<HTMLButtonElement>(null);
  const [tabName, setTabName] = React.useState(name);

  // useLayoutEffect because we don't want to render with incorrect ID
  React.useLayoutEffect(() => {
    const tabElement = tabRef.current as HTMLElement;
    const tabName = registerTab(tabElement, name);
    setTabName(tabName);

    return () => {
      unregisterTab(tabElement);
    };
  }, [name, registerTab, unregisterTab]);

  const onSelect = () => {
    setActiveTab(tabName);
  };

  const isSelected = !!tabName && activeTab === tabName;
  console.log('tabName', tabName, 'intentTab', intentTab, isSelected);

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect', 'tabName', tabName, 'intentTab', intentTab, isSelected);

    if (isSelected && tabRef.current) {
      setSelectedTabRect(tabRef.current.getBoundingClientRect());
    }
  }, [isSelected, tabRef, setSelectedTabRect, tabName, intentTab]);

  return (
    <StyledButton
      ref={tabRef}
      role="tab"
      id={`tab-${id}-${tabName}`}
      tabIndex={!!tabName && intentTab === tabName ? 0 : -1}
      aria-selected={isSelected ? true : undefined}
      aria-controls={`tabpanel-${id}-${tabName}`}
      onClick={onSelect}
      onBlur={resetIntentTab}
      isSelected={isSelected}
      {...elemProps}
    >
      {children}
    </StyledButton>
  );
};

export default Tab;
