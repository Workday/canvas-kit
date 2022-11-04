import {getObjectProxy} from './getObjectProxy';
import {defaultCanvasTheme} from './theme';

export function getCanvasTheme(theme: any = {}) {
  return getObjectProxy(theme.canvas || {}, defaultCanvasTheme);
}
