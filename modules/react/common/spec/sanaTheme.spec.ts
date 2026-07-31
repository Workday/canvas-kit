import {base, brand} from '@workday/canvas-tokens-web';

import {canvasThemeToCssVars} from '../lib/CanvasProvider';
import {defaultCanvasTheme} from '../lib/theming';
import {sanaCanvasNumericalTheme, sanaCanvasProviderTheme} from '../lib/theming/sanaTheme';

describe('sanaCanvasNumericalTheme', () => {
  it('references Sana brand CSS variables instead of defaultCanvasTheme literals', () => {
    expect(sanaCanvasNumericalTheme.brand?.neutral?.['600']).toBe(`var(${brand.neutral600})`);
    expect(sanaCanvasNumericalTheme.brand?.action?.base).toBe(`var(${brand.neutral975})`);
    expect(sanaCanvasNumericalTheme.brand?.action?.accent).toBe(`var(${base.neutral0})`);
    expect(sanaCanvasNumericalTheme.brand?.neutral?.['600']).not.toBe(
      defaultCanvasTheme.palette.neutral.main
    );
  });

  it('writes brand tokens when passed to canvasThemeToCssVars', () => {
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(Object.keys(style).length).toBeGreaterThan(0);
    expect(style[brand.neutral600 as any]).toBe(`var(${brand.neutral600})`);
    expect(style[brand.action.base as any]).toBe(`var(${brand.neutral975})`);
  });

  it('writes Sana extended neutral ramp keys', () => {
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(style['--cnvs-brand-neutral-150' as any]).toBe('var(--cnvs-brand-neutral-150)');
    expect(style['--cnvs-brand-neutral-850' as any]).toBe('var(--cnvs-brand-neutral-850)');
    expect(style['--cnvs-brand-neutral-a150' as any]).toBe('var(--cnvs-brand-neutral-a150)');
  });
});
