import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';

import {useMenuModel} from './useMenuModel';

export interface MenuPopperProps extends ExtractProps<typeof Popper> {}

export const useMenuPopper = usePopupPopper;

// We moved this out of the component function to prevent rebuilding this object on re-renders.
export const defaultMenuPopperOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: () => [0, 4],
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
