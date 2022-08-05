import {useEffect, useState} from 'react';

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
  const breakpoints = {
    zero: useMediaQuery('(min-width: 0)'),
    isSm: useMediaQuery('(min-width: 320px)'),
    isMd: useMediaQuery('(min-width: 768px)'),
    isLg: useMediaQuery('(min-width: 1024px)'),
    isXl: useMediaQuery('(min-width: 1440px)'),
    active: 'zero',
  };
  /* eslint-disable curly */
  if (breakpoints.zero) breakpoints.active = 'zero';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  if (breakpoints.isXl) breakpoints.active = 'xl';
  return breakpoints;
};

export const useBreakpointValues = (breakpointValues: {[x: string]: any}) => {
  const {active} = useBreakpoints();
  return breakpointValues[active];
};
