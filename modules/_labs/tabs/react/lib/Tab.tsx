import * as React from 'react';

import {colors, spacing, type, borderRadius} from '@workday/canvas-kit-react-core';
import {
  createComponent,
  focusRing,
  hideMouseFocus,
  mergeProps,
  styled,
  StyledType,
  useLocalRef,
  useModelContext,
} from '@workday/canvas-kit-react-common';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';
import {useRegisterItem} from './list';

export interface TabProps {
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
  /** Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel;
}

const StyledButton = styled('button')<{isSelected: boolean} & StyledType>(
  {
    ...type.body,
    ...type.variant.button,
    border: 'none',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    maxWidth: '280px',
    padding: spacing.s,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.licorice300,
    position: 'relative',
    marginLeft: `${spacing.xxxs}`,
    borderRadius: `${borderRadius.m} ${borderRadius.m} 0px 0px`,
    transition: 'background 150ms ease, color 150ms ease',
    '&:first-of-type': {
      marginLeft: 0,
    },
    ...hideMouseFocus,
    '&:hover, &:focus': {
      backgroundColor: colors.soap200,
      color: colors.blackPepper400,
    },
    '&:focus': {
      outline: `none`,
      ...focusRing({inset: 'outer', width: 0, separation: 2}),
    },
  },
  ({isSelected}) => {
    if (isSelected) {
      return {
        color: colors.blueberry400,
        cursor: 'default',
        '&:after': {
          position: 'absolute',
          height: spacing.xxxs,
          borderRadius: `${borderRadius.m} ${borderRadius.m} 0px 0px`,
          backgroundColor: colors.blueberry400,
          bottom: 0,
          content: `''`,
          left: 0,
          marginTop: '-2px',
          width: '100%',
        },
        '&:hover, &:focus': {
          backgroundColor: `transparent`,
          color: colors.blueberry400,
        },
      };
    }
    return {};
  }
);

export const Tab = createComponent('button')({
  displayName: 'Tabs.Item',
  Component: ({name = '', model, children, ...elemProps}: TabProps, ref, Element) => {
    const {localRef, elementRef} = useLocalRef(ref);
    const {state, events} = useModelContext(TabsModelContext, model);

    const tabName = useRegisterItem({state, events}, localRef, name);

    const onSelect = () => {
      events.activateTab({tab: tabName});
    };

    const isSelected = !!tabName && state.activeTab === tabName;

    const props = mergeProps(
      {
        id: `tab-${state.id}-${tabName}`,
        tabIndex: !!tabName && state.cursorId === tabName ? undefined : -1,
        'aria-selected': isSelected ? true : undefined,
        'aria-controls': `tabpanel-${state.id}-${tabName}`,
        onClick: onSelect,
        isSelected: isSelected,
      },
      elemProps
    );

    return (
      <StyledButton type="button" role="tab" ref={elementRef} as={Element} {...props}>
        {children}
      </StyledButton>
    );
  },
});
