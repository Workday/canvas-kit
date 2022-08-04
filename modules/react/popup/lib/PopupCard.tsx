import * as React from 'react';
import {keyframes} from '@emotion/react';

import {Card} from '@workday/canvas-kit-react/card';
import {space, type, CanvasSpaceKeys} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  TransformOrigin,
  getTranslateFromOrigin,
  StyledType,
  ExtractProps,
  useConstant,
  createSubcomponent,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {Stack, StackStyleProps} from '@workday/canvas-kit-react/layout';

import {getTransformFromPlacement} from './getTransformFromPlacement';
import {usePopupCard, usePopupModel} from './hooks';

export interface PopupCardProps extends ExtractProps<typeof Card, never>, Partial<StackStyleProps> {
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
>(({transformOrigin}) => {
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

export const PopupCard = createSubcomponent('div')({
  displayName: 'Popup.Card',
  modelHook: usePopupModel,
  elemPropsHook: usePopupCard,
})<PopupCardProps>(({children, ...elemProps}, Element, model) => {
  const transformOrigin = React.useMemo(() => {
    return getTransformFromPlacement(model.state.placement || 'bottom');
  }, [model.state.placement]);

  // As is a Stack that will render an element of `Element`
  const As = useConstant(() => Stack.as(Element));
  const theme = useTheme();
  return (
    <StyledPopupCard
      as={As}
      transformOrigin={
        theme.canvas.breakpoints.down('s')
          ? {horizontal: 'center', vertical: 'bottom'}
          : transformOrigin
      }
      position="relative"
      padding="l"
      depth={5}
      maxWidth={`calc(100vw - ${space.l})`}
      spacing={0}
      flexDirection="column"
      minHeight={0}
      maxHeight={`calc(100vh - ${
        elemProps.margin ? space[elemProps.margin as CanvasSpaceKeys] || elemProps.margin : space.xl
      } * 2)`}
      overflowY="auto" // force IE11 to limit the flex size of the card. Without this, the body isn't allowed to overflow properly: https://github.com/philipwalton/flexbugs/issues/216#issuecomment-453053557
      {...type.levels.subtext.large}
      {...elemProps}
    >
      {children}
    </StyledPopupCard>
  );
});
