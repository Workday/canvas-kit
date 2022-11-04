import {CanvasTheme} from '@workday/canvas-kit-react/common';
import {Theme, useTheme} from '@emotion/react';
import {getObjectProxy} from './getObjectProxy';
import {defaultCanvasTheme} from './theme';

/**
 *
 * @param theme
 * @returns a theme object if it is defined, otherwise it will fall back on using defaultCanvasTheme
 */
export function getCanvasTheme(theme: any = {}): CanvasTheme {
  // prettier-ignore
  //@ts-ignore
  const windowTheme = typeof window !== 'undefined' && window.workday && window.workday.canvas && window.workday.canvas.theme;
  return getObjectProxy(theme.canvas || windowTheme || {}, defaultCanvasTheme);
}

export function useCanvasTheme(themeOverride?: Theme) {
  const theme = useTheme();

  return getCanvasTheme(themeOverride || theme);
}
