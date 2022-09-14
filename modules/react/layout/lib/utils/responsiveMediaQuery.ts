/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react';
import {breakpoints} from '@workday/canvas-kit-react/common';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event: {matches: boolean | ((prevState: boolean) => boolean)}) =>
        setMatches(event.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return matches;
};

export const useBreakpoints = () => {
  const resPoints = {
    zero: useMediaQuery(`(min-width: ${breakpoints.zero}px)`),
    isSm: useMediaQuery(`(min-width: ${breakpoints.s}px)`),
    isMd: useMediaQuery(`(min-width: ${breakpoints.m}px)`),
    isLg: useMediaQuery(`(min-width: ${breakpoints.l}px)`),
    isXl: useMediaQuery(`(min-width: ${breakpoints.xl}px)`),
    active: 'zero',
  };
  /* eslint-disable curly */
  if (resPoints.zero) resPoints.active = 'zero';
  if (resPoints.isSm) resPoints.active = 'sm';
  if (resPoints.isMd) resPoints.active = 'md';
  if (resPoints.isLg) resPoints.active = 'lg';
  if (resPoints.isXl) resPoints.active = 'xl';
  return resPoints;
};

export const useBreakpointValues = (breakpointValues: {[x: string]: any}) => {
  const {active} = useBreakpoints();
  return breakpointValues[active];
};
