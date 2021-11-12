import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  composeHooks,
  createComponent,
  createHook,
  ExtractProps,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-labs-react/layout';

import {TabsModelContext} from './Tabs';
import {useResetCursorOnBlur} from './selection';
import {TabsModel} from './useTabsModel';
import {useMeasureOverflowContainer} from './overflow/useMeasureContainer';
import {ListModel} from './list';

// Use `Partial` here to make `spacing` optional
export interface TabListProps<T = unknown> extends Partial<ExtractProps<typeof Stack, never>> {
  /**
   *
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases.
   */
  model?: TabsModel<T>;
  overflowButton?: () => React.ReactNode;
}

function useRenderItems<T>(
  model: ListModel<T>,
  children: ((item: T) => React.ReactNode) | React.ReactNode
) {
  const items = React.useMemo(() => {
    return typeof children === 'function' ? model.state.items.map(item => children(item)) : null;
    // If we added `children` as a dependency, this memo would be useless. If the user wants the
    // item to rerender, the item and items array needs to be updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.state.items]);

  return items || children;
}

export const TabsList = createComponent('div')({
  displayName: 'Tabs.List',
  Component: ({children, model, overflowButton, ...elemProps}: TabListProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);
    const props = useTabList(localModel, elemProps, ref);

    return (
      <Stack
        as={Element}
        position="relative"
        borderBottom={`1px solid ${commonColors.divider}`}
        marginX="m"
        spacing="xxxs"
        {...props}
      >
        {useRenderItems(localModel, children)}
        {overflowButton?.()}
      </Stack>
    );
  },
});

export const useTabList = composeHooks(
  createHook((_: TabsModel) => {
    return {role: 'tablist'};
  }),
  useMeasureOverflowContainer,
  useResetCursorOnBlur
);
