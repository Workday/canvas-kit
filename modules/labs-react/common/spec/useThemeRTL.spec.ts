import {css} from '@emotion/core';
import {renderHook} from '@testing-library/react-hooks';
import {useThemeRTL} from '../lib/theming';

describe('styles', () => {
  describe(`useThemeRLT hook`, () => {
    const LTRTheme = {
      canvas: {
        direction: 'ltr',
      },
    };
    const RTLTheme = {
      canvas: {
        direction: 'rtl',
      },
    };
    it('should return styles', () => {
      const expectedHeight = `100px`;
      const style = {
        height: expectedHeight,
      };
      const {result} = renderHook(() => useThemeRTL());
      const cssProp = result.current.themeRTL(style);
      expect(cssProp.height).toEqual(expectedHeight);
    });

    it('should flatten multiple styles', () => {
      const expectedHeight = `100px`;
      const expectedWidth = `50px`;
      const styleOne = {
        height: expectedHeight,
      };
      const styleTwo = {
        width: expectedWidth,
      };
      const {result} = renderHook(() => useThemeRTL());
      const cssProp = result.current.themeRTL(styleOne, styleTwo);
      expect(cssProp.height).toEqual(expectedHeight);
      expect(cssProp.width).toEqual(expectedWidth);
    });

    describe('LTR', () => {
      beforeEach(() => {
        (window as any).workday = {
          canvas: {
            theme: LTRTheme.canvas,
          },
        };
      });
      it('should NOT flip padding left to padding right when the direction is LTR', () => {
        const expectedPadding = `10px`;
        const style = {
          paddingLeft: expectedPadding,
        };

        const {result} = renderHook(() => useThemeRTL());
        const cssProp = result.current.themeRTL(style);
        expect(cssProp.paddingLeft).toEqual(expectedPadding);
      });
    });

    describe('RTL', () => {
      beforeEach(() => {
        (window as any).workday = {
          canvas: {
            theme: RTLTheme.canvas,
          },
        };
      });

      it('should NOT flip padding left to padding right when the direction is RTL but /* @noflip */ is included', () => {
        const expectedPadding = `10px /* @noflip */`;
        const style = {
          paddingLeft: expectedPadding,
        };

        const {result} = renderHook(() => useThemeRTL());
        const cssProp = result.current.themeRTL(style);
        expect(cssProp.paddingLeft).toEqual(expectedPadding);
      });

      it('should flip padding left to padding right the direction is RTL support', () => {
        const expectedPadding = `10px`;
        const style = {
          paddingLeft: expectedPadding,
        };
        const {result} = renderHook(() => useThemeRTL());
        const cssProp = result.current.themeRTL(style);
        expect(cssProp.paddingRight).toEqual(expectedPadding);
      });
    });
  });
});
