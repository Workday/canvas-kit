import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PopperJS from '@popperjs/core';

export type Placement = `${PopperJS.Placement}`; // Use template literals to make documentation list them out
export type PopperOptions = PopperJS.Options;
export const defaultFallbackPlacements: Array<Placement> = ['top', 'right', 'bottom', 'left']

import {usePopupStack} from './hooks';
import {useLocalRef} from '@workday/canvas-kit-react/common';

export interface PopperProps {
  /**
   * The reference element used to position the Popper. Popper content will try to follow the
   * `anchorElement` if it moves and will reposition itself if there is no longer room in the
   * window.
   */
  anchorElement?: React.RefObject<Element> | Element | null;
  /**
   * The content of the Popper. If a function is provided, it will be treated as a Render Prop and
   * pass the `placement` chosen by PopperJS. This `placement` value is useful if your popup needs
   * to animate and that animation depends on the direction of the content in relation to the
   * `anchorElement`.
   */
  children: ((props: {placement: Placement}) => React.ReactNode) | React.ReactNode;
  /**
   * When provided, this optional callback will be used to determine positioning for the Popper element
   * instead of calling `getBoundingClientRect` on the `anchorElement` prop. Use this when you need
   * complete control over positioning. When this prop is specified, it is safe to pass `null` into the
   * `anchorElement` prop. If `null` is passed into the `anchorElement` prop, an `owner` will not be
   * provided for the `PopupStack`.
   */
  getAnchorClientRect?: () => DOMRect;
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
   * Define fallback placements by providing a list of {@link Placement} in array (in order of preference).
   * The default preference is following the order of `top`, `right`, `bottom`, and `left`. Once the initial 
   * and opposite placements are not available, the fallback placements will be in use. Use an empty array to 
   * disable the fallback placements.
   */
  fallbackPlacements?: Array<Placement>;
  /**
   * A callback function that will be called whenever PopperJS chooses a placement that is different
   * from the provided `placement` preference. If a `placement` preference doesn't fit, PopperJS
   * will choose a new one and call this callback.
   */
  onPlacementChange?: (placement: Placement) => void;
  /**
   * The additional options passed to the Popper's `popper.js` instance.
   */
  popperOptions?: Partial<PopperOptions>;
  /**
   * If false, render the Popper within the
   * DOM hierarchy of its parent. A non-portal Popper will constrained by the parent container
   * overflows. If you set this to `false`, you may experience issues where you content gets cut off
   * by scrollbars or `overflow: hidden`
   * @default true
   */
  portal?: boolean;
  /**
   * Reference to the PopperJS instance. Useful for making direct method calls on the popper
   * instance like `update`.
   */
  popperInstanceRef?: React.Ref<PopperJS.Instance>;
}

/**
 * A thin wrapper component around the Popper.js positioning engine. For reference:
 * https://popper.js.org/. `Popper` also automatically works with the {@link PopupStack} system.
 * `Popper` has no UI and will render any children to the `body` element and position around a
 * provided `anchorElement`.
 *
 * Prefer using {@link PopupPopper Popup.Popper} instead. Use this to make Popups that don't utilize
 * a PopupModel or any associate popup [hooks](#hooks).
 *
 * > **Note:** `Popper` renders any children to a `div` element created by the `PopupStack`. This
 * > element is not controlled by React, so any extra element props will _not_ be forwarded. The
 * > `ref` will point to the `div` element created by the `PopupStack`, however. In v4, an extra
 * > `div` element was rendered and that's where extra props were spread to. In v5+, you can provide
 * > your own element if you wish.
 */
export const Popper = React.forwardRef<HTMLDivElement, PopperProps>(
  ({portal = true, open = true, ...elemProps}: PopperProps, ref) => {
    if (!open) {
      return null;
    }

    return <OpenPopper ref={ref} portal={portal} {...elemProps} />;
  }
);

const getElementFromRefOrElement = (
  input: React.RefObject<Element> | Element | null
): Element | undefined => {
  console.log('input ', input)
  if (input === null) {
    return undefined;
  } else if ('current' in input) {
    return input.current || undefined;
  } else {
    return input;
  }
};

const getOppositePlacement = (popperPlacement: Placement): Placement => {
  const [first, second] = popperPlacement.split('-');
  let oppositePlacement: Placement;
  switch (first) {
    case 'top':
      oppositePlacement = 'bottom';
      break;
    case 'bottom':
      oppositePlacement = 'top';
      break;
    case 'left':
      oppositePlacement = 'right';
      break;
    case 'right':
      oppositePlacement = 'left';
      break;
    default:
      oppositePlacement = 'auto';
  }
  if (second) {
    oppositePlacement =
      PopperJS.placements.find(placement => placement.includes(`${oppositePlacement}-${second}`)) ??
      oppositePlacement;
  }
  return oppositePlacement;
};

const getNextAvailablePlacement = (placements: Array<Placement>, state: PopperJS.State, 
  popperPlacement: Placement): Placement | undefined => {
  if (placements.length === 0){
    state.placement = popperPlacement
    return
  }

  const key = placements[0] as keyof PopperJS.SideObject
  state.placement = placements[0]
  if (PopperJS.detectOverflow(state)[key] <= 0){
    return placements[0]
  } else {
    placements.shift()
    return getNextAvailablePlacement(placements, state, popperPlacement)
  }
}

// prevent unnecessary renders if popperOptions are not passed
const defaultPopperOptions: PopperProps['popperOptions'] = {};

// Popper bails early if `open` is false and React hooks cannot be called conditionally,
// so we're breaking out the open version into another component.
const OpenPopper = React.forwardRef<HTMLDivElement, PopperProps>(
  (
    {
      anchorElement,
      getAnchorClientRect,
      popperOptions = defaultPopperOptions,
      placement: popperPlacement = 'bottom',
      fallbackPlacements: baseFallbackPlacements = defaultFallbackPlacements,
      onPlacementChange,
      children,
      portal,
      popperInstanceRef,
    }: PopperProps,
    ref
  ) => {
    const firstRender = React.useRef(true);
    const {localRef, elementRef} = useLocalRef(popperInstanceRef);
    const [placement, setPlacement] = React.useState(popperPlacement);
    const stackRef = usePopupStack(ref, anchorElement as HTMLElement);
    const maxRepositionCall = React.useRef(10)
    const nextAvailablePlacementRef = React.useRef<Placement>(getOppositePlacement(popperPlacement)) // store the next available fallback placement
    const preventOverflowModifierRef = React.useRef<Partial<PopperJS.Modifier<any, any>>> ( {
      name: 'preventOverflow',
      options: {
        rootBoundary: 'document'
      }
    })

    const placementModifier = React.useMemo((): PopperJS.Modifier<any, any> => {
      return {
        name: 'setPlacement',
        enabled: true,
        phase: 'main',
        fn({state}) {
          setPlacement(state.placement);
          onPlacementChange?.(state.placement);
        },
      };
    }, [setPlacement, onPlacementChange]);
 
    const fallbackPlacementsModifier = React.useMemo((): PopperJS.Modifier<any, any> => {
      return {
        name: 'fallbackPlacement',
        enabled: true,
        phase: 'main',
        fn({state}){
          const placements = [popperPlacement, getOppositePlacement(popperPlacement), ...baseFallbackPlacements]
          const overflow = PopperJS.detectOverflow(state)
          const preventOverflowData = state.modifiersData.preventOverflow
          console.log('preventOverflow', preventOverflowData)
          const isOverflowed = preventOverflowData && 
          ((preventOverflowData.x === 0 && (overflow.right > 0 || overflow.left > 0)) || 
          (preventOverflowData.y === 0 && (overflow.top > 0 || overflow.bottom > 0)))
          maxRepositionCall.current -= 1

          nextAvailablePlacementRef.current = getNextAvailablePlacement(placements, state, popperPlacement) ?? popperPlacement

          if (!isOverflowed && maxRepositionCall.current < 1){
            // reset the max call if popper keeps open
            maxRepositionCall.current = 10
          } else if (isOverflowed && maxRepositionCall.current < 1){
            // when there is no available space on the four side, use the initial placement
            state.reset = false
          } else {           
            // instruct Popper to run all modifier again
            state.reset = true
          }
        },
        requiresIfExists: ['preventOverflow']
      }
    },[baseFallbackPlacements, popperPlacement, nextAvailablePlacementRef, maxRepositionCall])

    // useLayoutEffect prevents flashing of the popup before position is determined
    React.useLayoutEffect(() => {
      const anchorEl = getAnchorClientRect
        ? {getBoundingClientRect: getAnchorClientRect}
        : getElementFromRefOrElement(anchorElement ?? null);
      if (!anchorEl) {
        console.warn(
          `Popper: neither anchorElement or getAnchorClientRect was defined. A valid anchorElement or getAnchorClientRect callback must be provided to render a Popper`
        );
        return undefined;
      }

      if (stackRef.current) {
        const instance = PopperJS.createPopper(anchorEl, stackRef.current, {
          placement: popperPlacement,
          ...popperOptions,
          modifiers: [...(popperOptions.modifiers || []), placementModifier, preventOverflowModifierRef.current, fallbackPlacementsModifier],
        });
        elementRef(instance); // update the ref with the instance

        return () => {
          instance?.destroy();
        };
      }

      return undefined;
      // We will maintain our own list of dependencies. We need to separate "create" and "update"
      // prop dependencies. We do _not_ want to destroy the Popper instance if options or placement
      // change, only if anchor or target refs change
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorElement, getAnchorClientRect, stackRef]);

    React.useLayoutEffect(() => {
      // Only update options if this is _not_ the first render
      if (!firstRender.current) {
        localRef.current?.setOptions({
          placement: nextAvailablePlacementRef.current,
          ...popperOptions,
          modifiers: [...(popperOptions.modifiers || []), placementModifier, preventOverflowModifierRef.current, fallbackPlacementsModifier],
        });
      }
      firstRender.current = false;
    }, [popperOptions, popperPlacement, placementModifier, preventOverflowModifierRef, fallbackPlacementsModifier, localRef, nextAvailablePlacementRef]);

    const contents = <>{isRenderProp(children) ? children({placement}) : children}</>;

    if (!portal) {
      return contents;
    }

    return ReactDOM.createPortal(contents, stackRef.current!);
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
