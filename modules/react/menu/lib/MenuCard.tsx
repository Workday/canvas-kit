import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';

import {
  createSubcomponent,
  ExtractProps,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {getTransformFromPlacement} from '@workday/canvas-kit-react/popup';
import {system, base} from '@workday/canvas-tokens-web';

import {useMenuModel} from './useMenuModel';
import {createStencil, calc} from '@workday/canvas-kit-styling';
import {mergeStyles} from '../../layout';

export interface MenuCardProps extends ExtractProps<typeof Card, never> {
  children?: React.ReactNode;
}

export const menuCardStencil = createStencil({
  vars: {
    minWidth: '1px',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
  },
  base: ({transformOriginVertical, transformOriginHorizontal, minWidth}) => ({
    ...system.type.subtext.large,
    color: base.blackPepper300,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: `transform ease-out 150ms`,
    padding: '0px',
    maxWidth: calc.subtract('100vw', system.space.x8),
    boxShadow: system.depth[3],
    minWidth: minWidth,
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
})<MenuCardProps>(({minWidth, ...elemProps}, Element, model) => {
  const transformOrigin = React.useMemo(() => {
    return getTransformFromPlacement(model.state.placement || 'bottom');
  }, [model.state.placement]);

  return (
    <Card
      as={Element}
      {...mergeStyles(
        elemProps,
        menuCardStencil({
          minWidth: typeof minWidth === 'string' ? minWidth : px2rem(minWidth),
          transformOriginVertical: transformOrigin.vertical,
          transformOriginHorizontal: transformOrigin.horizontal,
        })
      )}
    >
      {elemProps.children}
    </Card>
  );
});
