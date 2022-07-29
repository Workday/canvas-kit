import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  composeHooks,
  createSubcomponent,
  createElemPropsHook,
  ExtractProps,
  useModalityType,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-react/layout';
import {
  useOverflowListMeasure,
  useListRenderItems,
  useListResetCursorOnBlur,
} from '@workday/canvas-kit-react/collection';

import {useTabsModel} from './useTabsModel';

// Use `Partial` here to make `spacing` optional
export interface TabListProps<T = unknown> extends Partial<ExtractProps<typeof Stack, never>> {
  /**
   * If items are passed to a `TabsModel`, the child of `Tabs.List` should be a render prop. The
   * List will determine how and when the item will be rendered.
   *
   * @example
   * <Tabs.List>
   *   {(item) => <Tabs.Item>{item.text}</Tabs.Item>}
   * </Tabs.List>
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  overflowButton?: React.ReactNode;
}

export const useTabsList = composeHooks(
  createElemPropsHook(useTabsModel)(() => {
    const modality = useModalityType();
    return {role: 'tablist', overflowX: modality === 'touch' ? 'auto' : undefined};
  }),
  useOverflowListMeasure,
  useListResetCursorOnBlur
);

const StyledStack = styled(Stack)<StyledType>({
  maskImage: `linear-gradient(to right, white 95%, transparent)`,
  '::after': {
    content: '""',
    position: 'sticky',
    height: 52,
    minWidth: 30,
    zIndex: 1,
    right: 0,
    top: 0,
    pointerEvents: 'none',
  },
});

export const TabsList = createSubcomponent('div')({
  displayName: 'Tabs.List',
  modelHook: useTabsModel,
  elemPropsHook: useTabsList,
})<TabListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  const modality = useModalityType();
  return (
    <StyledStack
      as={Element}
      position="relative"
      borderBottom={`1px solid ${commonColors.divider}`}
      paddingX={modality === 'touch' ? 'zero' : 'm'}
      spacing="xxxs"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {overflowButton}
    </StyledStack>
  );
});
