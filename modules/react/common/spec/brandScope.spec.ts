import {brand, system} from '@workday/canvas-tokens-web';

import {applyPrimaryBrandBundle, writeIndependentBrandTokens} from '../lib/theming/brandScope';

describe('applyPrimaryBrandBundle', () => {
  it('writes button and selected tokens but not focus', () => {
    const style: Record<string, string> = {};
    applyPrimaryBrandBundle('red', style);

    expect(style[brand.action.base as string]).toBe('red');
    expect(style[brand.primary600 as string]).toBe('red');
    expect(style[system.color.brand.accent.primary as string]).toBe('red');
    expect(style[system.color.brand.fg.selected as string]).toBeDefined();
    expect(style[system.color.brand.surface.selected as string]).toBeDefined();
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
