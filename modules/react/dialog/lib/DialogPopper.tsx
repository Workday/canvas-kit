import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Popper, Popup, usePopupPopper} from '@workday/canvas-kit-react/popup';

import {useDialogModel, useDialogPopper} from './hooks';

export interface DialogPopperProps extends ExtractProps<typeof Popup.Popper, never> {}

export const DialogPopper = createSubcomponent('div')({
  displayName: 'Dialog.Popper',
  modelHook: useDialogModel,
})<ExtractProps<typeof Popup.Popper, never>>(
  ({children, placement, popperOptions, ref, ...props}, Element, model) => {
    const popperProps = usePopupPopper(model, {placement, popperOptions}, ref);
    const elemProps = useDialogPopper(model, props);
    if (model.state.visibility === 'hidden') {
      return null;
    }
    return (
      <Element {...elemProps}>
        <Popper {...popperProps}>{children}</Popper>
      </Element>
    );
  }
);
