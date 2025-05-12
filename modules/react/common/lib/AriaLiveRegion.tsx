import {createComponent} from './utils/components';
import {handleCsProp, CSProps} from '@workday/canvas-kit-styling';

export interface AriaLiveRegionProps extends CSProps {
  /**
   * set the [aria-atomic](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) attribute
   * @default true
   */
  'aria-atomic'?: true | false | 'true' | 'false';
  /**
   * set the [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute
   * @default 'polite'
   */
  'aria-live'?: 'polite' | 'assertive' | 'off';
  /**
   * set the live region's [aria role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
   * @default 'status'
   */
  role?: 'status' | 'alert' | 'log';
}

/**
 * A convenient wrapper for creating an [aria-live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
 */
export const AriaLiveRegion = createComponent('div')({
  displayName: 'AriaLiveRegion',
  Component: (
    {
      'aria-atomic': ariaAtomic = true,
      'aria-live': ariaLive = 'polite',
      role = 'status',
      ...elemProps
    }: AriaLiveRegionProps,
    ref,
    Element
  ) => {
    return (
      <Element
        ref={ref}
        aria-atomic={ariaAtomic}
        aria-live={ariaLive}
        role={role}
        {...handleCsProp(elemProps)}
      />
    );
  },
});
