import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {space} from '@workday/canvas-kit-react/tokens';
import {
  TransformOrigin,
  getTranslateFromOrigin,
  ExtractProps,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {FlexStyleProps, mergeStyles} from '@workday/canvas-kit-react/layout';

import {getTransformFromPlacement} from './getTransformFromPlacement';
import {usePopupCard, usePopupModel} from './hooks';
import {createStencil, cssVar, keyframes} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export type FlexAndBoxProps = ExtractProps<typeof Card, never> & FlexStyleProps;
export interface PopupCardProps extends FlexAndBoxProps {
  children?: React.ReactNode;
}

const popupAnimation = (transformOrigin: TransformOrigin) => {
  const translate = getTranslateFromOrigin(transformOrigin, space.xxs);
  /**
   * Keyframe for the dots loading animation.
   */
  // const translateX = translate.x;
  // const translateY = translate.y;

  return keyframes({
    '0%': {
      opacity: 0,
      translate: translate.x,
      // transform: `translate(${px2rem(translateX)}, ${px2rem(translateY)})`,
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0)',
    },
  });
};

function getSpace(value?: string | number) {
  if (value && value in space) {
    return space[value as keyof typeof space];
  } else {
    return value;
  }
}

function getMaxHeight(margin?: string | number) {
  // set the default margin offset to space.xl
  let marginOffset: string | number = cssVar(system.space.x10);

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

const popupCard = createStencil({
  vars: {
    maxHeight: '',
    transformOriginHorizontal: '',
    transformOriginVertical: '',
  },
  base: ({maxHeight, transformOriginHorizontal, transformOriginVertical}) => ({
    ...system.type.subtext.large,
    display: 'flex',
    position: 'relative',
    maxWidth: `calc(100vw - ${system.space.x8})`,
    flexDirection: 'column',
    boxShadow: system.depth[5],
    minHeight: system.space.zero,
    padding: system.space.x6,
    maxHeight: maxHeight,
    overflowY: 'auto',
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${transformOriginVertical} ${transformOriginHorizontal}`,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
    },
  }),
});

export const PopupCard = createSubcomponent('div')({
  displayName: 'Popup.Card',
  modelHook: usePopupModel,
  elemPropsHook: usePopupCard,
})<PopupCardProps>(({children, ref, ...elemProps}, Element, model) => {
  const transformOrigin = React.useMemo(() => {
    return getTransformFromPlacement(model.state.placement || 'bottom');
  }, [model.state.placement]);
  const cardMaxHeight = getMaxHeight(elemProps.margin);

  return (
    <Card
      cs={{
        animationName: popupAnimation(transformOrigin),
        '@media (max-width: 767.5px)': {
          transformOrigin: 'bottom center',
          animationName: popupAnimation({vertical: 'top', horizontal: 'center'}),
        },
      }}
      {...mergeStyles(elemProps, [
        popupCard({
          transformOriginHorizontal: transformOrigin.horizontal,
          transformOriginVertical: transformOrigin.vertical,
        }),
        {[popupCard.vars.maxHeight]: cardMaxHeight},
      ])}
    >
      {children}
    </Card>
  );
});
