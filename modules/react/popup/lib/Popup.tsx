import * as React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';

import {usePopupModel} from './hooks';
import {PopupCard} from './PopupCard';
import {PopupTarget} from './PopupTarget';
import {PopupPopper} from './PopupPopper';
import {PopupHeading} from './PopupHeading';
import {PopupCloseIcon} from './PopupCloseIcon';
import {PopupCloseButton} from './PopupCloseButton';
import {PopupBody} from './PopupBody';

export interface PopupProps {
  /**
   * The contents of the Popup. Can be `Popup` children or any valid elements.
   */
  children: React.ReactNode;
}

export const Popup = createContainer()({
  displayName: 'Popup',
  modelHook: usePopupModel,
  subComponents: {
    Heading: PopupHeading,
    Body: PopupBody,
    Card: PopupCard,
    CloseIcon: PopupCloseIcon,
    Target: PopupTarget,
    Popper: PopupPopper,
    CloseButton: PopupCloseButton,
  },
})<PopupProps>(({children}: PopupProps) => {
  return <>{children}</>;
});
