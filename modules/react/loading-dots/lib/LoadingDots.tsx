import * as React from 'react';
import {base, system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, handleCsProp, keyframes, CSProps} from '@workday/canvas-kit-styling';

/**
 * Duration of the sparkle dots loading (in ms).
 */
const ANIMATION_DURATION_MS = '1400';

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

const loadingDotStyles = createStyles({
  backgroundColor: base.soap400,
  width: system.space.x4,
  height: system.space.x4,
  fontSize: system.space.zero,
  borderRadius: system.shape.round,
  transform: 'scale(0)',
  display: 'inline-block',
  animationName: keyframesLoading,
  animationDuration: `${ANIMATION_DURATION_MS}ms`,
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  animationFillMode: 'both',
  '&:nth-child(1)': {
    animationDelay: '0ms',
  },
  '&:nth-child(2)': {
    animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (4/35))`, // 160
  },
  '&:nth-child(3)': {
    animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (8/35))`, // 320
  },
});

/**
 * The actual loading dot div.
 */
const LoadingAnimationDot = () => <div className={`${loadingDotStyles}`}></div>;

/**
 * A simple container for the loading dots.
 */
const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

/**
 * A simple component that displays three horizontal dots, to be used when some data is loading.
 */
export const LoadingDots = createComponent('div')({
  displayName: 'LoadingDots',
  Component: (elemProps: CSProps, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, containerStyles)}>
        <LoadingAnimationDot />
        <LoadingAnimationDot />
        <LoadingAnimationDot />
      </Element>
    );
  },
});
