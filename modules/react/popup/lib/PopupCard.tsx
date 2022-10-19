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
} from '@workday/canvas-kit-react/common';
import {Flex, FlexStyleProps} from '@workday/canvas-kit-react/layout';

import {getTransformFromPlacement} from './getTransformFromPlacement';
import {usePopupCard, usePopupModel} from './hooks';

export type FlexAndBoxProps = ExtractProps<typeof Card, never> & FlexStyleProps;
export interface PopupCardProps extends FlexAndBoxProps {
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
>(({transformOrigin, theme}) => {
  if (transformOrigin == null) {
    return {};
  }

  return {
    animation: popupAnimation(transformOrigin),
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${transformOrigin.vertical} ${transformOrigin.horizontal}`,
    [theme.canvas.breakpoints.down('s')]: {
      animation: popupAnimation({vertical: 'bottom', horizontal: 'center'}),
      animationDuration: '150ms',
      animationTimingFunction: 'ease-out',
      transformOrigin: 'bottom center',
    },
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

  // As is a Flex that will render an element of `Element`
  const As = useConstant(() => Flex.as(Element));

  return (
    <StyledPopupCard
      as={As}
      transformOrigin={transformOrigin}
      position="relative"
      depth={5}
      maxWidth={`calc(100vw - ${space.l})`}
      flexDirection="column"
      minHeight={0}
      padding="m"
      maxHeight={`calc(100vh - ${
        elemProps.margin ? space[elemProps.margin as CanvasSpaceKeys] || elemProps.margin : space.xl
      } * 2)`}
      overflowY="auto"
      {...type.levels.subtext.large}
      {...elemProps}
    >
      {children}
    </StyledPopupCard>
  );
});
