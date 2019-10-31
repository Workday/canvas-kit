import type from './lib/type';
import space from './lib/space';
import CanvasProvider from './lib/CanvasProvider';
import {breakpoints, CanvasBreakpoints, BreakpointKey} from './lib/theming/breakpoints';
import createCanvasTheme from './lib/theming/createCanvasTheme';

export default type;
export {
  breakpoints,
  type,
  space,
  BreakpointKey,
  CanvasBreakpoints,
  CanvasProvider,
  createCanvasTheme,
};
export * from './lib/type';
export * from './lib/theming/types';
export * from './lib/theming/theme';
