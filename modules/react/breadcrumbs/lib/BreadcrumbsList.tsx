import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useOverflowListMeasure, useListRenderItems} from '@workday/canvas-kit-react/collection';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
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
    padding: 0,
    margin: 0,
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: system.space.x10,
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
