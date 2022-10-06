import * as React from 'react';
import {
  CanvasBreakpoints,
  PartialEmotionCanvasTheme,
  useTheme,
} from '@workday/canvas-kit-react/common';

export interface ResponsiveContextConfig {
  width: number;
  breakpoints: CanvasBreakpoints;
}

export const ResponsiveContext = React.createContext({} as ResponsiveContextConfig);

export interface ResponsiveContextProviderProps {
  children?: React.ReactNode;
  theme?: PartialEmotionCanvasTheme;
  width: number;
}

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

const isWithinBreakpoint = (width: number, min: number, max?: number) => {
  if (width >= min && max === undefined) {
    return true;
  }
  if (width >= min && max && width <= max - 1) {
    return true;
  }
  return false;
};

export const useResponsiveContext = () => {
  const {width, breakpoints} = React.useContext(ResponsiveContext);
  // scoped strictly within the breakpoint range (think of it as a min-width + max-width)
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
