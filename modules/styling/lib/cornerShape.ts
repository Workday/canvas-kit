/**
 * Progressive enhancement corner shape for rounded components. Place after `borderRadius` in style
 * definitions — browsers that don't support `corner-shape` will fall back to the radius alone.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/corner-shape
 */
export const cornerShapeStyles = {
  cornerShape: 'superellipse(1.1)',
} as const;
