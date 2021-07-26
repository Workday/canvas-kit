/**
 * Generates a media queries given a set of named breakpoints
 * @param {Object} breakpoints Object of key-value pairs where the key is the name of
 * the breakpoint size and the value is the min-width of that breakpoint
 * @returns {Object} A set of CSS media queries for each breakpoint size
 */
export const makeMq = (breakpoints: {[key: string]: number}) => {
  const mq: {[key: string]: string} = {};

  Object.keys(breakpoints).forEach(key => {
    mq[key] = `@media (min-width: ${breakpoints[key]}px)`;
  });

  return mq;
};
