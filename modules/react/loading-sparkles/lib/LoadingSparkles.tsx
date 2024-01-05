import * as React from 'react';
import {keyframes} from '@emotion/react';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {canvas} from '@workday/canvas-kit-react/tokens';
import {styled} from '@workday/canvas-kit-react/common';
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

type SparkleAnimationIconProps = {
  /**
   * The animation delay of the sparkle (in ms).
   */
  animationDelay: number;
};

/**
 * The animated sparkle icon.
 */
const SparkleAnimationIcon = styled(SystemIcon)<SparkleAnimationIconProps>(
  {
    animationDuration: ANIMATION_DURATION_MS + 'ms',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    animationName: LOADING_ANIMATION,
    animationTimingFunction: 'ease-in-out',
    '.wd-sparkle-fill': {
      fill: AI_COLORS.dragonFruit400,
    },
  },
  ({animationDelay}) => ({
    animationDelay: animationDelay + 'ms',
  })
);

/**
 * An individual loading sparkle.
 */
const Sparkle = ({animationDelay = 0}: {animationDelay?: number}) => (
  <SparkleAnimationIcon icon={sparkleIcon} animationDelay={animationDelay} size={canvas.space.xs} />
);

/**
 * A simple container for the loading sparkles.
 */
const Container = styled('div')({
  display: 'inline-flex',
  gap: '1px',
});

/**
 * A simple component that displays three horizontal sparkles, to be used when an AI operation is in progress.
 */
export const LoadingSparkles = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Container {...props}>
      <Sparkle />
      <Sparkle animationDelay={ANIMATION_DURATION_MS / 3} />
      <Sparkle animationDelay={ANIMATION_DURATION_MS * (2 / 3)} />
    </Container>
  );
};
