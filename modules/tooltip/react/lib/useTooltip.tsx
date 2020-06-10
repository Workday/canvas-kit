import * as React from 'react';
import uuid from 'uuid/v4';
import {useCloseOnEscape} from '@workday/canvas-kit-react-popup';

const useIntentTimer = (fn: Function, waitMs: number = 0): {start(): void; clear(): void} => {
  const timer = React.useRef() as React.MutableRefObject<number | undefined>;

  const start = () => {
    timer.current = window.setTimeout(fn, waitMs);
  };

  const clear = () => {
    window.clearTimeout(timer.current);
    timer.current = undefined;
  };

  // be sure to clear our timeout
  React.useEffect(() => {
    return () => {
      window.clearTimeout(timer.current);
    };
  }, []);

  return {
    start,
    clear,
  };
};

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
  const [anchorElement, setAnchorElement] = React.useState<T | null>(null);
  const [id] = React.useState(() => uuid());
  const ref = React.useRef<HTMLDivElement>(null);

  const closeTooltip = () => {
    setOpen(false);
  };

  const intentTimer = useIntentTimer(closeTooltip, 100);

  const onOpen = () => {
    setOpen(true);
    intentTimer.clear();
  };

  const onOpenFromTarget = (event: React.SyntheticEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget as T);
    onOpen();
  };

  useCloseOnEscape(ref, closeTooltip);

  return {
    /** Mix these properties into the target element. **Must be an Element** */
    targetProps: {
      // extra description of the target element for assistive technology
      'aria-describedby': type === 'describe' && isOpen ? id : undefined,
      // This will replace the accessible name of the target element
      'aria-label': type === 'label' ? titleText : undefined,
      onMouseEnter: onOpenFromTarget,
      onMouseLeave: intentTimer.start,
      onClick: closeTooltip,
      onFocus: onOpenFromTarget,
      onBlur: intentTimer.start,
    },
    /** Mix these properties into the `Popper` component */
    popperProps: {
      open: isOpen,
      anchorElement,
      ref,
    },
    /** Mix these properties into the `TooltipContainer` component */
    tooltipProps: {
      id: type === 'describe' && isOpen ? id : undefined,
      role: 'tooltip',
      onMouseEnter: onOpen,
      onMouseLeave: intentTimer.start,
    },
  };
}
