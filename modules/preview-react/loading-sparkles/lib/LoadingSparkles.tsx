import * as React from 'react';
import {keyframes} from '@emotion/css';
import {system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createStyles, CSProps, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

import {sparkleIcon} from './sparkleIcon';

/**
 * Duration of the sparkle animation (in ms).
 */
const ANIMATION_DURATION_MS = 1230;

// TODO: Replace with the actual color tokens when they are available.
/**
 * Dragon Fruit colors.
 */
const AI_COLORS = {
  dragonFruit100: '#FBF1FF',
  dragonFruit200: '#EFD3FF',
  dragonFruit300: '#BE61F6',
  dragonFruit400: '#8C17D2',
  dragonFruit500: '#6B11A3',
  dragonFruit600: '#4A0D71',
};

/**
 * The animation for the sparkle.
 */
const LOADING_ANIMATION = keyframes({
  '0%, 79%, 100%': {
    opacity: 0.2,
    transform: 'scale(0.55)',
  },
  '27%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '53%': {
    opacity: 0.6,
    transform: 'scale(0.7)',
  },
});

const loadingSparklesIconStyles = createStyles({
  animationDuration: `${ANIMATION_DURATION_MS}ms`,
  animationFillMode: 'both',
  animationIterationCount: 'infinite',
  animationName: LOADING_ANIMATION,
  animationTimingFunction: 'ease-in-out',
  '.wd-sparkle-fill': {
    fill: AI_COLORS.dragonFruit400,
  },
  '&:nth-child(1)': {
    animationDelay: '0ms',
  },
  '&:nth-child(2)': {
    animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (1/3))`,
  },
  '&:nth-child(3)': {
    animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (2/3))`,
  },
});

/**
 * An individual loading sparkle. ✨
 */
const Sparkle = () => {
  return (
    <SystemIcon
      icon={sparkleIcon}
      cs={[loadingSparklesIconStyles]}
      size={cssVar(system.space.x3)}
    />
  );
};

const loadingSparklesStyles = createStyles({
  display: 'inline-flex',
  gap: px2rem(1),
});

/**
 * A simple component that displays three horizontal sparkles, to be used when an AI operation is in progress.
 */
export const LoadingSparkles = createComponent('div')({
  displayName: 'LoadingSparkles',
  Component: (elemProps: CSProps, ref, Element) => {
    return (
      <Element ref={ref} role="status" {...handleCsProp(elemProps, loadingSparklesStyles)}>
        <Sparkle />
        <Sparkle />
        <Sparkle />
      </Element>
    );
  },
});
