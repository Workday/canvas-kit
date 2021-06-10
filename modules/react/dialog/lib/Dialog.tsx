import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';
import {Popup, PopupModelContext, PopupModel} from '@workday/canvas-kit-react/popup';

import {DialogPopper} from './DialogPopper';
import {DialogCard} from './DialogCard';
import {useDialogModel} from './hooks';

export interface DialogProps {
  /**
   * The contents of the Dialog. Can be `Dialog` children or any valid elements.
   */
  children: React.ReactNode;
  /**
   * A PopupModel. The following behaviors will be automatically applied to this model:
   * - useInitialFocus
   * - useReturnFocus
   * - useCloseOnOutsideClick
   * - useCloseOnEscape
   */
  model?: PopupModel;
}

export const Dialog = createComponent()({
  displayName: 'Dialog',
  Component: ({children, model, ...config}: DialogProps) => {
    const value = useDefaultModel(model, config, useDialogModel);

    return <PopupModelContext.Provider value={value}>{children}</PopupModelContext.Provider>;
  },
  subComponents: {
    Body: Popup.Body,
    Card: DialogCard,
    CloseIcon: Popup.CloseIcon,
    Target: Popup.Target,
    Heading: Popup.Heading,
    Popper: DialogPopper,
    CloseButton: Popup.CloseButton,
  },
});
