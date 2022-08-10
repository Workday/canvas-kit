import {
  useTheme,
  PartialEmotionCanvasTheme,
  ContentDirection,
} from '@workday/canvas-kit-react/common';

export const useRTL = (partialTheme?: PartialEmotionCanvasTheme) => {
  const {canvas} = useTheme(partialTheme);
  return {shouldUseRTL: canvas.direction === ContentDirection.RTL};
};
