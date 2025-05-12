import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';

import {
  createSubcomponent,
  ExtractProps,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {getTransformFromPlacement} from '@workday/canvas-kit-react/popup';
import {system} from '@workday/canvas-tokens-web';

import {useMenuModel} from './useMenuModel';
import {createStencil, calc, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

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
    ...system.type.subtext.large,
    color: system.color.text.default,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: `transform ease-out 150ms`,
    padding: system.space.zero,
    maxWidth: calc.subtract('100vw', system.space.x8),
    boxShadow: system.depth[3],
    minWidth,
    maxHeight,
    transformOrigin: `${transformOriginVertical} ${transformOriginHorizontal}`,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
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
