import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
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

export const Dialog = createContainer()({
  displayName: 'Dialog',
  modelHook: useDialogModel,
  subComponents: {
    Body: Popup.Body,
    Card: DialogCard,
    CloseIcon: Popup.CloseIcon,
    Target: Popup.Target,
    Heading: Popup.Heading,
    Popper: DialogPopper,
    CloseButton: Popup.CloseButton,
  },
})(({children}: DialogProps) => {
  return <>{children}</>;
});
