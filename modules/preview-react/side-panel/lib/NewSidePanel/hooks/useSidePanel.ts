import {keyframes} from '@emotion/core';
import {createHook} from '@workday/canvas-kit-react/common';
import {SidePanelModel} from './useSidePanelModel';

const createKeyframes = (from: number | string, to: number | string) => {
  const normalized = {
    from: typeof from === 'number' ? from + 'px' : from,
    to: typeof to === 'number' ? to + 'px' : to,
  };

  return keyframes`
    from {
      width: ${normalized.from};
      min-width: ${normalized.from};
      max-width: ${normalized.from};
    } to {
      width: ${normalized.to};
      min-width: ${normalized.to};
      max-width: ${normalized.to};
    }
  `;
};

export const useSidePanel = createHook((model: SidePanelModel, ref) => {
  const motion = {
    collapse: createKeyframes(model.state.expandedWidth, model.state.collapsedWidth),
    expand: createKeyframes(model.state.collapsedWidth, model.state.expandedWidth),
  };

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    console.log('animation end');
  };

  const handleAnimationStart = (event: React.AnimationEvent<HTMLDivElement>) => {
    console.log('animation start');
  };

  const animation =
    model.state.expanded === 'expanded'
      ? `${motion.collapse} ease-out 200ms`
      : `${motion.expand} ease-out 200ms`;

  return {
    ref,
    css: {
      // should Box have an animation prop?
      animation: `${animation}`,
    },
    onAnimationStart: handleAnimationStart,
    onAnimationEnd: handleAnimationEnd,
  };
});
