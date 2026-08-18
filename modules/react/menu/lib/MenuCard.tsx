import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {listBoxContainerStencil} from '@workday/canvas-kit-react/collection';
import {
  ExtractProps,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {getTransformFromPlacement} from '@workday/canvas-kit-react/popup';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useMenuModel} from './useMenuModel';

export interface MenuCardProps extends ExtractProps<typeof Card, never> {
  children?: React.ReactNode;
}

export const menuCardStencil = createStencil({
  vars: {
    minWidth: px2rem(1),
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
    maxHeight: '',
  },
  base: ({transformOriginVertical, transformOriginHorizontal, minWidth, maxHeight}) => ({
    // ...system.legacy.type.subtext.lg,
    // components do not support spreading for legacy type token
    fontFamily: system.fontFamily.default,
    fontWeight: system.fontWeight.normal,
    fontSize: system.legacy.fontSize.subtext.lg,
    lineHeight: system.legacy.lineHeight.subtext.lg,
    letterSpacing: system.legacy.letterSpacing.subtext.lg,
    color: system.color.fg.default,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: `transform ease-out 150ms`,
    padding: system.legacy.padding.xxs,
    borderRadius: system.legacy.shape.xxl,
    maxWidth: calc.subtract('100vw', system.legacy.size.sm),
    boxShadow: system.depth[3],
    minWidth,
    maxHeight: cssVar(maxHeight, '60vh'),
    transformOrigin: `${transformOriginVertical} ${transformOriginHorizontal}`,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
    },
    [`&:where(:has(${listBoxContainerStencil.parts.listBoxContainer.selector}))`]: {
      overflow: 'hidden',
    },
    [`& :where(${listBoxContainerStencil.parts.listBoxContainer.selector})`]: {
      borderRadius: system.legacy.shape.xxl,
      // Card is a flex column container. Without this, a flex child won't shrink below its
      // content size, so `maxHeight` on the Card would be ignored and content would overflow
      // instead of scrolling inside the list-box-container.
      minHeight: 0,
    },
  }),
});

export const useMenuCard = createElemPropsHook(useMenuModel)(() => {
  return {};
});

export const MenuCard = createSubcomponent('div')({
  displayName: 'Menu.Card',
  modelHook: useMenuModel,
  elemPropsHook: useMenuCard,
})<MenuCardProps>(({minWidth, maxHeight, ...elemProps}, Element, model) => {
  const transformOrigin = React.useMemo(() => {
    return getTransformFromPlacement(model.state.placement || 'bottom');
  }, [model.state.placement]);

  return (
    <Card
      as={Element}
      {...mergeStyles(
        elemProps,
        menuCardStencil({
          minWidth: typeof minWidth === 'number' ? px2rem(minWidth as number) : minWidth,
          maxHeight: typeof maxHeight === 'number' ? px2rem(maxHeight as number) : maxHeight,
          transformOriginVertical: transformOrigin.vertical,
          transformOriginHorizontal: transformOrigin.horizontal,
        })
      )}
    >
      {elemProps.children}
    </Card>
  );
});
