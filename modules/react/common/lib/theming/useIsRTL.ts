import * as React from 'react';
import {ThemeContext} from '@emotion/react';
import {EmotionCanvasTheme, ContentDirection, PartialEmotionCanvasTheme} from './types';

function useDefaultTheme<T, C>(theme: T | undefined, config: C, fn: (config: C) => T) {
  return theme || fn(config);
}

/**
 * This is a small hook to support right-to-left logic.
 * It returns a boolean
 * @example
 * const isRTL = useIsRTL();
 * @deprecated ⚠️ `useIsRTL` has been deprecated and will be removed in the next major version. Please use [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute on the root element of your application.
 */

export const useIsRTL = (partialTheme?: PartialEmotionCanvasTheme) => {
  const theme = useDefaultTheme(partialTheme, ThemeContext, React.useContext) as EmotionCanvasTheme;

  return (theme && theme.canvas && theme.canvas.direction) === ContentDirection.RTL;
};
