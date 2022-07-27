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
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    active: 'xs',
  };
  /* eslint-disable curly */
  if (breakpoints.isXs) breakpoints.active = 'xs';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  return breakpoints;
};

export const useBreakpointValues = (breakpointValues: {[x: string]: any}) => {
  const {active} = useBreakpoints();
  return breakpointValues[active];
};
