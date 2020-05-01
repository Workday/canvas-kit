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
 * Direction of page content for internationalization
 */
export enum ContentDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

/**
 * The format of a Canvas theme for components that support it.
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
  direction: ContentDirection;
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
