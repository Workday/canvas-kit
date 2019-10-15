import {CSSProperties as RCP} from 'react';
import {CSSObject} from '@emotion/core';

export type CSSProperties = RCP & CSSObject;

type CanvasThemePalette = {
  light: string;
  main: string;
  dark: string;
  contrast: string;
};

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
