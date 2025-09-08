import {createStyles, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import {createComponent} from './utils/components';

/**
 * A utility to visually hide content, while still making accessible to screen readers
 * See https://a11y-101.com/development/skip-link
 */
export const accessibleHide = {
  clip: 'rect(1px, 1px, 1px, 1px)', // Deprecated but still used by most browsers, clip-path will be taking its place soon.
  clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px)',
  position: 'absolute',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  height: '1px',
  minHeight: '1px',
  width: '1px',
  minWidth: '1px',
  margin: '-1px',
  padding: 0,
  border: 0,
} as const;

export const accessibleHideStyles = createStyles(accessibleHide);

/**
 * A convenient component wrapper to visually hide content, while still making it accessible to screen readers
 */
export const AccessibleHide = createComponent('div')({
  displayName: 'AccessibleHide',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, accessibleHideStyles)} />;
  },
});
