import {createStencil} from '@workday/canvas-kit-styling';

/**
 * Progressive enhancement corner shape for rounded components. Browsers that don't support
 * `corner-shape` will fall back to the radius alone.
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/corner-shape
 */
export const cornerShapeStencil = createStencil({
  vars: {
    shape: '',
  },
  base: ({shape}) => ({
    borderRadius: shape,
    cornerShape: 'superellipse(1.1)',
  }),
});
