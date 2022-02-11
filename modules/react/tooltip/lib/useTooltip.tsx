import * as React from 'react';
import uuid from 'uuid/v4';
import {
  useCloseOnEscape,
  useAlwaysCloseOnOutsideClick,
  usePopupModel,
  useCloseOnFullscreenExit,
} from '@workday/canvas-kit-react/popup';

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
  }, [timer]);

  return {
    start,
    clear,
  };
};

const isInteractiveElement = (element: Element) => {
  const tagName = element.tagName.toLowerCase();
  const tabIndex = element.getAttribute('tabindex');

  switch (tagName) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
    case 'details':
      return true;
    default:
      return tabIndex ? Number(tabIndex) >= 0 : false;
  }
};

/**
 * Convenience hook for creating components with tooltips. It will return an object of properties to mix
 * into a target, popper and tooltip
 */
export function useTooltip<T extends Element = Element>({
  type = 'label',
  titleText = '',
  showDelay = 300,
  hideDelay = 100,
}: {
  /**
   * Determines the tooltip type for accessibility.
   *
   * - `label`: Sets the accessible name for the wrapped element. Use for icons or if tooltip
   *   `title` prop is the same as the text content of the wrapped element. E.g. IconButtons or
   *   Ellipsis tooltips.
   * - `describe`: Sets `aria-describedby` of the wrapped element. Use if the tooltip has additional
   *   information about the target.
   * - `muted`: No effort is made to make the tooltip accessible to screen readers. Use if the
   *   tooltip contents are not useful to a screen reader or if you have handled accessibility of
   *   the tooltip yourself.
   *
   * **Note**: Assistive technology may ignore `describe` techniques based on verbosity settings.
   * Consider an alternate way to inform a user of additional important information.
   * @default 'label'
   */
  type?: 'label' | 'describe' | 'muted';
  /**
   * The content of the `aria-label` if `type` is `label.
   */
  titleText?: string;
  /**
   * Amount of time (in ms) to delay before showing the tooltip
   */
  showDelay?: number;
  /**
   * Amount of time (in ms) to delay before hiding the tooltip
   */
  hideDelay?: number;
} = {}) {
  const mouseDownRef = React.useRef(false); // use to prevent newly focused from making tooltip flash
  const popupModel = usePopupModel();
  const [anchorElement, setAnchorElement] = React.useState<T | null>(null);
  const [id] = React.useState(() => uuid());
  const intentTimerHide = useIntentTimer(popupModel.events.hide, hideDelay);
  const intentTimerShow = useIntentTimer(popupModel.events.show, showDelay);

  const onHide = () => {
    intentTimerHide.start();
    intentTimerShow.clear();
  };

  const onOpen = () => {
    intentTimerShow.start();
    intentTimerHide.clear();
  };

  const onOpenFromTarget = (event: React.SyntheticEvent) => {
    setAnchorElement(event.currentTarget as T);
    onOpen();
  };

  const onFocus = (event: React.FocusEvent) => {
    if (!mouseDownRef.current) {
      onOpenFromTarget(event);
    }

    mouseDownRef.current = false;
  };

  const onMouseDown = (event: React.MouseEvent) => {
    mouseDownRef.current = true;
    if (isInteractiveElement(event.currentTarget)) {
      popupModel.events.hide();
    }
  };

  useCloseOnEscape(popupModel);
  useAlwaysCloseOnOutsideClick(popupModel);
  useCloseOnFullscreenExit(popupModel);

  const visible = popupModel.state.visibility !== 'hidden';

  return {
    /** Mix these properties into the target element. **Must be an Element** */
    targetProps: {
      // extra description of the target element for assistive technology
      'aria-describedby': type === 'describe' && visible ? id : undefined,
      // This will replace the accessible name of the target element
      'aria-label': type === 'label' ? titleText : undefined,
      onMouseEnter: onOpenFromTarget,
      onMouseLeave: onHide,
      onMouseDown,
      onFocus,
      onBlur: onHide,
    },
    /** Mix these properties into the `Popper` component */
    popperProps: {
      open: visible,
      anchorElement,
      ref: popupModel.state.stackRef,
    },
    /** Mix these properties into the `TooltipContainer` component */
    tooltipProps: {
      id: type === 'describe' && visible ? id : undefined,
      role: 'tooltip',
      onMouseEnter: onOpen,
      onMouseLeave: onHide,
    },
  };
}
