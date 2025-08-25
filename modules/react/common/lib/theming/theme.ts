import {CanvasTheme, ContentDirection} from './types';
import {base} from '@workday/canvas-tokens-web';
import {breakpoints, up, down, between, only} from './breakpoints';

export const defaultCanvasTheme: CanvasTheme = {
  palette: {
    primary: {
      lightest: base.blue25,
      lighter: base.blue50,
      light: base.blue200,
      main: base.blue600,
      dark: base.blue700,
      darkest: base.blue800,
      contrast: base.neutral0,
    },
    alert: {
      lightest: base.amber25,
      lighter: base.amber50,
      light: base.amber200,
      main: base.amber400,
      dark: base.amber500,
      darkest: base.amber600,
      contrast: base.neutral900,
    },
    error: {
      lightest: base.red25,
      lighter: base.red50,
      light: base.red200,
      main: base.red600,
      dark: base.red700,
      darkest: base.red800,
      contrast: base.neutral0,
    },
    success: {
      lightest: base.green25,
      lighter: base.green50,
      light: base.green200,
      main: base.green600,
      dark: base.green700,
      darkest: base.green800,
      contrast: base.neutral0,
    },
    neutral: {
      lightest: base.slate25,
      lighter: base.slate50,
      light: base.slate200,
      main: base.slate600,
      dark: base.slate700,
      darkest: base.slate800,
      contrast: base.neutral0,
    },
    common: {
      focusOutline: base.blue500,
      alertInner: base.amber400,
      errorInner: base.red500,
      alertOuter: base.amber500,
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
