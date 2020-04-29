import {CSSObject} from '@emotion/core';

/**
 * A utility to hide content normal users while still making accessible to screenreaders
 * See https://a11y-101.com/development/skip-link
 */
export const accessibleHide: CSSObject = {
  clip: 'rect(1px, 1px, 1px, 1px)', // Deprecated but still used by most browsers, clip-path will be taking its place soon.
  clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
  position: 'absolute',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: 0,
  border: 0,
};
