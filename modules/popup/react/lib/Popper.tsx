import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PopperJS from '@popperjs/core';

export type Placement = PopperJS.Placement;
export type PopperOptions = PopperJS.Options;

import {usePopupStack} from '../';

export interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The reference element used to position the Popper.
   */
  anchorElement: Element | null;
  /**
   * The children of the Popper (to be used as its content).
   */
  children: React.ReactNode | ((props: {placement: Placement}) => React.ReactNode);
  /**
   * The element that contains the portal children when `portal` is true. It is best to not define
   * this unless you know what you're doing. Popper works with a PopupStack and in order for
   * z-indexes to work correctly, all Popups on your page should live on the same root element
   * otherwise you risk running into rendering issues:
   * https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
   */
  containerElement?: Element | null;
  /**
   * If true, set the Popper to the open state.
   * @default true
   */
  open?: boolean;
  /**
   * The placement of the popper relative to the `anchorElement`. Accepts `auto`, `top`, `right`,
   * `bottom`, or `left`. Each placement can also be modified using any of the following
   * variations: `-start` or `-end`.
   * @default bottom
   */
  placement?: Placement;
  /**
   * The additional options passed to the Popper's `popper.js` instance.
   */
  popperOptions?: Partial<PopperOptions>;
  /**
   * If true, attach the Popper to the `containerElement`. If false, render the Popper within the
   * DOM hierarchy of its parent.
   * @default true
   */
  portal?: boolean;
  type?: 'ephemeral' | 'persistent';
}

export const Popper = React.forwardRef<HTMLDivElement, PopperProps>(
  (
    {
      placement,
      popperOptions,
      portal = true,
      open = true,
      anchorElement,
      children,
      containerElement,
      type,
      ...elemProps
    }: PopperProps,
    ref
  ) => {
    if (!open) {
      return null;
    }

    const contents = (
      <OpenPopper
        {...{ref, type, anchorElement, popperOptions, placement, children, ...elemProps}}
      />
    );

    if (!portal) {
      return contents;
    }

    return ReactDOM.createPortal(contents, containerElement || document.body);
  }
);

const OpenPopper = React.forwardRef<HTMLDivElement, PopperProps>(
  (
    {
      type = 'ephemeral',
      anchorElement,
      popperOptions = {},
      placement: popperPlacement = 'bottom',
      children,
      ...elemProps
    },
    forwardRef: React.RefObject<HTMLDivElement>
  ) => {
    const localRef = React.useRef<HTMLDivElement>(null);
    const ref = (forwardRef || localRef) as React.RefObject<HTMLDivElement>;
    const [placement, setPlacement] = React.useState(popperPlacement);
    usePopupStack(ref, type);

    // useLayoutEffect prevents flashing of the popup before position is determined
    React.useLayoutEffect(() => {
      if (!anchorElement) {
        console.warn(
          `Popper: anchorElement was not defined. A valid anchorElement must be provided to render a Popper`
        );
        return undefined;
      }

      if (ref && ref.current) {
        const popper = PopperJS.createPopper(anchorElement, ref.current, {
          placement: popperPlacement,
          ...popperOptions,
          onFirstUpdate: data => {
            if (data.placement) {
              setPlacement(data.placement);
            }
            if (popperOptions.onFirstUpdate) {
              popperOptions.onFirstUpdate(data);
            }
          },
        });

        return () => {
          popper.destroy();
        };
      }

      return undefined;
    }, [anchorElement]);

    return (
      <div {...elemProps} ref={ref}>
        {typeof children === 'function' ? children({placement}) : children}
      </div>
    );
  }
);
