import {
  CanvasNumericalBrandTheme,
  CanvasProviderTheme,
  PartialCanvasTheme,
  isNumericalTheme,
} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

/** Wrap legacy palette themes; pass numerical `brand` themes through unchanged. */
export function toCanvasProviderTheme(
  theme?: PartialCanvasTheme | CanvasNumericalBrandTheme | CanvasProviderTheme
): CanvasProviderTheme | undefined {
  if (!theme) {
    return undefined;
  }
  if (isNumericalTheme(theme)) {
    return theme;
  }
  if ('canvas' in theme) {
    return theme;
  }
  return {canvas: theme as PartialCanvasTheme};
}

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

/**
 * Numerical `brand` preset — mirrors {@link customColorTheme} using the v16 theming API.
 *
 * | Key | Maps to | Consumers |
 * |-----|---------|-----------|
 * | `primary['600']` + `action` | purple / turquoise label | PrimaryButton, accents |
 * | `primary['500']` | turquoise | Focus rings |
 * | `critical['600']` | crimson | TextInput error, DeleteButton |
 * | `caution['400']` | coral | TextInput caution |
 * | `positive['600']` | darkolivegreen | Checkbox, Radio checked |
 * | `neutral['600']` | gray | Neutral brand text |
 */
export const customNumericalTheme: CanvasNumericalBrandTheme = {
  brand: {
    primary: {
      '600': 'purple',
      '500': 'turquoise',
    },
    critical: {
      '600': 'crimson',
    },
    caution: {
      '400': 'coral',
    },
    positive: {
      '600': 'darkolivegreen',
    },
    neutral: {
      '600': 'gray',
    },
    action: {
      base: 'purple',
      accent: 'turquoise',
    },
  },
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
