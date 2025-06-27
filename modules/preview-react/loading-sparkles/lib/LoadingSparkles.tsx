import {system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {CSProps, createStencil, handleCsProp, keyframes, px2rem} from '@workday/canvas-kit-styling';

import {sparkleIcon} from './sparkleIcon';

/**
 * Duration of the sparkle animation (in ms).
 */
const ANIMATION_DURATION_MS = 1230;

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

/**
 * An individual loading sparkle. ✨
 */
const Sparkle = () => {
  return <SystemIcon data-part="sparkle" icon={sparkleIcon} size={system.space.x3} />;
};

export const loadingSparklesStencil = createStencil({
  base: {
    display: 'inline-flex',
    gap: px2rem(1),
    '& [data-part="sparkle"]': {
      animationDuration: `${ANIMATION_DURATION_MS}ms`,
      animationFillMode: 'both',
      animationIterationCount: 'infinite',
      animationName: LOADING_ANIMATION,
      animationTimingFunction: 'ease-in-out',
      [systemIconStencil.vars.color]: system.color.fg.ai,
      '&:nth-child(1)': {
        animationDelay: '0ms',
      },
      '&:nth-child(2)': {
        animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (1/3))`,
      },
      '&:nth-child(3)': {
        animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (2/3))`,
      },
    },
  },
});

/**
 * A simple component that displays three horizontal sparkles, to be used when an AI operation is in progress.
 */
export const LoadingSparkles = createComponent('div')({
  displayName: 'LoadingSparkles',
  Component: (elemProps: CSProps, ref, Element) => {
    return (
      <Element ref={ref} role="status" {...handleCsProp(elemProps, loadingSparklesStencil())}>
        <Sparkle />
        <Sparkle />
        <Sparkle />
      </Element>
    );
  },
});
