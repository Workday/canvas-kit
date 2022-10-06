import { useTheme } from "@workday/canvas-kit-react/common";
import type {
  BoxProps,
  FlexStyleProps
} from "@workday/canvas-kit-react/layout";

export const breakpointResKeys = ["zero", "s", "m", "l", "xl"] as const;
export type BreakpointKeys = typeof breakpointResKeys[number];
// TODO: export just all the style props
type AllStyleProps = Omit<BoxProps, "children" | "as"> & FlexStyleProps;
type ResponsiveCSSObject<T> = {
  [P in keyof T]: Partial<Record<BreakpointKeys, AllStyleProps>> &
    AllStyleProps;
};
type CSSObject<T> = {
  [P in keyof T]: AllStyleProps;
};

const isWithinBreakpoint = (width: number, min: number, max?: number) => {
  if (width >= min && max === undefined) {
    return true;
  }
  if (width >= min && max && width <= max - 1) {
    return true;
  }
  return false;
};

export function useResponsiveContainerStyles<T extends ResponsiveCSSObject<T>>(
  styles: ResponsiveCSSObject<T>,
  width: number,
  theme = {}
) {
  const canvasTheme = useTheme(theme);
  const breakpoints = canvasTheme.canvas.breakpoints.values;
  // scoped strictly within the breakpoint range (think of it as a min-width + max-width)
  const isZero = isWithinBreakpoint(width, 0, breakpoints.s);
  const isSmall = isWithinBreakpoint(width, breakpoints.s, breakpoints.m);
  const isMedium = isWithinBreakpoint(width, breakpoints.m, breakpoints.l);
  const isLarge = isWithinBreakpoint(width, breakpoints.l, breakpoints.xl);
  const isExtraLarge = isWithinBreakpoint(width, breakpoints.xl);
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

  // eslint-disable-next-line default-case
  switch (true) {
    case isZero: {
      getStyles("zero");
      break;
    }
    case isSmall: {
      getStyles("s");
      break;
    }
    case isMedium: {
      getStyles("m");
      break;
    }
    case isLarge: {
      getStyles("l");
      break;
    }
    case isExtraLarge: {
      getStyles("xl");
      break;
    }
  }
  return responsiveStyles;
}
