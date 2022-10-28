import { useTheme, breakpointKeys, CanvasBreakpoints } from "@workday/canvas-kit-react/common";
import type {AllStyleProps} from "@workday/canvas-kit-react/layout";
import {isWithinBreakpoint} from '../utils/isWithinBreakpoint'

export type BreakpointKeys = typeof breakpointKeys[number];

type ResponsiveCSSObject<T> = {
  [P in keyof T]: Partial<Record<BreakpointKeys, AllStyleProps>> &
    AllStyleProps;
};
type CSSObject<T> = {
  [P in keyof T]: AllStyleProps;
};

// Takes in CanvasBreakpoint keys and returns current breakpoint key. Current breakpoint key is determined by the `width` of the container

const getSize = (width: number, breakpoints: CanvasBreakpoints) => {
  const ranges: {[key: string ]: [number, number?]} = {
    'zero': [0, breakpoints.s],
    's': [breakpoints.s, breakpoints.m],
    'm': [breakpoints.m, breakpoints.l],
    'l': [breakpoints.l, breakpoints.xl],
    'xl': [breakpoints.xl]
  };
  return breakpointKeys.find((size: BreakpointKeys) => isWithinBreakpoint(width, ...ranges[size])) || 'zero';
}

// Returns responsive style objects that are within the current CanvasBreakpoint size

function getStyles<T>(key: BreakpointKeys, styles: ResponsiveCSSObject<T>) {
  const responsiveStyles = {} as CSSObject<T>;
  const breakpointSize = breakpointKeys.indexOf(key);
  for (let i = 0; i <= breakpointSize; i++) {
    const breakpointName = breakpointKeys[i];
    // property is key of the style object
    Object.keys(styles).forEach((property) => {
      const { zero, s, m, l, xl, ...base } = styles[property as keyof T];
      const currentBreakpointStyles =
        styles[property as keyof T][breakpointName] ?? {};
      const previousBreakpointStyles = responsiveStyles[property as keyof T] ?? {};
      responsiveStyles[property as keyof T] = {
        ...base,
        ...previousBreakpointStyles,
        ...currentBreakpointStyles
      };
    });
  }
  return responsiveStyles;
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

const ref = React.useRef(null);
const [containerWidth, setContainerWidth] = React.useState(0);

useResizeObserver({
  ref: ref,
  onResize: data => {
    setWidth(data.width || 0);
  },
});

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
    <Box ref={ref}>
      <Flex {...containerResponsiveStyles.flex}>
        <Box {...containerResponsiveStyles.box}>Hello World</Box>
      </Flex>
    </Box>
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

  const size = getSize(width, breakpoints);
  return getStyles(size, styles);
}
