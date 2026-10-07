import {renderHook} from '@testing-library/react';

import {brand, system} from '@workday/canvas-tokens-web';

import {canvasThemeToCssVars, useCanvasThemeToCssVars} from '../lib/CanvasProvider';

describe('canvasThemeToCssVars', () => {
  it('does not write CSS variables when theme is undefined', () => {
    const {style} = canvasThemeToCssVars(undefined, {});
    expect(Object.keys(style)).toHaveLength(0);
  });
});

describe('useCanvasThemeToCssVars — brand scope', () => {
  it('writes brand numerical CSS variables directly', () => {
    const {result} = renderHook(() =>
      useCanvasThemeToCssVars({brand: {primary: {'600': 'rebeccapurple'}}}, {})
    );
    expect(result.current.style[brand.primary600 as any]).toBe('rebeccapurple');
    expect(result.current.style[brand.action.base as any]).toBe('rebeccapurple');
  });

  it('does not override focus when only primary is set', () => {
    const {result} = renderHook(() =>
      useCanvasThemeToCssVars({canvas: {palette: {primary: {main: 'red'}}}}, {})
    );
    expect(result.current.style[brand.action.base as any]).toBe('red');
    expect(result.current.style[system.color.brand.focus.primary as any]).toBeUndefined();
    expect(
      result.current.style[system.color.brand.surface.primary?.default as any]
    ).toBeUndefined();
  });

  it('writes focus independently from primary', () => {
    const {result} = renderHook(() =>
      useCanvasThemeToCssVars(
        {canvas: {palette: {primary: {main: 'red'}, common: {focusOutline: 'teal'}}}},
        {}
      )
    );
    expect(result.current.style[brand.action.base as any]).toBe('red');
    expect(result.current.style[system.color.brand.focus.primary as any]).toBe('teal');
  });

  it('writes numerical focus.primary without touching primary500', () => {
    const {result} = renderHook(() =>
      useCanvasThemeToCssVars({brand: {primary: {'600': 'red'}}, focus: {primary: 'teal'}}, {})
    );
    expect(result.current.style[brand.primary600 as any]).toBe('red');
    expect(result.current.style[system.color.brand.focus.primary as any]).toBe('teal');
    expect(result.current.style[brand.primary500 as any]).toBeUndefined();
  });

  it('writes error and alert tokens for brand-scope error/alert main', () => {
    const {result} = renderHook(() =>
      useCanvasThemeToCssVars(
        {
          canvas: {
            palette: {
              error: {main: 'crimson'},
              alert: {main: 'coral'},
            },
          },
        },
        {}
      )
    );
    expect(result.current.style[system.color.brand.border.critical as any]).toBe('crimson');
    expect(result.current.style[system.color.brand.border.caution as any]).toBe('coral');
    expect(result.current.style[system.color.brand.focus.caution?.inner as any]).toBe('coral');
  });
});
