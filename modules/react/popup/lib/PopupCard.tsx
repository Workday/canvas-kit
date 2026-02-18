import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {
  ExtractProps,
  createSubcomponent,
  getTransformOrigin,
} from '@workday/canvas-kit-react/common';
import {FlexStyleProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  calc,
  createStencil,
  createVars,
  cssVar,
  keyframes,
  px2rem,
} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {getTransformFromPlacement} from './getTransformFromPlacement';
import {usePopupCard, usePopupModel} from './hooks';

export type FlexAndBoxProps = ExtractProps<typeof Card, never> & FlexStyleProps;
export interface PopupCardProps extends FlexAndBoxProps {
  children?: React.ReactNode;
}

const translateVars = createVars('positionX', 'positionY');

/**
 * Keyframe for the dots loading animation.
 */
const fadeIn = keyframes({
  '0%': {
    opacity: 1,
    transform: `translate(${cssVar(translateVars.positionX)}, ${cssVar(translateVars.positionY)})`,
  },
  '100%': {
    opacity: 1,
    transform: `translate(0)`,
  },
});

function getSpace(value?: string | number) {
  // TODO (deprecated tokens): Revisit tokens after removal of style props
  const spaceMap = {
    zero: system.gap.none,
    xxxs: system.gap.xs,
    xxs: system.gap.sm,
    xs: px2rem(12),
    s: system.gap.md,
    m: system.gap.lg,
    l: system.gap.xl,
    xl: px2rem(40),
    xxl: system.gap.xxl,
    xxxl: px2rem(80),
  };

  if (value && value in spaceMap) {
    return spaceMap[value as keyof typeof spaceMap];
  } else {
    return value;
  }
}

function getMaxHeight(margin?: string | number) {
  // set the default margin offset to 40px
  // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
  let marginOffset: string | number = cssVar(base.size500, system.space.x10);

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
  return `calc(100dvh - ${marginOffset})`;
}

export const popupCardStencil = createStencil({
  vars: {
    maxHeight: '',
    transformOriginHorizontal: '',
    transformOriginVertical: '',
  },
  base: ({maxHeight, transformOriginHorizontal, transformOriginVertical}) => ({
    fontFamily: system.fontFamily.default,
    fontWeight: system.fontWeight.normal,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.default, system.color.text.default),
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    maxWidth: calc.subtract('100vw', cssVar(system.size.sm, system.space.x8)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.lg, system.space.x2),
    boxShadow: system.depth[3],
    minHeight: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.xl, system.space.x6),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.xxxl, system.shape.x6),
    maxHeight: maxHeight,
    overflowY: 'auto',
    animationName: fadeIn,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${transformOriginVertical} ${transformOriginHorizontal}`,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
    },
    '@media screen and (max-width: 768px)': {
      transformOrigin: 'bottom center',
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
  // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
  const translate = getTransformOrigin(transformOrigin, cssVar(system.gap.sm, system.space.x2));
  const cardMaxHeight = getMaxHeight(elemProps.margin);

  return (
    <Card
      as={Element}
      ref={ref}
      {...mergeStyles(elemProps, [
        popupCardStencil({
          transformOriginHorizontal: transformOrigin.horizontal,
          transformOriginVertical: transformOrigin.vertical,
          maxHeight: cardMaxHeight,
        }),
        translateVars({positionX: translate.x, positionY: translate.y}),
      ])}
    >
      {children}
    </Card>
  );
});
