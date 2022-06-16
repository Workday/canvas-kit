import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  composeHooks,
  createSubcomponent,
  createElemPropsHook,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-react/layout';
import {
  useOverflowListMeasure,
  useListRenderItems,
  useListResetCursorOnBlur,
} from '@workday/canvas-kit-react/collection';

import {useTabsModel} from './useTabsModel';

// Use `Partial` here to make `spacing` optional
export interface TabListProps extends Omit<Partial<ExtractProps<typeof Stack, never>>, 'children'> {
  /**
   * If items are passed to a `TabsModel`, the child of `Tabs.List` should be a render prop. The
   * List will determine how and when the item will be rendered.
   *
   * @example
   * <Tabs.List>
   *   {(item) => <Tabs.Item>{item.text}</Tabs.Item>}
   * </Tabs.List>
   */
  children: ((item: any) => React.ReactNode) | React.ReactNode;
  overflowButton?: React.ReactNode;
}

export const useTabsList = composeHooks(
  createElemPropsHook(useTabsModel)(() => {
    return {role: 'tablist'};
  }),
  useOverflowListMeasure,
  useListResetCursorOnBlur
);

export const TabsList = createSubcomponent('div')({
  displayName: 'Tabs.List',
  modelHook: useTabsModel,
  elemPropsHook: useTabsList,
})<TabListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <Stack
      as={Element}
      position="relative"
      borderBottom={`1px solid ${commonColors.divider}`}
      paddingX="m"
      spacing="xxxs"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {overflowButton}
    </Stack>
  );
});
