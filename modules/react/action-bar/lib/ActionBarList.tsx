import * as React from 'react';

import {system} from '@workday/canvas-tokens-web';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {useOverflowListMeasure, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useActionBarModel} from './useActionBarModel';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';

export interface ActionBarListProps<T = any>
  extends Omit<ExtractProps<typeof Flex, never>, 'children'> {
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

export const actionBarListStencil = createStencil({
  base: {
    display: 'flex',
    boxShadow: system.depth[1],
    gap: system.space.x4,
    background: system.color.bg.default,
    borderBlockStart: `solid 1px ${cssVar(system.color.border.divider)}`,
    padding: `${cssVar(system.space.x4)} ${cssVar(system.space.x10)} `,
    position: 'fixed',
    insetBlockEnd: 0,
    insetInlineStart: 0,
    insetInlineEnd: 0,
    '@media (max-width: 767.5px)': {
      padding: system.space.x4,
      '> *': {
        flex: 1,
      },
    },
  },
});

export const useActionBarList = useOverflowListMeasure;

export const ActionBarList = createSubcomponent('div')({
  displayName: 'ActionBar.List',
  modelHook: useActionBarModel,
  elemPropsHook: useActionBarList,
})<ActionBarListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <Element {...mergeStyles(elemProps, actionBarListStencil())}>
      {useListRenderItems(model, children)}
      {overflowButton}
    </Element>
  );
});
