import * as React from 'react';
import {system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {handleCsProp, keyframes, CSProps, createStencil, calc} from '@workday/canvas-kit-styling';

/**
 * Keyframe for the dots loading animation.
 */
const keyframesLoading = keyframes({
  '0%, 80%, 100%': {
    transform: 'scale(0)',
  },
  '40%': {
    transform: 'scale(1)',
  },
});

const singleLoadingDotStencil = createStencil({
  vars: {
    animationDurationMs: '40ms',
  },
  base: ({animationDurationMs}) => ({
    backgroundColor: system.color.bg.alt.strong,
    width: system.space.x4,
    height: system.space.x4,
    fontSize: system.space.zero,
    borderRadius: system.shape.round,
    transform: 'scale(0)',
    display: 'inline-block',
    animationName: keyframesLoading,
    animationDuration: calc.multiply(animationDurationMs, 35),
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'both',
    '&:nth-child(1)': {
      animationDelay: '0ms',
    },
    '&:nth-child(2)': {
      animationDelay: calc.multiply(animationDurationMs, 4),
    },
    '&:nth-child(3)': {
      animationDelay: calc.multiply(animationDurationMs, 8),
    },
  }),
});

/**
 * The actual loading dot div.
 */
const LoadingAnimationDot = () => <div {...singleLoadingDotStencil()} />;

/**
 * A simple container for the loading dots.
 */
const loadingDotsStencil = createStencil({
  base: {
    display: 'inline-flex',
    gap: system.space.x2,
  },
});

/**
 * A simple component that displays three horizontal dots, to be used when some data is loading.
 */
export const LoadingDots = createComponent('div')({
  displayName: 'LoadingDots',
  Component: (elemProps: CSProps, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, loadingDotsStencil())}>
        <LoadingAnimationDot />
        <LoadingAnimationDot />
        <LoadingAnimationDot />
      </Element>
    );
  },
});
