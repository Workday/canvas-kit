import { useTheme } from "@workday/canvas-kit-react/common";
import type {
  FlexStyleProps,
  GridProps
} from "@workday/canvas-kit-react/layout";

export const breakpointResKeys = ["zero", "s", "m", "l", "xl"] as const;
export type BreakpointKeys = typeof breakpointResKeys[number];
// TODO: export just all the style props
type AllStyleProps = Omit<GridProps, "children" | "as"> & FlexStyleProps;
type ResponsiveCSSObject<T> = {
  [P in keyof T]: Partial<Record<BreakpointKeys, AllStyleProps>> &
    AllStyleProps;
};
type CSSObject<T> = {
  [P in keyof T]: AllStyleProps;
};

const isWithinBreakpoint = (width: number, min: number, max?: number) => {
  return width >= min && (!max || (max && width <= max - 1));
};

/**
 * `useResponsiveContainerStyles` - This is a hook that will allow you to create container-based
responsive styles with objects (as you can see in the example below). This hook accepts three
arguments with the third being optional (Style Objects, Container Width, Theme). In each style
object, there are five sizes that it will accept: `zero, small, medium, large and extra large`.
These sizes represent Canvas Kit breakpoints. The sizes will act
like `min-width`. For example, if you want to apply styles from `medium` and up, then you would
write those styles under `m`.
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

  function getStyles(key: BreakpointKeys) {
    const breakpointSize = breakpointResKeys.indexOf(key);
    for (let i = 0; i <= breakpointSize; i++) {
      const breakpointName = breakpointResKeys[i];
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

  const getSize = (width: number, breakpoints: any) => {
    const ranges: {[key: string ]: [number, number?]} = {
      'zero': [0, breakpoints.s],
      's': [breakpoints.s, breakpoints.m],
      'm': [breakpoints.m, breakpoints.l],
      'l': [breakpoints.l, breakpoints.xl],
      'xl': [breakpoints.xl]
    };
    const size = breakpointResKeys.find((size: BreakpointKeys) => isWithinBreakpoint(width, ...ranges[size]))

    return size as BreakpointKeys;
  }

  const size = getSize(width, breakpoints);
  getStyles(size);
  return responsiveStyles;
}
