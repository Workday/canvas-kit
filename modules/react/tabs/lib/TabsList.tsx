import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  composeHooks,
  createComponent,
  createHook,
  ExtractProps,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-react/layout';
import {
  useOverflowListMeasureContainer,
  useListRenderItems,
  useListResetCursorOnBlur,
} from '@workday/canvas-kit-react/list';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';

// Use `Partial` here to make `spacing` optional
export interface TabListProps<T = unknown> extends Partial<ExtractProps<typeof Stack, never>> {
  /**
   * If items are passed to a `TabsModel`, the child of `Tabs.List` should be a render prop. The
   * List will determine how and when the item will be rendered.
   *
   * @example
   * <Tabs.List>
   *   {(item) => <Tabs.Item key={item.id} name={item.name}>{item.text}</Tabs.Item>}
   * </Tabs.List>
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases.
   */
  model?: TabsModel<T>;
  overflowButton?: React.ReactNode;
}

export const TabsList = createComponent('div')({
  displayName: 'Tabs.List',
  Component: ({children, model, overflowButton, ...elemProps}: TabListProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);
    const props = useTabsList(localModel, elemProps, ref);

    return (
      <Stack
        as={Element}
        position="relative"
        borderBottom={`1px solid ${commonColors.divider}`}
        paddingX="m"
        spacing="xxxs"
        {...props}
      >
        {useListRenderItems(localModel, children)}
        {overflowButton}
      </Stack>
    );
  },
});

export const useTabsList = composeHooks(
  createHook((_: TabsModel) => {
    return {role: 'tablist'};
  }),
  useOverflowListMeasureContainer,
  useListResetCursorOnBlur
);
