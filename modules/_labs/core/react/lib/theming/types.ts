import {CanvasBreakpoints, BreakpointFnParam} from './breakpoints';

/**
 * A single palette within a Canvas theme
 */
export type CanvasThemePalette = {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrast: string;
};

type CanvasThemeCommonPalette = {
  focusOutline: string;
};

/**
 * The format of a Canvas theme for components that suport it.
 */
export interface CanvasTheme {
  palette: {
    common: CanvasThemeCommonPalette;
    primary: CanvasThemePalette;
    error: CanvasThemePalette;
    alert: CanvasThemePalette;
    success: CanvasThemePalette;
    neutral: CanvasThemePalette;
  };
  breakpoints: {
    values: CanvasBreakpoints;
    up: (key: BreakpointFnParam) => string;
    down: (key: BreakpointFnParam) => string;
    only: (key: BreakpointFnParam) => string;
    between: (start: BreakpointFnParam, end: BreakpointFnParam) => string;
  };
}

/**
 * Indicates a component is themeable with a CanvasTheme
 */
export interface Themeable {
  theme?: CanvasTheme;
}

/**
 * For custom themes that do not overwrite every default.
 */
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type PartialCanvasTheme = RecursivePartial<CanvasTheme>;
export type PartialCanvasThemePalette = RecursivePartial<CanvasThemePalette>;
