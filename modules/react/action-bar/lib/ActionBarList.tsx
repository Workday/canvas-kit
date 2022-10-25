import * as React from 'react';

import {commonColors, colors, space} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-react/layout';
import {useOverflowListMeasure, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useActionBarModel} from './useActionBarModel';

// Use `Partial` here to make `spacing` optional
export interface ActionBarListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof HStack, never>>, 'children'> {
  /**
   * If items are passed to a `ActionBarModel`, the child of `ActionBar.List` should be a render prop. The
   * List will determine how and when the item will be rendered.
   *
   * @example
   * <ActionBar.List>
   *   {(item) => <ActionBar.Item key={item.id} name={item.name}>{item.text}</ActionBar.Item>}
   * </ActionBar.List>
   */
  children: ((item: T, index: number) => React.ReactNode) | React.ReactNode;
  overflowButton?: React.ReactNode;
}

const ResponsiveHStack = styled(HStack)<ActionBarListProps & StyledType>(({theme}) => ({
  [theme.canvas.breakpoints.down('s')]: {
    padding: space.s,
    '> *': {
      flex: 1,
    },
  },
}));

export const useActionBarList = useOverflowListMeasure;

export const ActionBarList = createSubcomponent('div')({
  displayName: 'ActionBar.List',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarList,
})<ActionBarListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
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
      {overflowButton}
    </ResponsiveHStack>
  );
});
