import {PartialCanvasTheme} from '@workday/canvas-kit-react/common';

export const customColorTheme: PartialCanvasTheme = {
  palette: {
    primary: {
      main: 'purple', // Purple in OKLCH - will auto-generate other shades
    },
    alert: {
      main: 'coral',
    },
    error: {
      main: 'crimson',
    },
    success: {
      main: 'aquamarine',
    },
    neutral: {
      main: 'gray',
    },
    common: {
      focusOutline: 'turquoise',
    },
  },
};
