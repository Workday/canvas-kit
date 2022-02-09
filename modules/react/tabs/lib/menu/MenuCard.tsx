import * as React from 'react';
import {keyframes} from '@emotion/react';

import {Card} from '@workday/canvas-kit-react/card';
import {space, type} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  TransformOrigin,
  getTranslateFromOrigin,
  createComponent,
  StyledType,
  useModelContext,
  ExtractProps,
  createHook,
} from '@workday/canvas-kit-react/common';
import {getTransformFromPlacement} from '@workday/canvas-kit-react/popup';

import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';

export interface MenuCardProps<T = unknown> extends ExtractProps<typeof Card, never> {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: MenuModel<T>;
  children?: React.ReactNode;
}

const popupAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, space.xxs);

  return keyframes`
    0% {
      opacity: 0;
      transform: translate(${translate.x}px, ${translate.y}px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  `;
};

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
      animation: popupAnimation(transformOrigin),
      animationDuration: '150ms',
      animationTimingFunction: 'ease-out',
      transformOrigin: `${transformOrigin.vertical} ${transformOrigin.horizontal}`,
      // Allow overriding of animation in special cases
      '.wd-no-animation &': {
        animation: 'none',
      },
    };
  }
);

export const MenuCard = createComponent('div')({
  displayName: 'Menu.Card',
  Component: ({children, model, padding = 'zero', ...elemProps}: MenuCardProps, ref, Element) => {
    const localModel = useModelContext(MenuModelContext, model);
    const props = useMenuCard(localModel, elemProps, ref);
    const transformOrigin = React.useMemo(() => {
      return getTransformFromPlacement(localModel.state.placement || 'bottom');
    }, [localModel.state.placement]);

    return (
      <StyledCard
        maxWidth={`calc(100vw - ${space.l})`}
        as={Element}
        transformOrigin={transformOrigin}
        padding={padding}
        {...props}
      >
        {children}
      </StyledCard>
    );
  },
});

export const useMenuCard = createHook((_: MenuModel) => {
  return {};
});
