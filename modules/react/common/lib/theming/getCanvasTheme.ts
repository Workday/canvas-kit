import {getObjectProxy} from './getObjectProxy';
import {defaultCanvasTheme} from './theme';

/**
 *
 * @param theme
 * @returns a theme object if it is defined, otherwise it will fall back on using defaultCanvasTheme
 */
export function getCanvasTheme(theme: any = {}) {
  return getObjectProxy(theme.canvas || {}, defaultCanvasTheme);
}
