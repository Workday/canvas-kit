import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useOverflowListMeasure, useListRenderItems} from '@workday/canvas-kit-react/collection';
import {space} from '@workday/canvas-kit-react/tokens';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

// Use `Partial` here to make `spacing` optional
export interface BreadcrumbsListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Flex, never>>, 'children'> {
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

export const BreadcrumbsList = createSubcomponent('ul')({
  displayName: 'Breadcrumbs.List',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useOverflowListMeasure,
})<BreadcrumbsListProps>(({overflowButton, children, ...elemProps}, Element, model) => {
  const items = useListRenderItems(model, children) as [];
  const splitIndex = items.length - 2;

  return (
    <Flex
      as={Element}
      padding="zero"
      margin="zero"
      display="inline-flex"
      alignItems="center"
      minHeight={space.xl}
      listStyle="none"
      role="list"
      width="100%"
      {...elemProps}
    >
      {items.length ? items.slice(0, splitIndex) : items}
      {overflowButton}
      {items.length ? items.slice(splitIndex, items.length) : null}
    </Flex>
  );
});
