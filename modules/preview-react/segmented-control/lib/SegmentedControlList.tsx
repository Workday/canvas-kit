import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
  composeHooks,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-react/layout';
import {useListRenderItems, useListResetCursorOnBlur} from '@workday/canvas-kit-react/collection';

import {useSegmentedControlModel} from './useSegmentedControlModel';

export interface TabListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Stack, never>>, 'children'> {
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  overflowButton?: React.ReactNode;
}

export const useTabsList = composeHooks(
  createElemPropsHook(useSegmentedControlModel)(({state}) => {
    console.log(state.items);

    return {
      style: {
        // flexDirection: state.orientation === 'vertical' ? 'column' : 'row',
      },
    };
  }),
  useListResetCursorOnBlur
);

const StyledStack = styled(Stack)<StyledType>({
  '::after': {
    content: '""',
    position: 'sticky',
    height: 52,
    minWidth: 30,
    background: `linear-gradient(to right,rgba(255,255,255,0),white);`,
    zIndex: 1,
    right: 0,
    top: 0,
    pointerEvents: 'none',
  },
});

export const SegmentedControlList = createSubcomponent('div')({
  displayName: 'SegmentedControl.List',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useTabsList,
})<TabListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <StyledStack
      as={Element}
      position="relative"
      borderBottom={`1px solid ${commonColors.divider}`}
      spacing="xxxs"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {overflowButton}
    </StyledStack>
  );
});
