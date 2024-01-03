import * as React from 'react';
import {keyframes, CSSObject} from '@emotion/react';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {canvas} from '@workday/canvas-kit-react/tokens';
import {styled} from '@workday/canvas-kit-react/common';
import {sparkleStage0Icon} from './sparkleStage0Icon';
import {sparkleStage1Icon} from './sparkleStage1Icon';
import {sparkleStage2Icon} from './sparkleStage2Icon';

/**
 * Duration of the sparkle animation (in ms).
 */
const ANIMATION_DURATION_MS = 1200;

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
 * Creates a keyframe animation that cycles through styles for each stage.
 */
const createAnimation = (stages: CSSObject[]) =>
  keyframes({
    '0%': stages[2],
    '20%': stages[2],
    '47%': stages[0],
    '73%': stages[1],
    '100%': stages[2],
  });

/**
 * Creates a keyframe animation that cycles through colors for each stage.
 */
const COLOR_ANIMATION = createAnimation([
  {fill: AI_COLORS.dragonFruit400},
  {fill: AI_COLORS.dragonFruit300},
  {fill: AI_COLORS.dragonFruit200},
]);

/**
 * Creates a keyframe animation that scales the sparkle to the given stage.
 */
const createScaleAnimation = (stageIndex: number, stageScales: number[]) =>
  createAnimation(
    stageScales.map((scale, index) => ({
      opacity: index === stageIndex ? 1 : 0,
      transform: `scale(${scale})`,
    }))
  );

type SparkleAnimationIconProps = {
  /**
   * The animation delay of the sparkle (in ms).
   */
  animationDelay: number;

  /**
   * At which stage the icon is visible.
   */
  stageIndex: number;

  /**
   * The scales of the sparkle at each stage.
   */
  stageScales: number[];
} & React.ComponentProps<typeof SystemIcon>;

/**
 * The animated sparkle icon.
 */
const SparkleAnimationIcon = styled(SystemIcon)<SparkleAnimationIconProps>(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    animationDuration: ANIMATION_DURATION_MS + 'ms',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    '.wd-sparkle-fill': {
      animationDuration: ANIMATION_DURATION_MS + 'ms',
      animationFillMode: 'both',
      animationIterationCount: 'infinite',
      animationName: COLOR_ANIMATION,
    },
  },
  ({animationDelay, stageIndex, stageScales}) => ({
    animationDelay: animationDelay + 'ms',
    animationName: createScaleAnimation(stageIndex, stageScales),
    '.wd-sparkle-fill': {
      animationDelay: animationDelay + 'ms',
    },
  })
);

/**
 * A container for the loading sparkle stages.
 */
const SparkleContainer = styled('div')({
  position: 'relative',
  width: canvas.space.xs,
  height: canvas.space.xs,
});

type SparkleProps = {
  /**
   * The animation delay of the sparkle (in ms).
   */
  animationDelay?: number;
};

/**
 * A loading sparkle, which consists of three SVGs laid on top of each other.
 */
const Sparkle = ({animationDelay = 0}: SparkleProps) => (
  <SparkleContainer>
    <SparkleAnimationIcon
      icon={sparkleStage0Icon}
      stageIndex={0}
      stageScales={[1, 0.7, 0.55]}
      animationDelay={animationDelay}
    />
    <SparkleAnimationIcon
      icon={sparkleStage1Icon}
      stageIndex={1}
      stageScales={[1.4, 1, 0.8]}
      animationDelay={animationDelay}
    />
    <SparkleAnimationIcon
      icon={sparkleStage2Icon}
      stageIndex={2}
      stageScales={[1.8, 1.25, 1]}
      animationDelay={animationDelay}
    />
  </SparkleContainer>
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
