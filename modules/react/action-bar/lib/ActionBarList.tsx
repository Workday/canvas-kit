import * as React from 'react';

import {commonColors, colors, space} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  ExtractProps,
  getCanvasTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useOverflowListMeasure, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useActionBarModel} from './useActionBarModel';

// Use `Partial` here to make `spacing` optional
export interface ActionBarListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Flex, never>>, 'children'> {
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
  /**
   * `ActionBar.List` will render overflow button component if  it's passed in `overflowButton`.
   *
   * @example
   * <ActionBar.List overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}>
   *   {(item) => <ActionBar.Item>{item.text}</ActionBar.Item>}
   * </ActionBar.List>
   */
  overflowButton?: React.ReactNode;
}

const ResponsiveHStack = styled(Flex)<ActionBarListProps & StyledType>(({theme}) => {
  const canvasTheme = getCanvasTheme(theme);
  return {
    [canvasTheme.breakpoints.down('s')]: {
      padding: space.s,
      '> *': {
        flex: 1,
      },
    },
  };
});

export const useActionBarList = useOverflowListMeasure;

export const ActionBarList = createSubcomponent('div')({
  displayName: 'ActionBar.List',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarList,
})<ActionBarListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <ResponsiveHStack
      as={Element}
      gap="s"
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
