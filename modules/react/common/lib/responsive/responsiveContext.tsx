import * as React from 'react';
import {
  CanvasBreakpoints,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';

interface ResponsiveContextConfig {
  width: number;
  breakpoints: CanvasBreakpoints;
}

const ResponsiveContext = React.createContext({} as ResponsiveContextConfig);

interface ResponsiveContextProviderProps {
  children?: React.ReactNode;
  theme?: PartialEmotionCanvasTheme;
  width: number;
}

/**
 * This React Context Provider that will accept the width of the container from `useResizeObserver` hook (as you can see in the example below). In the example below, the `useResizeObserver` hook will measure the width of the container and set the width. The `ResponsiveContextProvider` will accept the width from `useResizeObserver`.
 *
 * @example
 * ```tsx
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {
  useResizeObserver, ResponsiveContextProvider, useResponsiveContainerStyles
} from '@workday/canvas-kit-react/common';

const ref = React.useRef(null);
const [containerWidth, setWidth] = React.useState(0);

useResizeObserver({
  ref: ref,
  onResize: data => {
    setWidth(data.containerWidth || 0);
  },
});

const containerResponsiveStyles = useResponsiveContainerStyles(
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
export const ResponsiveContextProvider = ({
  children,
  theme = {},
  width,
}: ResponsiveContextProviderProps) => {
  const canvasTheme = useTheme(theme);
  const breakpoints = canvasTheme.canvas.breakpoints.values;
  return (
    <ResponsiveContext.Provider value={{width, breakpoints}}>{children}</ResponsiveContext.Provider>
  );
};

/**
 * This function determines whether or not a container's width is within a certain breakpoint.
 */
export const isWithinBreakpoint = (width: number, min: number, max?: number) => {
  return width >= min && (!max || (max && width <= max - 0.5));
};

/**
 * This hook subscribes to the `ResponsiveContextProvider` and will determine whether the current `width` provided from `useResizeObserver` is within a particular `theme` breakpoint. In the example below, if the breakpoint falls in between `medium` (768px) and `large` (1024px), it will write `true`. Otherwise it will write `false`.
 *
 * @example
 * ```tsx
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {
  useResizeObserver, ResponsiveContextProvider, useResponsiveContainerStyles
} from '@workday/canvas-kit-react/common';

const ref = React.useRef(null);
const [containerWidth, setWidth] = React.useState(0);

useResizeObserver({
  ref: ref,
  onResize: data => {
    setWidth(data.containerWidth || 0);
  },
});

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
    <Container ref={ref}>
      <Flex>
        <Header>True or False</Header>
      </Flex>
    </Container>
  </ResponsiveContextProvider>
);
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
  const isZeroAndUp = width >= breakpoints.zero;
  const isSmallAndUp = width >= breakpoints.s;
  const isMediumAndUp = width >= breakpoints.m;
  const isLargeAndUp = width >= breakpoints.l;
  // scoped from the breakpoint and up (think of it as a max-width)
  const isSmallAndDown = width <= breakpoints.s;
  const isMediumAndDown = width <= breakpoints.m;
  const isLargeAndDown = width <= breakpoints.l;
  const isExtraLargeAndDown = width <= breakpoints.xl;

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
