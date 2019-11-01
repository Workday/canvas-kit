export enum BreakpointKey {
  zero = 'zero',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type BreakpointFnParam = BreakpointKey | keyof typeof BreakpointKey;

export type CanvasBreakpoints = {
  zero: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export const breakpointKeys = ['zero', 's', 'm', 'l', 'xl'] as const;

export const breakpoints: CanvasBreakpoints = {
  zero: 0,
  s: 600,
  m: 960,
  l: 1280,
  xl: 1920,
};

const step = 0.5;

export function up(key: BreakpointFnParam) {
  const value = typeof breakpoints[key as BreakpointKey] === 'number' ? breakpoints[key] : key;
  return `@media (min-width:${value}px)`;
}

export function down(key: BreakpointFnParam) {
  const endIndex = breakpointKeys.indexOf(key as BreakpointKey) + 1;
  const upperbound = breakpoints[breakpointKeys[endIndex]];

  if (endIndex === breakpointKeys.length) {
    // xl down applies to all sizes
    return up(BreakpointKey.zero);
  }

  const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : 0;
  return `@media (max-width:${value - step}px)`;
}

export function between(start: BreakpointFnParam, end: BreakpointFnParam) {
  const endIndex = breakpointKeys.indexOf(end) + 1;

  if (endIndex === breakpointKeys.length) {
    return up(start);
  }

  return (
    `@media (min-width:${breakpoints[start]}px) and ` +
    `(max-width:${breakpoints[breakpointKeys[endIndex]] - step}px)`
  );
}

export function only(key: BreakpointFnParam) {
  return between(key, key);
}
