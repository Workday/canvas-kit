import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Popper, usePopupPopper} from '@workday/canvas-kit-react/popup';

import {useMenuModel} from './useMenuModel';

export interface MenuPopperProps extends ExtractProps<typeof Popper> {}

export const useMenuPopper = usePopupPopper;

/**
 * The `[skidding, distance]` offset every menu popper sits at relative to its anchor.
 */
export const menuPopperOffset: [number, number] = [0, 4];

// We moved this out of the component function to prevent rebuilding this object on re-renders.
export const defaultMenuPopperOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: () => menuPopperOffset,
      },
    },
  ],
};

export const MenuPopper = createSubcomponent('div')({
  modelHook: useMenuModel,
  elemPropsHook: useMenuPopper,
})<MenuPopperProps>(({children, ...elemProps}) => {
  return (
    <Popper placement="bottom-start" popperOptions={defaultMenuPopperOptions} {...elemProps}>
      {children}
    </Popper>
  );
});
