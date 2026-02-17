import {PartialCanvasTheme} from '@workday/canvas-kit-react/common';

export const customColorTheme: PartialCanvasTheme = {
  palette: {
    primary: {
      // New numerical scale approach - preferred for fine-grained control
      600: 'purple', // Main brand color
      700: 'darkpurple', // Hover/strong variant
      // Legacy keys still work for backward compatibility
      main: 'purple',
      contrast: 'turquoise',
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
