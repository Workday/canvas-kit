import {CanvasNumericalBrandTheme, PartialCanvasTheme} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

export const customColorTheme: PartialCanvasTheme = {
  palette: {
    primary: {
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
      main: 'darkolivegreen',
    },
    neutral: {
      main: 'gray',
    },
    common: {
      focusOutline: 'turquoise',
    },
  },
};

/** Brand-scope preset: primary only → buttons + selected states */
export const brandScopePrimaryOnly: CanvasNumericalBrandTheme = {
  brand: {primary: {'600': base.magenta600}},
};

/** Primary + independent focus color */
export const primaryWithFocus = {
  canvas: {
    palette: {
      primary: {main: base.magenta600},
      common: {focusOutline: base.teal500},
    },
  },
};
