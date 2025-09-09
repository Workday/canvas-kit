import {system} from '@workday/canvas-tokens-web';
import {createComponent} from '@workday/canvas-kit-react/common';
import {
  handleCsProp,
  keyframes,
  CSProps,
  createStencil,
  calc,
  px2rem,
  cssVar,
} from '@workday/canvas-kit-styling';

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
  '0%, 79%, 100%': {
    opacity: 0.6,
  },
  '27%': {
    opacity: 1,
  },
  '53%': {
    opacity: 0.8,
  },
});

export interface LoadingDotsProps extends CSProps {
  /**
   * Applies backgroundColor to loading dots, intended for use with the circle variant design on grey/dark/image-based backgrounds.
   * @default `system.color.bg.alt.strong`
   */
  loadingDotColor?: string;
  /**
   * Duration of the loading animation in milliseconds.
   * @default `40ms`
   */
  animationDurationMs?: string;
  variant?: 'inverse';
}

export const loadingDotsStencil = createStencil({
  vars: {
    animationDurationMs: '40ms',
    loadingDotColor: system.color.bg.muted.strong,
  },
  parts: {
    loadingAnimationDot: 'loading-animation-dot',
  },
  base: ({loadingDotColor, animationDurationMs, loadingAnimationDotPart}) => ({
    display: 'inline-flex',
    gap: system.space.x2,
    [loadingAnimationDotPart]: {
      backgroundColor: loadingDotColor,
      width: system.space.x4,
      height: system.space.x4,
      fontSize: system.space.zero,
      borderRadius: system.shape.round,
      outline: `${px2rem(2)} solid transparent`,
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
    },
  }),
  modifiers: {
    variant: {
      inverse: ({loadingDotColor, loadingAnimationDotPart}) => ({
        [loadingAnimationDotPart]: {
          backgroundColor: cssVar(system.color.bg.default, loadingDotColor),
        },
      }),
    },
  },
});

/**
 * A simple component that displays three horizontal dots, to be used when some data is loading.
 */
export const LoadingDots = createComponent('div')({
  displayName: 'LoadingDots',
  Component: (
    {loadingDotColor, animationDurationMs, variant, ...elemProps}: LoadingDotsProps,
    ref,
    Element
  ) => {
    return (
      <Element
        ref={ref}
        {...handleCsProp(
          elemProps,
          loadingDotsStencil({loadingDotColor, animationDurationMs, variant})
        )}
      >
        <div data-part="loading-animation-dot" />
        <div data-part="loading-animation-dot" />
        <div data-part="loading-animation-dot" />
      </Element>
    );
  },
});
