import * as React from 'react';
import {keyframes} from '@emotion/react';

import {Card} from '@workday/canvas-kit-react/card';
import {space, type} from '@workday/canvas-kit-react/tokens';
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

function getSpace(value?: string | number) {
  if (value && value in space) {
    return space[value as keyof typeof space];
  } else {
    return value;
  }
}

function getMaxHeight(margin?: string | number) {
  // set the default margin offset to space.xl
  let marginOffset: string | number = space.xl;

  if (margin) {
    // parse the margin prop
    if (typeof margin === 'string') {
      const marginValues = margin.split(' ');
      const marginTop = getSpace(marginValues[0]);
      // If provided, use the specific margin-bottom in the shorthand, otherwise use the margin-top value
      const marginBottom = getSpace(marginValues[2]) || marginTop;

      marginOffset = `(${marginTop} + ${marginBottom})`;
    } else {
      // if margin is a number, double it to get the offset
      marginOffset = `${margin * 2}px`;
    }
  }
  return `calc(100vh - ${marginOffset})`;
}

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
      maxHeight={getMaxHeight(elemProps.margin)}
      overflowY="auto"
      {...type.levels.subtext.large}
      {...elemProps}
    >
      {children}
    </StyledPopupCard>
  );
});
