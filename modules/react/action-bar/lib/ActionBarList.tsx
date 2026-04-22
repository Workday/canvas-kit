import * as React from 'react';

import {useListRenderItems, useOverflowListMeasure} from '@workday/canvas-kit-react/collection';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useActionBarModel} from './useActionBarModel';

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
    boxShadow: system.depth[2],
    gap: system.gap.md,
    background: system.color.surface.default,
    borderBlockStart: `solid ${px2rem(1)}  ${system.color.border.default}`,
    padding: `${system.padding.md} ${base.size500} `,
    position: 'fixed',
    insetBlockEnd: 0,
    insetInline: 0,
    '@media (max-width: 767.5px)': {
      padding: system.size.xxxs,
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
