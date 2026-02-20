import * as React from 'react';

import {useListRenderItems, useOverflowListMeasure} from '@workday/canvas-kit-react/collection';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

export interface BreadcrumbsListProps<T = any>
  extends Omit<ExtractProps<typeof Flex, never>, 'children'> {
  overflowButton?: React.ReactNode;
  /**
   * If items are passed to a `BreadcrumbsModel`, the child of `Breadcrumbs.List` should be a render prop. The
   * List will determine how and when the item will be rendered.
   *
   * @example
   * <Breadcrumbs.List>
   *   {(item) => <Breadcrumbs.Item key={item.id} name={item.name}>{item.text}</Breadcrumbs.Item>}
   * </Breadcrumbs.List>
   */
  children: ((item: T, index: number) => React.ReactNode) | React.ReactNode;
}

export const breadcrumbsListStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${cssVar(system.padding.xs, system.space.x2)} 0`,
    margin: 0,
    display: 'inline-flex',
    alignItems: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minHeight: cssVar(system.size.lg, px2rem(48)),
    listStyle: 'none',
    width: '100%',
  },
});

export const BreadcrumbsList = createSubcomponent('ul')({
  displayName: 'Breadcrumbs.List',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useOverflowListMeasure,
})<BreadcrumbsListProps>(({overflowButton, children, ...elemProps}, Element, model) => {
  const items = useListRenderItems(model, children) as [];
  const splitIndex = items.length - 2;

  return (
    <Element role="list" {...handleCsProp(elemProps, breadcrumbsListStencil())}>
      {items.length ? items.slice(0, splitIndex) : items}
      {overflowButton}
      {items.length ? items.slice(splitIndex, items.length) : null}
    </Element>
  );
});
