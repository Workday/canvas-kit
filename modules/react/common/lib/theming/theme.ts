import colors from '@workday/canvas-colors-web';
import {CanvasTheme, ContentDirection} from './types';
import {breakpoints, up, down, between, only} from './breakpoints';

export const defaultCanvasTheme: CanvasTheme = {
  palette: {
    primary: {
      lightest: colors.blueberry100,
      light: colors.blueberry200,
      main: colors.blueberry400,
      dark: colors.blueberry500,
      darkest: colors.blueberry600,
      contrast: colors.frenchVanilla100,
    },
    alert: {
      lightest: colors.cantaloupe100,
      light: colors.cantaloupe300,
      main: colors.cantaloupe400,
      dark: colors.cantaloupe500,
      darkest: colors.cantaloupe600,
      contrast: colors.frenchVanilla100,
    },
    error: {
      lightest: colors.cinnamon100,
      light: colors.cinnamon200,
      main: colors.cinnamon500,
      dark: colors.cinnamon600,
      darkest: '#80160E',
      contrast: colors.frenchVanilla100,
    },
    success: {
      lightest: colors.greenApple100,
      light: colors.greenApple300,
      main: colors.greenApple600,
      dark: '',
      darkest: '',
      contrast: colors.frenchVanilla100,
    },
    neutral: {
      lightest: colors.soap200,
      light: colors.soap300,
      main: colors.soap600,
      dark: colors.licorice300,
      darkest: colors.licorice400,
      contrast: colors.frenchVanilla100,
    },
    common: {
      focusOutline: colors.blueberry400,
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
