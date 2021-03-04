import * as React from 'react';
import {ThemeContext} from '@emotion/core';
import {EmotionCanvasTheme, ContentDirection, PartialEmotionCanvasTheme} from './types';

function useDefaultTheme<T, C>(theme: T | undefined, config: C, fn: (config: C) => T) {
  return theme || fn(config);
}

/**
 * This is a small hook to support right-to-left logic.
 * It returns a boolean
 * @example
 * const isRTL = useIsRTL();
 */

export const useIsRTL = (partialTheme?: PartialEmotionCanvasTheme) => {
  const theme = useDefaultTheme(partialTheme, ThemeContext, React.useContext) as EmotionCanvasTheme;

  return (theme && theme.canvas && theme.canvas.direction) === ContentDirection.RTL;
};
