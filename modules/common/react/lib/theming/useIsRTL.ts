import {useTheme} from './useTheme';
import {PartialEmotionCanvasTheme, ContentDirection} from './types';

/**
 * This is a small hook to support right-to-left logic.
 * It returns a boolean
 * @example
 * const isRTL = useIsRTL();
 */
export const useIsRTL = (partialTheme?: PartialEmotionCanvasTheme) => {
  const theme = useTheme(partialTheme);
  return theme.canvas.direction === ContentDirection.RTL;
};
