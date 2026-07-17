import {renderHook} from '@testing-library/react';

import {brand, system} from '@workday/canvas-tokens-web';

import {useCanvasThemeToCssVars} from '../lib/CanvasProvider';

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
});
