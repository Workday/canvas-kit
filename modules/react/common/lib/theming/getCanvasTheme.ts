import {CanvasTheme} from '@workday/canvas-kit-react/common';
import {Theme, useTheme} from '@emotion/react';
import {getObjectProxy} from './getObjectProxy';
import {defaultCanvasTheme} from './theme';

/**
 * Use this function when you have access to `theme` in styled components.
 * This function ensures that a theme is defined via a proxy and allows access to properties on the theme object.
 * @param theme Any partial or full theme object.
 * @returns a canvas theme object if it is defined, otherwise it will fall back on using defaultCanvasTheme
 * @example
 * const ResponsiveContainer = styled('div')(({theme}) => {
 * const canvas = getCanvasTheme(theme);
 *  return {
 *    maxHeight: '100vh',
 *    display: 'flex',
 *    position: 'absolute',
 *    left: 0,
 *    top: 0,
 *    justifyContent: 'center',
 *    alignItems: 'center',
 *    height: '100vh',
 *    [canvas.breakpoints.down('s')]: {
 *      alignItems: 'end',
 *    },
 *  };
 *});
 */
export function getCanvasTheme(theme: any = {}): CanvasTheme {
  const windowTheme = typeof window !== 'undefined' && (window as any)?.workday?.canvas?.theme;

  return getObjectProxy(theme.canvas || windowTheme, defaultCanvasTheme);
}

/**
 * Use `useCanvasTheme` hook when you have access to `theme` in functional components.
 * @param theme Any partial or full theme object.
 *
 * If theme is not passed, the function will try to pull the theme from ThemeContext.
 *
 * The resulting theme will be merged with the default Canvas theme
 * to establish any missing fields that have not been defined by the consumer's theme object.
 *
 * @returns a canvas theme object if it is defined, otherwise it will fall back on using defaultCanvasTheme
 * @example
 * const theme = useCanvasTheme();
 *
 * return (
 *  <Subtext
 *    as={Element}
 *    size="medium"
 *    color={hasError ? theme.palette.error.main : undefined}
 *    {...elemProps}
 *  >
 *    {children}
 *  </Subtext>
 * );
 */

export function useCanvasTheme(themeOverride?: Theme) {
  const theme = useTheme();

  return getCanvasTheme(themeOverride || theme);
}
