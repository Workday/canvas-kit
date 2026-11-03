import {renderHook, waitFor} from '@testing-library/react';
import React from 'react';

import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

import {usePopupStack} from '../lib/hooks/usePopupStack';

describe('usePopupStack', () => {
  afterEach(() => {
    // Clean up any popup containers created during tests
    document.querySelectorAll('.popup-stack').forEach(el => el.remove());
  });

  describe('theme forwarding', () => {
    it('should forward numerical theme CSS variables to popup container', async () => {
      const numericalTheme = {
        brand: {
          primary: {
            '600': '#123456',
            '700': '#234567',
          },
        },
      };

      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={numericalTheme}>{children}</CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      const container = result.current.current;
      expect(container).toBeTruthy();

      // Wait for the effect to apply styles
      await waitFor(() => {
        // Check that the container has the correct CSS variables
        const styles = container?.style;
        if (styles) {
          // The numerical theme should set brand variables
          // Numerical themes use the key names directly (600, 700, etc.)
          const primary600 = styles.getPropertyValue('--cnvs-brand-primary-600');
          const primary700 = styles.getPropertyValue('--cnvs-brand-primary-700');
          expect(primary600).toBe('#123456');
          expect(primary700).toBe('#234567');
        }
      });
    });

    it('should forward sanaCanvasProviderTheme CSS variables to popup container', async () => {
      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={sanaCanvasProviderTheme}>{children}</CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      const container = result.current.current;
      expect(container).toBeTruthy();

      // Wait for the effect to apply styles
      await waitFor(() => {
        const styles = container?.style;
        if (styles) {
          // Sana only redefines primary A300 (not 600) — writing primary-600 would be a
          // var() self-reference cycle. The neutral ramp and system.color.brand.* overrides
          // are forwarded as var() references to the underlying palette.
          expect(styles.getPropertyValue('--cnvs-brand-primary-600')).toBe('');
          expect(styles.getPropertyValue('--cnvs-brand-primary-a300')).toBe(base.sana.blueA300);
          expect(styles.getPropertyValue('--cnvs-brand-neutral-600')).toBe(
            `var(${base.neutral600})`
          );
          expect(styles.getPropertyValue('--cnvs-sys-color-brand-accent-primary')).toBe(
            'var(--cnvs-brand-neutral-975)'
          );
          // `action` and selected-state tokens are not set by the preset — Sana doesn't define
          // them, so they resolve from the root theme rather than being pinned here.
          expect(styles.getPropertyValue('--cnvs-brand-action-base')).toBe('');
          expect(styles.getPropertyValue('--cnvs-sys-color-brand-fg-selected')).toBe('');
          expect(styles.getPropertyValue('--cnvs-sys-color-brand-surface-selected')).toBe('');
        }
      });
    });

    it('should forward data-theme to the popup container so scoped token CSS applies', async () => {
      // Token stylesheets scope variables to `[data-theme="..."]`. Portals render outside the
      // CanvasProvider wrapper, so the attribute must be copied for the whole theme (palette,
      // shape, depth, type) to resolve — inline brand vars alone don't cover it.
      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
          {children}
        </CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      await waitFor(() => {
        expect(result.current.current?.getAttribute('data-theme')).toBe('sana-canvas');
      });
    });

    it('should not set data-theme on the popup container when the provider has none', async () => {
      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={sanaCanvasProviderTheme}>{children}</CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      await waitFor(() => {
        expect(result.current.current?.hasAttribute('data-theme')).toBe(false);
      });
    });

    it('should remove data-theme from the popup container when the provider value is cleared', async () => {
      let dataTheme: string | undefined = 'sana-canvas';
      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider
          theme={sanaCanvasProviderTheme}
          {...(dataTheme ? {'data-theme': dataTheme} : {})}
        >
          {children}
        </CanvasProvider>
      );

      const {result, rerender} = renderHook(() => usePopupStack(), {wrapper});

      await waitFor(() => {
        expect(result.current.current?.getAttribute('data-theme')).toBe('sana-canvas');
      });

      dataTheme = undefined;
      rerender();

      await waitFor(() => {
        expect(result.current.current?.hasAttribute('data-theme')).toBe(false);
      });
    });

    it('should inherit data-theme from an outer provider through nested providers', async () => {
      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider data-theme="sana-canvas">
          <CanvasProvider theme={sanaCanvasProviderTheme}>{children}</CanvasProvider>
        </CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      await waitFor(() => {
        expect(result.current.current?.getAttribute('data-theme')).toBe('sana-canvas');
      });
    });

    it('should forward legacy palette theme CSS variables to popup container', async () => {
      const legacyTheme = {
        canvas: {
          palette: {
            primary: {
              main: '#FF00FF',
            },
          },
        },
      };

      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={legacyTheme}>{children}</CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      const container = result.current.current;
      expect(container).toBeTruthy();

      // Wait for the effect to apply styles
      await waitFor(() => {
        // Check that the container has the correct CSS variables
        const styles = container?.style;
        if (styles) {
          // The legacy theme should set brand variables based on the primary color
          // Legacy themes with brand scope set the primary-base variable
          const primaryBase = styles.getPropertyValue('--cnvs-brand-primary-base');
          expect(primaryBase).toBe('#FF00FF');
        }
      });
    });

    it('should not set CSS variables when no theme is provided', () => {
      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider>{children}</CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      const container = result.current.current;
      expect(container).toBeTruthy();

      // Check that no brand CSS variables are set
      const styles = container?.style;
      if (styles) {
        // When no theme is provided, no brand variables should be forced
        expect(styles.getPropertyValue('--cnvs-brand-primary-base')).toBe('');
      }
    });

    it('should not forward non-CSS-variable styles from CanvasProvider to the popup', async () => {
      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={{brand: {primary: {'600': '#123456'}}}} style={{padding: '16px'}}>
          {children}
        </CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});
      const container = result.current.current;

      await waitFor(() => {
        expect(container?.style.getPropertyValue('--cnvs-brand-primary-600')).toBe('#123456');
      });

      expect(container?.style.padding).toBe('');
    });

    it('should merge styles from nested CanvasProviders', async () => {
      const parentTheme = {
        brand: {
          primary: {
            '600': '#111111',
          },
        },
      };

      const childTheme = {
        brand: {
          critical: {
            '600': '#FF0000',
          },
        },
      };

      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={parentTheme}>
          <CanvasProvider theme={childTheme}>{children}</CanvasProvider>
        </CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      const container = result.current.current;
      expect(container).toBeTruthy();

      // Wait for the effect to apply styles
      await waitFor(() => {
        // Check that the container has variables from both themes
        const styles = container?.style;
        if (styles) {
          // Should have both primary (from parent) and critical (from child) variables
          // Numerical themes use the key names directly (600, etc.)
          const primary600 = styles.getPropertyValue('--cnvs-brand-primary-600');
          const critical600 = styles.getPropertyValue('--cnvs-brand-critical-600');
          expect(primary600).toBe('#111111');
          expect(critical600).toBe('#FF0000');
        }
      });
    });

    it('should not force classic defaults when using numerical themes', () => {
      const numericalTheme = {
        brand: {
          primary: {
            '600': '#987654',
          },
        },
      };

      const wrapper = ({children}: {children: React.ReactNode}) => (
        <CanvasProvider theme={numericalTheme}>{children}</CanvasProvider>
      );

      const {result} = renderHook(() => usePopupStack(), {wrapper});

      const container = result.current.current;
      expect(container).toBeTruthy();

      // Check that classic defaults are NOT forced onto the container
      const styles = container?.style;
      if (styles) {
        // Should not have classic blue/red/amber overrides when not explicitly set
        // Instead, should only have what the numerical theme specifies
        const allProperties = Array.from({length: styles.length}, (_, i) => styles.item(i)).filter(
          prop => prop.startsWith('--cnvs-')
        );

        // Check that we're not forcing all the classic variables
        // The numerical theme only set primary, so we shouldn't have forced other colors
        const hasUnrelatedColors = allProperties.some(
          prop =>
            (prop.includes('--cnvs-base-blue') ||
              prop.includes('--cnvs-base-red') ||
              prop.includes('--cnvs-base-amber')) &&
            !prop.includes('primary')
        );
        expect(hasUnrelatedColors).toBe(false);
      }
    });
  });
});
