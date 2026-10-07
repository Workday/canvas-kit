import {brand, system} from '@workday/canvas-tokens-web';

import {
  applyCautionBrandBundle,
  applyCriticalBrandBundle,
  applyPrimaryBrandBundle,
  writeBrandScopeSemantic,
  writeIndependentBrandTokens,
  writeNumericalTheme,
} from '../lib/theming/brandScope';

describe('applyPrimaryBrandBundle', () => {
  it('writes button and selected tokens but not focus', () => {
    const style: Record<string, string> = {};
    applyPrimaryBrandBundle('red', style);

    expect(style[brand.action.base as string]).toBe('red');
    expect(style[brand.primary600 as string]).toBe('red');
    expect(style[system.color.brand.accent.primary as string]).toBe('red');
    expect(style[system.color.brand.fg.selected as string]).toContain('color-mix');
    expect(style[system.color.brand.fg.selected as string]).not.toBe(`var(${brand.primary700})`);
    expect(style[system.color.brand.surface.selected as string]).toContain('color-mix');
    expect(style[system.color.brand.focus.primary as string]).toBeUndefined();
    expect(style[system.color.brand.border.primary as string]).toBeUndefined();
  });
});

describe('writeIndependentBrandTokens', () => {
  it('writes focus when focusOutline is explicitly set', () => {
    const style: Record<string, string> = {};
    writeIndependentBrandTokens(
      {canvas: {palette: {primary: {main: 'red'}, common: {focusOutline: 'teal'}}}},
      style
    );

    expect(style[system.color.brand.focus.primary as string]).toBe('teal');
    expect(style[system.color.brand.border.primary as string]).toBe('teal');
  });
});

describe('applyCriticalBrandBundle', () => {
  it('writes TextInput error border and focus tokens', () => {
    const style: Record<string, string> = {};
    applyCriticalBrandBundle('crimson', style);

    expect(style[brand.error.base as string]).toBe('crimson');
    expect(style[system.color.brand.border.critical as string]).toBe('crimson');
    expect(style[system.color.brand.focus.critical as string]).toBe('crimson');
  });
});

describe('applyCautionBrandBundle', () => {
  it('writes TextInput caution border and inner focus tokens', () => {
    const style: Record<string, string> = {};
    applyCautionBrandBundle('coral', style);

    expect(style[brand.alert.base as string]).toBe('coral');
    expect(style[system.color.brand.border.caution as string]).toBe('coral');
    expect(style[system.color.brand.focus.caution?.inner as string]).toBe('coral');
  });
});

describe('writeBrandScopeSemantic', () => {
  it('applies error and alert bundles from customColorTheme-style input', () => {
    const style: Record<string, string> = {};
    writeBrandScopeSemantic(
      {
        canvas: {
          palette: {
            primary: {main: 'purple'},
            error: {main: 'crimson'},
            alert: {main: 'coral'},
          },
        },
      },
      style
    );

    expect(style[brand.action.base as string]).toBe('purple');
    expect(style[system.color.brand.border.critical as string]).toBe('crimson');
    expect(style[system.color.brand.border.caution as string]).toBe('coral');
  });

  it('applies neutral.main via the neutral brand bundle', () => {
    const style: Record<string, string> = {};
    writeBrandScopeSemantic({canvas: {palette: {neutral: {main: 'gray'}}}}, style);

    expect(style[brand.neutral.base as string]).toBe('gray');
    expect(style[brand.neutral600 as string]).toBe('gray');
  });
});

describe('writeNumericalTheme', () => {
  it('applies per-family bundles for multi-ramp numerical input', () => {
    const style: Record<string, string> = {};
    writeNumericalTheme(
      {
        brand: {
          primary: {'600': 'purple', '500': 'turquoise'},
          action: {base: 'purple', accent: 'turquoise'},
          critical: {'600': 'crimson'},
          caution: {'400': 'coral'},
          positive: {'600': 'darkolivegreen'},
        },
      },
      style,
      'brand'
    );

    expect(style[brand.action.base as string]).toBe('purple');
    expect(style[brand.action.accent as string]).toBe('turquoise');
    expect(style[brand.primary500 as string]).toBe('turquoise');
    expect(style[system.color.brand.border.critical as string]).toBe('crimson');
    expect(style[system.color.brand.border.caution as string]).toBe('coral');
    expect(style[system.color.brand.accent.positive as string]).toBe('darkolivegreen');
    // primary.500 is ramp-only — does not set focus
    expect(style[system.color.brand.focus.primary as string]).toBeUndefined();
  });

  it('writes focus from focus.primary independently of primary ramp', () => {
    const style: Record<string, string> = {};
    writeNumericalTheme(
      {
        brand: {primary: {'600': 'purple'}},
        focus: {primary: 'turquoise'},
      },
      style,
      'brand'
    );

    expect(style[brand.primary600 as string]).toBe('purple');
    expect(style[system.color.brand.focus.primary as string]).toBe('turquoise');
    expect(style[system.color.brand.border.primary as string]).toBe('turquoise');
    expect(style[brand.primary500 as string]).toBeUndefined();
  });

  it('lets explicit action keys win over primary[600] shortcut', () => {
    const style: Record<string, string> = {};
    writeNumericalTheme(
      {
        brand: {
          primary: {'600': 'purple'},
          action: {base: 'navy', dark: 'midnight', accent: 'turquoise'},
        },
      },
      style,
      'brand'
    );

    expect(style[brand.action.base as string]).toBe('navy');
    expect(style[brand.action.dark as string]).toBe('midnight');
    expect(style[brand.action.accent as string]).toBe('turquoise');
    expect(style[brand.primary600 as string]).toBe('purple');
  });

  it('writes lone critical[500] without overwriting critical600', () => {
    const style: Record<string, string> = {};
    writeNumericalTheme({brand: {critical: {'500': 'orange'}}}, style, 'brand');

    expect(style[brand.critical500 as string]).toBe('orange');
    expect(style[brand.critical600 as string]).toBeUndefined();
    expect(style[brand.error.base as string]).toBeUndefined();
  });

  it('writes lone caution[500] without overwriting caution400', () => {
    const style: Record<string, string> = {};
    writeNumericalTheme({brand: {caution: {'500': 'gold'}}}, style, 'brand');

    expect(style[brand.caution500 as string]).toBe('gold');
    expect(style[brand.caution400 as string]).toBeUndefined();
    expect(style[brand.alert.base as string]).toBeUndefined();
  });
});
