import * as React from 'react';

import {commonColors, colors, space} from '@workday/canvas-kit-react/tokens';
import {
  composeHooks,
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-react/layout';
import {
  useOverflowListMeasure,
  useListRenderItems,
  useListResetCursorOnBlur,
} from '@workday/canvas-kit-react/collection';

import {useActionBarModel} from './useActionBarModel';
import {ActionBar} from './ActionBar';

// Use `Partial` here to make `spacing` optional
export interface ActionBarListProps<T = unknown>
  extends Partial<ExtractProps<typeof HStack, never>> {
  /**
   * If items are passed to a `ActionBarModel`, the child of `ActionBar.List` should be a render prop. The
   * List will determine how and when the item will be rendered.
   *
   * @example
   * <ActionBar.List>
   *   {(item) => <ActionBar.Item key={item.id} name={item.name}>{item.text}</ActionBar.Item>}
   * </ActionBar.List>
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  showOverflowButton?: boolean;
}

const ResponsiveHStack = styled(HStack)<ActionBarListProps & StyledType>(({theme}) => ({
  [theme.canvas.breakpoints.down('s')]: {
    padding: space.s,
    '> *:not(span)': {
      flex: 1,
    },
  },
}));

export const useActionBarList = composeHooks(useOverflowListMeasure, useListResetCursorOnBlur);

export const ActionBarList = createSubcomponent('div')({
  displayName: 'ActionBar.List',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarList,
})<ActionBarListProps>(({children, showOverflowButton, ...elemProps}, Element, model) => {
  return (
    <ResponsiveHStack
      as={Element}
      spacing="s"
      depth={1}
      background={commonColors.background}
      borderTop={`solid 1px ${colors.soap400}`}
      padding={`${space.s} ${space.xl} `}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {showOverflowButton && <ActionBar.OverflowButton />}
    </ResponsiveHStack>
  );
});
