import {isNumericalTheme, isPrimaryOnlyInput, resolveThemingScope} from '../lib/theming/types';

describe('isNumericalTheme', () => {
  it('is false for the deprecated shape', () => {
    expect(isNumericalTheme({canvas: {palette: {primary: {main: 'red'}}}})).toBe(false);
  });

  it('is true for the numerical shape', () => {
    expect(isNumericalTheme({brand: {primary: {'600': 'red'}}})).toBe(true);
  });

  it('is false for undefined and empty', () => {
    expect(isNumericalTheme(undefined)).toBe(false);
    expect(isNumericalTheme({} as any)).toBe(false);
  });
});

describe('resolveThemingScope', () => {
  it('defaults to brand for primary-only input', () => {
    expect(resolveThemingScope({canvas: {palette: {primary: {main: 'red'}}}})).toBe('brand');
  });

  it('promotes to full when extended ramp keys are provided', () => {
    expect(
      resolveThemingScope({canvas: {palette: {primary: {main: 'red', lightest: '#fff'}}}})
    ).toBe('full');
  });

  it('respects explicit themeScope', () => {
    expect(
      resolveThemingScope({themeScope: 'full', canvas: {palette: {primary: {main: 'red'}}}})
    ).toBe('full');
  });

  it('numerical shape defaults to brand even with extended ramp keys', () => {
    expect(resolveThemingScope({brand: {critical: {'600': 'red', '700': 'darkred'}}})).toBe(
      'brand'
    );
  });
});

describe('isPrimaryOnlyInput', () => {
  it('is true for semantic primary.main only', () => {
    expect(isPrimaryOnlyInput({canvas: {palette: {primary: {main: 'red'}}}})).toBe(true);
  });

  it('is false when common tokens are set', () => {
    expect(
      isPrimaryOnlyInput({
        canvas: {palette: {primary: {main: 'red'}, common: {focusOutline: 'teal'}}},
      })
    ).toBe(false);
  });
});
