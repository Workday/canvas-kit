import * as React from 'react';
import uuid from 'uuid/v4';

/**
 * Convenience hook for creating components with tooltips. It will return an object of properties to mix
 * into a target, popper and tooltip
 */
export function useTooltip<T extends HTMLElement = HTMLElement>({
  type = 'label',
  titleText = '',
}: {
  /**
   * Determines the tooltip type for accessibility.
   * Use `label` for icons or if tooltip text is the same as the target.
   * Use `describe` if the tooltip has additional information about the target
   * (e.g. )
   */
  type?: 'label' | 'describe';
  titleText?: string;
} = {}) {
  const [isOpen, setOpen] = React.useState(false);
  const [ref, setRef] = React.useState<T | null>(null);
  const [id] = React.useState(() => uuid());
  const onClose = (target: string) => () => {
    console.log(target, 'closing');
    setOpen(false);
  };
  const onOpen = (target: string) => (event: React.SyntheticEvent<HTMLElement>) => {
    console.log(target, 'opening');
    setRef(event.currentTarget as T);
    setOpen(true);
  };

  return {
    /** Mix these properties into the target element. **Must be an Element** */
    targetProps: {
      // extra description of the target element for assistive technology
      'aria-describedby': type === 'describe' && isOpen ? id : undefined,
      // This will replace the accessible name of the target element
      'aria-label': type === 'label' ? titleText : undefined,
      onMouseEnter: onOpen('target'),
      onMouseLeave: onClose('target'),
      onFocus: onOpen('target'),
      onBlur: onClose('target'),
    },
    /** Mix these properties into the `Popper` component */
    popperProps: {
      open: isOpen,
      anchorElement: ref,
    },
    /** Mix these properties into the `TooltipContainer` component */
    tooltipProps: {
      id: type === 'describe' && isOpen ? id : undefined,
      role: 'tooltip',
    },
  };
}
