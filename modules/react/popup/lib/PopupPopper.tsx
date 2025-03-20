import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {usePopupModel, usePopupPopper} from './hooks';
import {Placement, PopperOptions, Popper, PopperProps} from './Popper';

export interface PopupPopperProps extends PopperProps {
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
  fallbackPlacements?: Placement[];
  /**
   * The additional options passed to the Popper's `popper.js` instance.
   */
  popperOptions?: Partial<PopperOptions>;
}

// We moved this out of the component function to prevent rebuilding this object on re-renders.
const popperOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: () => [0, 4],
      },
    },
  ],
};

export const PopupPopper = createSubcomponent('div')({
  displayName: 'Popup.Popper',
  modelHook: usePopupModel,
  elemPropsHook: usePopupPopper,
})<PopupPopperProps>(({children, ...elemProps}) => {
  return (
    <Popper {...elemProps} popperOptions={popperOptions} {...elemProps}>
      {children}
    </Popper>
  );
});
