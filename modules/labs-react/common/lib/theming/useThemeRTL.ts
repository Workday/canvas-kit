import {
  convertToStaticStates,
  CanvasTheme,
  useIsRTL,
  useTheme,
} from '@workday/canvas-kit-react/common';
import {CSSProperties} from '@workday/canvas-kit-react/tokens';
import {useMemo} from 'react';
import rtlCSSJS from 'rtl-css-js';

export type ComponentStyles = Record<string, CSSProperties>;
type ThemeWithStaticStates = CanvasTheme & {_staticStates?: boolean};

const getDirectionalStyles = (isRTL: boolean, ...styles: CSSProperties[]) => {
  return isRTL ? rtlCSSJS(styles) : styles;
};

const getConvertedStyles = (shouldConvert: boolean, styles: CSSProperties): CSSProperties => {
  return shouldConvert ? convertToStaticStates(styles) ?? styles : styles;
};

/**
 * A helpful hook for supporting bidirectional styles.
 * * Read below for more detail or [view the docs](https://github.com/Workday/canvas-kit/blob/master/modules/labs-react/common/README.md#useThemeRTL).
 *
 * @returns
 * * `themeRTL` - a function to transform bidirectional styles
 * * `theme` - the Canvas theme object (optional, provided for convenience)
 *
 * `themeRTL` allows you to support bidirectionality with a single set of styles and pass them along to a component.
 * It accepts CSS object styles and transforms CSS attributes based on the content direction set in the theme (LTR or RTL).
 *
 * @example
 * import { type } from '@workday/canvas-kit-react/tokens';
 * import { useThemeRTL } from '@workday/canvas-kit-labs-react/common';
 *
 * const ErrorText: React.FC = (props) => {
 *   const { themeRTL, theme } = useThemeRTL();
 *   // `borderLeft` will be converted to `borderRight`
 *   // when the theme direction is `RTL`.
 *   // All other styles will remain unchanged.
 *   const errorTextStyles = themeRTL({
 *     ...type.levels.subtext.medium,
 *     color: theme.canvas.palette.error.main,
 *     borderLeft: `solid 2px ${theme.canvas.palette.error.main}`,
 *   });
 *
 *   return <span css={errorTextStyles} {...props} />;
 * }
 */
export function useThemeRTL() {
  const theme = useTheme();
  const direction = useIsRTL(theme);
  const shouldConvert = (theme.canvas as ThemeWithStaticStates)._staticStates ?? false;

  const themeRTL = useMemo(() => {
    return (...cssObject: CSSProperties[]) => {
      const styles = getDirectionalStyles(direction, ...cssObject);
      return styles.reduce((first, second) => {
        const convertedFirst = shouldConvert ? getConvertedStyles(shouldConvert, first) : first;
        const convertedSecond = shouldConvert ? getConvertedStyles(shouldConvert, second) : second;

        return {...convertedFirst, ...convertedSecond};
      }, {});
    };
  }, [direction, shouldConvert]);

  return {themeRTL, theme};
}
