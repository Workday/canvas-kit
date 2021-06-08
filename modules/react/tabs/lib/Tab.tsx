import * as React from 'react';

import {colors, space, type, borderRadius} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  focusRing,
  hideMouseFocus,
  mergeProps,
  styled,
  StyledType,
  useLocalRef,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';
import {useRegisterItem} from './list';
import {useRovingFocusItem} from './cursor';

export interface TabProps {
  /**
   * Optionally pass index to tab item. This should be done if `Tabs.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
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
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel;
  /**
   * Optional id. If not set, it will inherit the ID passed to the `Tabs` component and append the
   * index at the end. Only set this for advanced cases.
   */
  id?: string;
  /**
   * Part of the ARIA specification for tabs. This attributes links a `role=tab` to a
   * `role=tabpanel`. This value must be the same as the associated `id` attribute of the tab panel.
   * This is automatically set by the component and should only be used in advanced cases.
   */
  'aria-controls'?: string;
  /**
   * Part of the ARIA specification for tabs. Lets screen readers know which tab is active. This
   * should either be `true` or `undefined` and never `false`. This is automatically set by the
   * component and should only be used in advanced cases.
   */
  'aria-selected'?: boolean;
  /**
   * Part of the ARIA specification for tabs. The currently active tab should not have a `tabIndex` set while
   * all inactive tabs should have a `tabIndex={-1}`
   */
  tabIndex?: number;
}

const StyledButton = styled('button')<{isSelected: boolean} & StyledType>(
  {
    ...type.levels.subtext.large,
    fontWeight: type.properties.fontWeights.bold,
    border: 'none',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    maxWidth: '280px',
    padding: space.s,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: colors.licorice300,
    position: 'relative',
    marginLeft: `${space.xxxs}`,
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

    '&:disabled': {
      color: colors.licorice100,
      '&:hover': {
        cursor: 'auto',
        backgroundColor: `transparent`,
      },
    },
  },
  ({isSelected}) => {
    if (isSelected) {
      return {
        color: colors.blueberry400,
        cursor: 'default',
        '&:after': {
          position: 'absolute',
          height: space.xxxs,
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

const useTab = (
  model: TabsModel,
  elemProps: {index?: number; name?: string} = {},
  ref: React.Ref<HTMLButtonElement>
) => {
  const {localRef, elementRef} = useLocalRef(ref);

  const name = useRegisterItem(model, localRef, elemProps.name, elemProps.index);
  const {state, events} = model;

  const onSelect = () => {
    events.activate({tab: name});
  };

  const isSelected = !!name && state.activeTab === name;

  return mergeProps(
    {
      id: `tab-${state.id}-${name}`,
      tabIndex: !!name && state.cursorId === name ? undefined : -1,
      'aria-selected': isSelected,
      'aria-controls': `tabpanel-${state.id}-${name}`,
      onClick: onSelect,
      isSelected: isSelected,
      ref: elementRef,
    },
    useRovingFocusItem(model, elemProps)
  );
};

export const Tab = createComponent('button')({
  displayName: 'Tabs.Item',
  Component: ({model, children, ...elemProps}: TabProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);

    const props = useTab(localModel, elemProps, ref);

    return (
      <StyledButton type="button" role="tab" as={Element} {...props}>
        {children}
      </StyledButton>
    );
  },
});
