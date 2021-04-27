import {SerializedStyles} from '@emotion/core';
import {ContentDirection, EmotionCanvasTheme, useTheme} from '@workday/canvas-kit-react/common';
import {CSSProperties} from '@workday/canvas-kit-react/tokens';
import {useMemo} from 'react';
import rtlCSSJS from 'rtl-css-js';

type TemplateOrObjectStyles = CSSProperties | SerializedStyles;

export type ComponentStyles = Record<string, CSSProperties> | Record<string, SerializedStyles>;

const getThemedRTL = (theme: EmotionCanvasTheme, ...styles: TemplateOrObjectStyles[]) => {
  return theme.canvas.direction === ContentDirection.RTL ? rtlCSSJS(styles) : styles;
};

export function useThemeRTL() {
  const theme = useTheme();

  const themeRTL = useMemo(() => {
    return (...cssObject: TemplateOrObjectStyles[]) => {
      const styles = getThemedRTL(theme, ...cssObject);
      return styles.reduce((first, second) => ({...first, ...second}), {}) as CSSProperties;
    };
  }, [theme]);

  return {themeRTL, theme};
}
