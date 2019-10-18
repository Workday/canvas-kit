/**
 * A single palette within a Canvas theme
 */
type CanvasThemePalette = {
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrast: string;
};

/**
 * The format of a Canvas theme for components that suport it.
 */
export interface CanvasTheme {
  palette: {
    common: {
      focusOutline: string;
    };
    primary: CanvasThemePalette;
    error: CanvasThemePalette;
    alert: CanvasThemePalette;
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
