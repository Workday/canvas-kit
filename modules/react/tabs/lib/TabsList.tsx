import * as React from 'react';

import {
  useListRenderItems,
  useListResetCursorOnBlur,
  useOverflowListMeasure,
} from '@workday/canvas-kit-react/collection';
import {
  ExtractProps,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  useLocalRef,
  useModalityType,
} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

function getScrollPercentage(elem: HTMLDivElement, direction: 'vertical' | 'horizontal'): number {
  if (direction === 'vertical') {
    if (elem.scrollHeight > elem.clientHeight) {
      const percentage = elem.scrollTop / (elem.scrollHeight - elem.clientHeight);
      return percentage;
    } else {
      return -1;
    }
  }
  if (elem.scrollWidth > elem.clientWidth) {
    const percentage = elem.scrollLeft / (elem.scrollWidth - elem.clientWidth);
    return percentage;
  } else {
    return -1;
  }
}

function getScrollPosition(
  elem: HTMLDivElement,
  direction: 'vertical' | 'horizontal'
): 'start' | 'middle' | 'end' | undefined {
  const percentage = getScrollPercentage(elem, direction);
  return percentage <= -1
    ? undefined
    : percentage > 0.99
      ? 'end'
      : percentage > 0.01
        ? 'middle'
        : 'start';
}

function setScrollPosition(elem: HTMLDivElement, scrollPosition?: 'start' | 'middle' | 'end') {
  if (scrollPosition) {
    elem.setAttribute('data-scroll-position', scrollPosition);
  } else {
    elem.removeAttribute('data-scroll-position');
  }
}

export const useTabOverflowScroll = createElemPropsHook(useTabsModel)((
  _model,
  ref,
  elemProps: {
    'aria-orientation'?: 'vertical' | 'horizontal';
  } = {}
) => {
  const direction = elemProps['aria-orientation'] || 'vertical';

  const {localRef, elementRef} = useLocalRef<HTMLDivElement>(ref as React.Ref<HTMLDivElement>);

  React.useLayoutEffect(() => {
    if (!localRef.current) {
      return;
    }

    setScrollPosition(localRef.current, getScrollPosition(localRef.current, direction));
  }, [localRef, direction]);

  return {
    ref: elementRef,
    onScroll: (event: React.UIEvent<HTMLDivElement>) => {
      const elem = event.currentTarget;
      setScrollPosition(elem, getScrollPosition(elem, direction));
    },
  };
});

export const useTabsList = composeHooks(
  useTabOverflowScroll,
  createElemPropsHook(useTabsModel)(model => {
    return {
      role: 'tablist',
      'aria-orientation': model.state.orientation,
    } as const;
  }),
  useOverflowListMeasure,
  useListResetCursorOnBlur
);

export const tabsListStencil = createStencil({
  base: {
    display: 'flex',
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderBottom: `${px2rem(1)} solid ${cssVar(system.color.border.default, system.color.border.divider)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.xs, system.space.x1),
    // TODO: update this to use a grid token if we make those available as tokens
    paddingInline: px2rem(40),

    '@media screen and (max-width: 768px)': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      paddingInline: cssVar(system.padding.md, system.space.x4),
    },
  },
  modifiers: {
    modality: {
      touch: {
        overflowX: 'auto',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInline: 0,
        // data attributes are needed until scroll-driven animations are supported. Once they are,
        // we can use a CSS-only solution:
        // https://www.bram.us/2023/09/16/solved-by-css-scroll-driven-animations-detect-if-an-element-can-scroll-or-not/
        '&[data-scroll-position="start"]': {
          maskImage: 'linear-gradient(to right, white 80%, transparent)',
        },
        '&[data-scroll-position="middle"]': {
          maskImage:
            'linear-gradient(to left, white 80%, transparent), linear-gradient(to right, white 80%, transparent)',
          maskComposite: 'intersect',
        },
        '&[data-scroll-position="end"]': {
          maskImage: 'linear-gradient(to left, white 80%, transparent)',
        },
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
  },
});

export const TabsList = createSubcomponent('div')({
  displayName: 'Tabs.List',
  modelHook: useTabsModel,
  elemPropsHook: useTabsList,
})<TabListProps & {maskImage?: string}>(
  ({children, overflowButton, ...elemProps}, Element, model) => {
    const modality = useModalityType();

    return (
      <Element
        {...mergeStyles(
          elemProps,
          tabsListStencil({
            modality: modality,
          })
        )}
      >
        {useListRenderItems(model, children)}
        {overflowButton}
      </Element>
    );
  }
);
