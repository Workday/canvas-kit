import * as React from 'react';
import {keyframes} from '@emotion/core';

import {Card} from '@workday/canvas-kit-react/card';
import {space, type, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  TransformOrigin,
  getTranslateFromOrigin,
  createComponent,
  StyledType,
  useModelContext,
  ExtractProps,
  useConstant,
} from '@workday/canvas-kit-react/common';
import {Stack, StackStyleProps} from '@workday/canvas-kit-react/layout';

import {getTransformFromPlacement} from './getTransformFromPlacement';
import {usePopupCard, PopupModel, PopupModelContext} from './hooks';

export interface PopupCardProps extends ExtractProps<typeof Card, never>, Partial<StackStyleProps> {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
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

const StyledPopupCard = styled(Card)<
  StyledType & {width?: number | string; transformOrigin?: TransformOrigin}
>(type.levels.subtext.large, ({transformOrigin}) => {
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
});

export const PopupCard = createComponent('div')({
  displayName: 'Popup.Card',
  Component: ({children, model, ...elemProps}: PopupCardProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);
    const props = usePopupCard(localModel, elemProps, ref);
    const transformOrigin = React.useMemo(() => {
      return getTransformFromPlacement(localModel.state.placement || 'bottom');
    }, [localModel.state.placement]);

    // As is a Stack that will render an element of `Element`
    const As = useConstant(() => Stack.as(Element));

    return (
      <StyledPopupCard
        as={As}
        transformOrigin={transformOrigin}
        position="relative"
        padding="l"
        depth={2}
        maxWidth={`calc(100vw - ${space.l})`}
        spacing={0}
        flexDirection="column"
        minHeight={0}
        maxHeight={`calc(100vh - ${
          elemProps.margin
            ? space[elemProps.margin as CanvasSpaceKeys] || elemProps.margin
            : space.xl
        } * 2)`}
        overflowY="auto" // force IE11 to limit the flex size of the card. Without this, the body isn't allowed to overflow properly: https://github.com/philipwalton/flexbugs/issues/216#issuecomment-453053557
        {...props}
      >
        {children}
      </StyledPopupCard>
    );
  },
});
