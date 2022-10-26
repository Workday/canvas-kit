import * as React from 'react';
import {
  CanvasBreakpoints,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';

/**
 * Interface to define `width` and `breakpoints` types.
 * `width: number`
 * `breakpoints: CanvasBreakpoints`
 */
export interface ResponsiveContextConfig {
  /**
   * The width of the container
   */
  width: number;
  /**
   * Canvas Kit Breakpoints
   * `s, m, l, xl`:
   * - `s: 320px`
   * - `m: 768px`
   * - `l: 1024px`
   * - `xl: 1440px`
   */
  breakpoints: CanvasBreakpoints;
}

/**
 * React Context with a type of `ResponsiveContextConfig`.
 *
 * ```tsx
 *  interface ResponsiveContextConfig {
 *    width: number;
 *    breakpoints: CanvasBreakpoints;
 *  }
 * ```
 */
export const ResponsiveContext = React.createContext({} as ResponsiveContextConfig);

/**
 * React Context Provider Props.
 *
 * ```tsx
 * interface ResponsiveContextProviderProps {
 *
 * `The width of the container`
 *
 * width: number;
 * children?: React.ReactNode;
 * theme?: PartialEmotionCanvasTheme;
 * }
 * ```
 */
export interface ResponsiveContextProviderProps {
  /**
   * The width of the container
   */
  width: number;
  /**
   * The children of the ResponsiveContext Provider
   */
  children?: React.ReactNode;
  /**
   * An optional Canvas theme object – You likely don't need to provide this.
   * If no theme is provided, the provider will use the theme object in CanvasProvider.
   */
  theme?: PartialEmotionCanvasTheme;
}

/**
 * This is a React context provider that will take a `width` and an
  optional `theme` prop and allow components to subscribe to context changes via the
  `useResponsiveContext` hook. See the [Responsive Styling Story](https://workday.github.io/canvas-kit/?path=/docs/hooks-and-utilities-responsive-styling--responsive-container) for a more in depth example.
 *
 * @example
 * ```tsx
import {Box} from '@workday/canvas-kit-react/layout';
import {
  ResponsiveContextProvider
} from '@workday/canvas-kit-react/common';

const [containerWidth, setWidth] = React.useState(0);

return (
  <ResponsiveContextProvider width={containerWidth}>
    <Box>
      Hello World
    </Box>
  </ResponsiveContextProvider>
);
```
 */
export const ResponsiveContextProvider = ({
  width,
  children,
  theme = {},
}: ResponsiveContextProviderProps) => {
  const canvasTheme = useTheme(theme);
  const breakpoints = canvasTheme.canvas.breakpoints.values;
  return (
    <ResponsiveContext.Provider value={{width, breakpoints}}>{children}</ResponsiveContext.Provider>
  );
};

/**
 * This function determines whether or not a container's width is within two values.
 */
export const isWithinBreakpoint = (width: number, min: number, max?: number) => {
  return width >= min && (!max || (max && width <= max - 0.5));
};

/**
 * This hook subscribes to the `ResponsiveContextProvider` and provides
  helpful utilities to determine whether the current width is within a particular
  [theme breakpoint](/getting-started/for-developers/resources/responsive-styling/#canvas-kit-breakpoint-sizes).
  Developers can use these utilities when creating container-based responsive styles.
 *
 * @example
 * ```tsx
import {Box} from '@workday/canvas-kit-react/layout';
import {
  ResponsiveContextProvider
} from '@workday/canvas-kit-react/common';

export const ResonsiveContext = () => {
  const [containerWidth, setWidth] = React.useState(0);

  const Header = ({children, ...props}) => {
    const {isMedium} = useResponsiveContext();
    return (
      <Text as="p" fontSize={20} fontWeight="bold" color="frenchVanilla100" margin={0} {...props}>
        {children}
        {isMedium ? 'true' : 'false'}
      </Text>
    );
  };

  return (
    <ResponsiveContextProvider width={containerWidth}>
      <Box>
        <Header>True or False</Header>
      </Box>
    </ResponsiveContextProvider>
  );
}
```
 */
export const useResponsiveContext = () => {
  const {width, breakpoints} = React.useContext(ResponsiveContext);
  // scoped strictly within the breakpoint range (think of it as the sum of min-width + max-width)
  const isZero = isWithinBreakpoint(width, 0, breakpoints.s);
  const isSmall = isWithinBreakpoint(width, breakpoints.s, breakpoints.m);
  const isMedium = isWithinBreakpoint(width, breakpoints.m, breakpoints.l);
  const isLarge = isWithinBreakpoint(width, breakpoints.l, breakpoints.xl);
  const isExtraLarge = isWithinBreakpoint(width, breakpoints.xl);
  // scoped from the breakpoint and up (think of it as a min-width)
  const isZeroAndUp = isWithinBreakpoint(width, breakpoints.zero);
  const isSmallAndUp = isWithinBreakpoint(width, breakpoints.s);
  const isMediumAndUp = isWithinBreakpoint(width, breakpoints.m);
  const isLargeAndUp = isWithinBreakpoint(width, breakpoints.l);
  // scoped from the breakpoint and up (think of it as a max-width)
  const isSmallAndDown = isWithinBreakpoint(width, breakpoints.zero, breakpoints.s);
  const isMediumAndDown = isWithinBreakpoint(width, breakpoints.zero, breakpoints.m);
  const isLargeAndDown = isWithinBreakpoint(width, breakpoints.zero, breakpoints.l);
  const isExtraLargeAndDown = isWithinBreakpoint(width, breakpoints.zero, breakpoints.xl);

  return {
    width,
    breakpoints,
    isZero,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isZeroAndUp,
    isSmallAndUp,
    isMediumAndUp,
    isLargeAndUp,
    isSmallAndDown,
    isMediumAndDown,
    isLargeAndDown,
    isExtraLargeAndDown,
  };
};
