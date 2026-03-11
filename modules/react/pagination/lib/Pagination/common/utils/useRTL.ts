import {
  ContentDirection,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';

export const useRTL = (partialTheme?: PartialEmotionCanvasTheme) => {
  const theme = useTheme(partialTheme);
  const shouldUseRTL = theme.canvas.direction === ContentDirection.RTL;
  return {
    shouldUseRTL,
  };
};
