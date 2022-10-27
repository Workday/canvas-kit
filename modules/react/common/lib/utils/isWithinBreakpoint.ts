/**
 * This function determines whether or not a container's width is within two values.
 */
export const isWithinBreakpoint = (width: number, min: number, max?: number) => {
  return width >= min && (!max || (max && width <= max - 0.5));
};
