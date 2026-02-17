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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.md, system.space.x4),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    background: cssVar(system.color.surface.default, system.color.bg.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderBlockStart: `solid ${px2rem(1)}  ${cssVar(system.color.border.default, system.color.border.divider)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${cssVar(system.padding.md, system.space.x4)} ${cssVar(base.size500, system.space.x10)} `,
    position: 'fixed',
    insetBlockEnd: 0,
    insetInlineStart: 0,
    insetInlineEnd: 0,
    '@media (max-width: 767.5px)': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      padding: cssVar(system.size.xxxs, system.space.x4),
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
