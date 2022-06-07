import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {space, type} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  TransformOrigin,
  createSubcomponent,
  StyledType,
  ExtractProps,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {getTransformFromPlacement} from '@workday/canvas-kit-react/popup';

import {useMenuModel} from './useMenuModel';

export interface MenuCardProps extends ExtractProps<typeof Card, never> {
  children?: React.ReactNode;
}

const StyledCard = styled(Card)<
  StyledType & {width?: number | string; transformOrigin?: TransformOrigin}
>(
  type.levels.subtext.large,
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  ({transformOrigin}) => {
    if (transformOrigin == null) {
      return {};
    }
    return {
      transition: `transform ease-out 150ms`,
      transformOrigin: `${transformOrigin.vertical} ${transformOrigin.horizontal}`,
      // Allow overriding of animation in special cases
      '.wd-no-animation &': {
        animation: 'none',
      },
    };
  }
);

export const useMenuCard = createElemPropsHook(useMenuModel)(() => {
  return {};
});

export const MenuCard = createSubcomponent('div')({
  displayName: 'Menu.Card',
  modelHook: useMenuModel,
  elemPropsHook: useMenuCard,
})<MenuCardProps>((elemProps, Element, model) => {
  const transformOrigin = React.useMemo(() => {
    return getTransformFromPlacement(model.state.placement || 'bottom');
  }, [model.state.placement]);

  return (
    <StyledCard
      as={Element}
      maxWidth={`calc(100vw - ${space.l})`}
      transformOrigin={transformOrigin}
      padding="zero"
      {...elemProps}
    >
      {elemProps.children}
    </StyledCard>
  );
});
