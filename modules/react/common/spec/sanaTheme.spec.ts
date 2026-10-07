import {base, brand} from '@workday/canvas-tokens-web';

import {canvasThemeToCssVars} from '../lib/CanvasProvider';
import {defaultCanvasTheme} from '../lib/theming';
import {sanaCanvasNumericalTheme, sanaCanvasProviderTheme} from '../lib/theming/sanaTheme';

describe('sanaCanvasNumericalTheme', () => {
  it('references Sana base-palette CSS variables instead of defaultCanvasTheme literals', () => {
    expect(sanaCanvasNumericalTheme.brand?.neutral?.['600']).toBe(`var(${base.neutral600})`);
    expect(sanaCanvasNumericalTheme.brand?.neutral?.['600']).not.toBe(
      defaultCanvasTheme.palette.neutral.main
    );
  });

  it('never references the same CSS variable name it writes to (would create a var() cycle)', () => {
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    Object.entries(style).forEach(([key, value]) => {
      if (key.startsWith('--') && typeof value === 'string') {
        expect(value).not.toBe(`var(${key})`);
      }
    });
  });

  it("only writes the A300 step of primary/critical/caution/positive (Sana's one distinct value)", () => {
    expect(Object.keys(sanaCanvasNumericalTheme.brand?.primary ?? {})).toEqual(['A300']);
    expect(Object.keys(sanaCanvasNumericalTheme.brand?.critical ?? {})).toEqual(['A300']);
    expect(Object.keys(sanaCanvasNumericalTheme.brand?.caution ?? {})).toEqual(['A300']);
    expect(Object.keys(sanaCanvasNumericalTheme.brand?.positive ?? {})).toEqual(['A300']);

    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(style['--cnvs-brand-primary-a300' as any]).toBe(base.sana.blueA300);
    expect(style['--cnvs-brand-critical-a300' as any]).toBe(base.sana.redA300);
    expect(style['--cnvs-brand-caution-a300' as any]).toBe(base.sana.amberA300);
    expect(style['--cnvs-brand-positive-a300' as any]).toBe(base.sana.greenA300);
  });

  it('writes brand tokens when passed to canvasThemeToCssVars', () => {
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(Object.keys(style).length).toBeGreaterThan(0);
    expect(style[brand.neutral600 as any]).toBe(`var(${base.neutral600})`);
  });

  it('writes Sana extended neutral ramp keys from the base palette', () => {
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(style['--cnvs-brand-neutral-150' as any]).toBe(base.sana.neutral150);
    expect(style['--cnvs-brand-neutral-850' as any]).toBe(base.sana.neutral850);
    expect(style['--cnvs-brand-neutral-a150' as any]).toBe(base.sana.neutralA150);
    expect(style['--cnvs-brand-neutral-a850' as any]).toBe(base.sana.neutralA850);
  });

  it('writes the full neutral alpha ramp through A975 (not just up to A200)', () => {
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(style[brand.neutralA300 as any]).toBe(`var(${base.neutralA300})`);
    expect(style[brand.neutralA900 as any]).toBe(`var(${base.neutralA900})`);
    expect(style[brand.neutralA975 as any]).toBe(`var(${base.neutralA975})`);
  });

  it('does not write brand.action.* — Sana does not define it; it derives from the root theme', () => {
    expect(sanaCanvasNumericalTheme.brand?.action).toBeUndefined();
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(style[brand.action.base as any]).toBeUndefined();
    expect(style[brand.action.darker as any]).toBeUndefined();
    expect(style[brand.action.accent as any]).toBeUndefined();
  });

  it('does not write selected.* — Sana does not define it; it derives from the root theme', () => {
    expect(sanaCanvasNumericalTheme.selected).toBeUndefined();
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(style['--cnvs-sys-color-brand-fg-selected' as any]).toBeUndefined();
    expect(style['--cnvs-sys-color-brand-surface-selected' as any]).toBeUndefined();
  });

  it('forwards accent.primary/action and fg.primary.default/strong for portal parity', () => {
    // Sana's stylesheet redefines these four `system.color.brand.*` tokens, so popups outside
    // `[data-theme="sana-canvas"]`'s reach need the override too.
    const {style} = canvasThemeToCssVars(sanaCanvasProviderTheme, {});
    expect(style['--cnvs-sys-color-brand-accent-primary' as any]).toBe(`var(${brand.neutral975})`);
    expect(style['--cnvs-sys-color-brand-accent-action' as any]).toBe(`var(${brand.neutral975})`);
    expect(style['--cnvs-sys-color-brand-fg-primary-default' as any]).toBe(
      `var(${brand.neutralA900})`
    );
    expect(style['--cnvs-sys-color-brand-fg-primary-strong' as any]).toBe(
      `var(${brand.neutralA950})`
    );
  });
});
