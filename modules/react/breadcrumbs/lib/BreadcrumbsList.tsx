import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useOverflowListMeasure, useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useBreadcrumbsModel} from './useBreadcrumbsModel';
import {Breadcrumbs} from './Breadcrumbs';

// Use `Partial` here to make `spacing` optional
export interface BreadcrumbsListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Flex, never>>, 'children'> {
  'aria-label'?: string;
  /**
   * The accessibility label for the dropdown menu button.
   *
   * @default "More links"
   */
  buttonAriaLabel?: string;
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
})<BreadcrumbsListProps>(
  ({'aria-label': ariaLabel, buttonAriaLabel, children, ...elemProps}, Element, model) => {
    const items = useListRenderItems(model, children) as [];
    const splitIndex = items.length - 2;

    return (
      <nav role="navigation" aria-label={ariaLabel}>
        <Flex
          as={Element}
          padding="zero"
          margin="zero"
          display="inline-flex"
          alignItems="center"
          minHeight={40}
          listStyle="none"
          style={{boxSizing: 'border-box'}}
          role="list"
          width="100%"
          {...elemProps}
        >
          {items.length ? items.slice(0, splitIndex) : items}
          <Breadcrumbs.OverflowButton buttonAriaLabel={buttonAriaLabel} />
          {items.length ? items.slice(splitIndex, items.length) : null}
        </Flex>
      </nav>
    );
  }
);
