import { useTheme, isWithinBreakpoint, breakpointKeys } from "@workday/canvas-kit-react/common";
import type {
  FlexStyleProps,
  GridProps
} from "@workday/canvas-kit-react/layout";

export type BreakpointKeys = typeof breakpointKeys[number];

// TODO: export just all the style props
type AllStyleProps = FlexStyleProps & GridProps;
type ResponsiveCSSObject<T> = {
  [P in keyof T]: Partial<Record<BreakpointKeys, AllStyleProps>> &
    AllStyleProps;
};
type CSSObject<T> = {
  [P in keyof T]: AllStyleProps;
};

const getSize = (width: number, breakpoints: any) => {
  const ranges: {[key: string ]: [number, number?]} = {
    'zero': [0, breakpoints.s],
    's': [breakpoints.s, breakpoints.m],
    'm': [breakpoints.m, breakpoints.l],
    'l': [breakpoints.l, breakpoints.xl],
    'xl': [breakpoints.xl]
  };
  const size = breakpointKeys.find((size: BreakpointKeys) => isWithinBreakpoint(width, ...ranges[size]))

  return size as BreakpointKeys;
}

/**
 * useResponsiveContainerStyles
 *
 * ---
 *
 * This hook allows you to create container-based responsive styles with objects.
 * It accepts two or three arguments: the responsive style object, the container width, and (optionally) the theme object.
 * Each style object accepts five breakpoint keys: "zero", "s", "m", "l", and "xl".
 * The sizes will act like `min-width`. For example, if you want to apply styles from `medium` and up, then you would write those styles under `m`.
 *
 * @example
 * ```tsx
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {
  useResponsiveStyles,
} from '@workday/canvas-kit-react/common';

const containerResponsiveStyles = useResponsiveStyles(
  {
    flex: {
      flexDirection: 'column',
      padding: 'm',
      depth: 1,
      borderRadius: 'l',
      zero: {
        backgroundColor: 'Red',
      },
      s: {
        backgroundColor: 'Orange',
      },
      m: {
        backgroundColor: 'Yellow',
      },
      l: {
        backgroundColor: 'Green',
      },
      xl: {
        backgroundColor: 'Blue',
      },
    },
    box: {
      padding: 's',
    },
  },
  containerWidth
);

return (
  <ResponsiveContextProvider width={containerWidth}>
    <Box ref={ref}>
      <Flex {...containerResponsiveStyles.flex}>
        <Box {...containerResponsiveStyles.box}>Hello World</Box>
      </Flex>
    </Box>
  </ResponsiveContextProvider>
);
```
 */

export function useResponsiveContainerStyles<T extends ResponsiveCSSObject<T>>(
  styles: ResponsiveCSSObject<T>,
  width: number,
  theme = {}
) {
  const canvasTheme = useTheme(theme);
  const breakpoints = canvasTheme.canvas.breakpoints.values;
  const responsiveStyles = {} as CSSObject<T>;

  const getStyles = (key: BreakpointKeys) => {
    const breakpointSize = breakpointKeys.indexOf(key);
    for (let i = 0; i <= breakpointSize; i++) {
      const breakpointName = breakpointKeys[i];
      // classname is key of the style object
      Object.keys(styles).forEach((classname) => {
        const { zero, s, m, l, xl, ...base } = styles[classname as keyof T];
        const breakpointStyles =
          styles[classname as keyof T][breakpointName] ?? {};
        const existingStyles = responsiveStyles[classname as keyof T] ?? {};
        responsiveStyles[classname as keyof T] = {
          ...base,
          ...existingStyles,
          ...breakpointStyles
        };
      });
    }
  }

  const size = getSize(width, breakpoints);
  getStyles(size);
  return responsiveStyles;
}
