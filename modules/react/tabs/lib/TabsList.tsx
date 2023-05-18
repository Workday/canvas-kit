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
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  useOverflowListMeasure,
  useListRenderItems,
  useListResetCursorOnBlur,
} from '@workday/canvas-kit-react/collection';

import {useTabsModel} from './useTabsModel';

export interface TabListProps<T = any> extends Omit<ExtractProps<typeof Flex, never>, 'children'> {
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
    return {
      role: 'tablist',
      overflowX: modality === 'touch' ? 'auto' : undefined,
    } as const;
  }),
  useOverflowListMeasure,
  useListResetCursorOnBlur
);

const StyledStack = styled(Flex)<StyledType & {maskImage?: string}>(({maskImage}) => ({
  maskImage: maskImage,
}));

export const TabsList = createSubcomponent('div')({
  displayName: 'Tabs.List',
  modelHook: useTabsModel,
  elemPropsHook: useTabsList,
})<TabListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  const modality = useModalityType();
  const touchStates = useTouchDirection();
  return (
    <StyledStack
      as={Element}
      position="relative"
      borderBottom={`1px solid ${commonColors.divider}`}
      paddingX={modality === 'touch' ? 'zero' : 'm'}
      gap="xs"
      maskImage={
        modality === 'touch' && touchStates.isDragging
          ? `linear-gradient(${
              touchStates.direction === 'left' ? 'to left' : 'to right'
            }, white 80%, transparent)`
          : undefined
      }
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {overflowButton}
    </StyledStack>
  );
});

export const useTouchDirection = () => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [touchDir, setTouchDirection] = React.useState('right');

  React.useEffect(() => {
    let prevXPos = window.pageXOffset;
    const handleTouchMove = function(e: TouchEvent) {
      const currXPos = e.touches[0].clientX;
      setIsDragging(true);
      if (currXPos > prevXPos) {
        setTouchDirection('left');
      } else if (currXPos < prevXPos) {
        setTouchDirection('right');
      }
      prevXPos = currXPos;
      e.preventDefault();
    };
    const handleDragEnd = function() {
      setIsDragging(false);
    };
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

  return {direction: touchDir, isDragging: isDragging};
};
