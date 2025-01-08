import {PartialCanvasTheme} from '@workday/canvas-kit-react/common';

export const customColorTheme: PartialCanvasTheme = {
  palette: {
    primary: {
      main: 'purple',
      contrast: 'turquoise',
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

export const customColorThemeWithAction: PartialCanvasTheme = {
  palette: {
    primary: {
      main: 'purple',
      contrast: 'turquoise',
    },
    action: {
      main: 'red',
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
