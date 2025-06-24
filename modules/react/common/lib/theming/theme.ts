import {CanvasTheme, ContentDirection} from './types';
import {cssVar} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {breakpoints, up, down, between, only} from './breakpoints';

export const defaultCanvasTheme: CanvasTheme = {
  palette: {
    primary: {
      lightest: cssVar(base.blue100),
      light: cssVar(base.blue200),
      main: cssVar(base.blue600),
      dark: cssVar(base.blue700),
      darkest: cssVar(base.blue800),
      contrast: cssVar(base.neutral0),
    },
    alert: {
      lightest: cssVar(base.amber50),
      light: cssVar(base.amber100),
      main: cssVar(base.amber400),
      dark: cssVar(base.amber500),
      darkest: cssVar(base.amber800),
      contrast: cssVar(base.neutral0),
    },
    error: {
      lightest: cssVar(base.red100),
      light: cssVar(base.red200),
      main: cssVar(base.red700),
      dark: cssVar(base.red600),
      darkest: cssVar(base.red800),
      contrast: cssVar(base.neutral0),
    },
    success: {
      lightest: cssVar(base.green100),
      light: cssVar(base.green200),
      main: cssVar(base.green600),
      dark: cssVar(base.green700),
      darkest: cssVar(base.green800),
      contrast: cssVar(base.neutral0),
    },
    neutral: {
      lightest: cssVar(base.slate100),
      light: cssVar(base.slate200),
      main: cssVar(base.slate600),
      dark: cssVar(base.slate700),
      darkest: cssVar(base.slate800),
      contrast: cssVar(base.neutral0),
    },
    common: {
      focusOutline: cssVar(base.blue500),
      alertInner: cssVar(base.amber400),
      errorInner: cssVar(base.red500),
    },
  },
  breakpoints: {
    values: breakpoints,
    up,
    down,
    between,
    only,
  },
  direction: ContentDirection.LTR,
};
