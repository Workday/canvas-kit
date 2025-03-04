import * as React from 'react';

import {
  composeHooks,
  createSubcomponent,
  createElemPropsHook,
  ExtractProps,
  useModalityType,
} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  useOverflowListMeasure,
  useListRenderItems,
  useListResetCursorOnBlur,
} from '@workday/canvas-kit-react/collection';

import {useTabsModel} from './useTabsModel';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

export const tabsListStencil = createStencil({
  base: {
    display: 'flex',
    position: 'relative',
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    gap: system.space.x3,
    paddingInline: system.space.x6,
    maskImage: 'none',
  },
  modifiers: {
    modality: {
      touch: {
        paddingInline: system.space.zero,
      },
      mouse: {},
      pen: {},
    },
    isDragging: {
      true: {},
      false: {},
    },
    direction: {
      left: {},
      right: {},
    },
    currentScrollPos: {
      true: {},
      false: {},
    },
  },
  compound: [
    {
      modifiers: {
        modality: 'touch',
        isDragging: true,
        direction: 'left',
      },
      styles: {
        maskImage: 'linear-gradient(to left, white 80%, transparent)',
      },
    },
    {
      modifiers: {
        modality: 'touch',
        isDragging: true,
        direction: 'right',
      },
      styles: {
        maskImage: 'linear-gradient(to right, white 80%, transparent)',
      },
    },
  ],
});

export const TabsList = createSubcomponent('div')({
  displayName: 'Tabs.List',
  modelHook: useTabsModel,
  elemPropsHook: useTabsList,
})<TabListProps & {maskImage?: string}>(
  ({children, overflowButton, ...elemProps}, Element, model) => {
    const modality = useModalityType();
    const touchStates = useTouchDirection();

    return (
      <Element
        {...mergeStyles(
          elemProps,
          tabsListStencil({
            modality: modality,
            isDragging: touchStates.isDragging,
            direction: touchStates.direction,
          })
        )}
      >
        {useListRenderItems(model, children)}
        {overflowButton}
      </Element>
    );
  }
);

export const useTouchDirection = () => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [touchDir, setTouchDirection] = React.useState<'right' | 'left' | undefined>('right');

  React.useEffect(() => {
    let prevXPos = window.pageXOffset;
    const handleTouchMove = function (e: TouchEvent) {
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
    const handleDragEnd = function () {
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
