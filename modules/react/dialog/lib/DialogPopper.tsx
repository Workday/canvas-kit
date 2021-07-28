import * as React from 'react';

import {createComponent, useModelContext, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup, PopupModelContext, usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';

import {useDialogPopper} from './hooks';

export interface DialogPopperProps extends ExtractProps<typeof Popup.Popper, never> {}

export const DialogPopper = createComponent('div')({
  displayName: 'Dialog.Popper',
  Component: (
    {children, model, placement, popperOptions, ...elemProps}: DialogPopperProps,
    ref,
    Element
  ) => {
    const localModel = useModelContext(PopupModelContext, model);

    const popperProps = usePopupPopper(localModel, {placement, popperOptions}, ref);
    const props = useDialogPopper(localModel, elemProps);
    return (
      <Element {...props}>
        <Popper {...popperProps}>{children}</Popper>
      </Element>
    );
  },
});
