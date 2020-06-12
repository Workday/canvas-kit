import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PopperJS from '@popperjs/core';

export type Placement = PopperJS.Placement;
export type PopperOptions = PopperJS.Options;

import {usePopupStack} from '../';

export interface PopperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The reference element used to position the Popper. Popper content will try to follow the
   * `anchorElement` if it moves and will reposition itself if there is no longer room in the
   * window.
   */
  anchorElement: React.RefObject<Element> | Element | null;
  /**
   * The content of the Popper. If a function is provided, it will be treated as a Render Prop and
   * pass the `placement` chosen by PopperJS. This `placement` value is useful if your popup needs
   * to animate and that animation depends on the direction of the content in relation to the
   * `anchorElement`.
   */
  children: ((props: {placement: Placement}) => React.ReactNode) | React.ReactNode;
  /**
   * The element that contains the portal children when `portal` is true. It is best to not define
   * this unless you know what you're doing. Popper works with a PopupStack and in order for
   * z-indexes to work correctly, all Popups on your page should live on the same root element
   * otherwise you risk running into rendering issues:
   * https://philipwalton.com/articles/what-no-one-told-you-about-z-index/
   */
  containerElement?: Element | null;
  /**
   * Determines if `Popper` content should be rendered. The content only exists in the DOM when
   * `open` is `true`
   * @default true
   */
  open?: boolean;
  /**
   * The placement of the `Popper` contents relative to the `anchorElement`. Accepts `auto`, `top`,
   * `right`, `bottom`, or `left`. Each placement can also be modified using any of the following
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
   * DOM hierarchy of its parent. A non-portal Popper will constrained by the parent container
   * overflows. If you set this to `false`, you may experience issues where you content gets cut off
   * by scrollbars or `overflow: hidden`
   * @default true
   */
  portal?: boolean;
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
      ...elemProps
    }: PopperProps,
    ref
  ) => {
    if (!open) {
      return null;
    }

    const contents = (
      <OpenPopper {...{ref, anchorElement, popperOptions, placement, children, ...elemProps}} />
    );

    if (!portal) {
      return contents;
    }

    return ReactDOM.createPortal(contents, containerElement || document.body);
  }
);

const getElementFromRefOrElement = (
  input: React.RefObject<Element> | Element | null
): Element | undefined => {
  if (input === null) {
    return undefined;
  } else if ('current' in input) {
    return input.current || undefined;
  } else {
    return input;
  }
};

// Popper bails early if `open` is false and React hooks cannot be called conditionally,
// so we're breaking out the open version into another component.
const OpenPopper = React.forwardRef<HTMLDivElement, PopperProps>(
  (
    {
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
    usePopupStack(ref, getElementFromRefOrElement(anchorElement) as HTMLElement | undefined);

    // useLayoutEffect prevents flashing of the popup before position is determined
    React.useLayoutEffect(() => {
      const anchorEl = getElementFromRefOrElement(anchorElement);
      if (!anchorEl) {
        console.warn(
          `Popper: anchorElement was not defined. A valid anchorElement must be provided to render a Popper`
        );
        return undefined;
      }

      if (ref.current) {
        const popper = PopperJS.createPopper(anchorEl, ref.current, {
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
        {isRenderProp(children) ? children({placement}) : children}
      </div>
    );
  }
);

// Typescript threw an error about non-callable signatures. Using typeof as a 'function' returns
// a type of `Function` which isn't descriptive enough for Typescript. We don't do any detection
// against the _type_ of function that gets passed, but we'll assume it is a render prop for now...
function isRenderProp(
  children: any
): children is (props: {placement: Placement}) => React.ReactNode {
  if (typeof children === 'function') {
    return true;
  }
  return false;
}
