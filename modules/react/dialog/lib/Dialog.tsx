import React from 'react';

import {
  createContainerComponent,
  createWrapperSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {DialogPopper} from './DialogPopper';
import {DialogCard} from './DialogCard';
import {useDialogModel} from './hooks';

export interface DialogProps {
  /**
   * The contents of the Dialog. Can be `Dialog` children or any valid elements.
   */
  children: React.ReactNode;
}

export const Dialog = createContainerComponent()({
  displayName: 'Dialog',
  modelHook: useDialogModel,
  subComponents: {
    Body: createWrapperSubcomponent(Popup.Body)({
      displayName: 'Dialog.Body',
      modelHook: useDialogModel,
    }),
    Card: DialogCard,
    CloseIcon: createWrapperSubcomponent(Popup.CloseIcon)({
      displayName: 'Dialog.CloseIcon',
      modelHook: useDialogModel,
    }),
    Target: createWrapperSubcomponent(Popup.Target)({
      displayName: 'Dialog.Target',
      modelHook: useDialogModel,
    }),
    Heading: createWrapperSubcomponent(Popup.Heading)({
      displayName: 'Dialog.Body',
      modelHook: useDialogModel,
    }),
    Popper: DialogPopper,
    CloseButton: createWrapperSubcomponent(Popup.CloseButton)({
      displayName: 'Dialog.CloseButton',
      modelHook: useDialogModel,
    }),
  },
})(({children}: DialogProps) => {
  return <>{children}</>;
});
