import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {PopupModel, usePopupModel, PopupModelContext} from './hooks';
import {PopupCard} from './PopupCard';
import {PopupTarget} from './PopupTarget';
import {PopupPopper} from './PopupPopper';
import {PopupHeading} from './PopupHeading';
import {PopupCloseIcon} from './PopupCloseIcon';
import {PopupCloseButton} from './PopupCloseButton';

export interface PopupProps {
  /**
   * The contents of the Popup. Can be `Popup` children or any valid elements.
   */
  children: React.ReactNode;
  /**
   * A PopupModel with optional behavior hooks applied.
   */
  model: PopupModel;
}

export const Popup = createComponent('div')({
  displayName: 'Popup',
  Component: ({children, model, ...config}: PopupProps) => {
    const value = useDefaultModel(model, config, usePopupModel);
    return <PopupModelContext.Provider value={value}>{children}</PopupModelContext.Provider>;
  },
  subComponents: {
    Heading: PopupHeading,
    Body: Card.Body,
    Card: PopupCard,
    CloseIcon: PopupCloseIcon,
    Target: PopupTarget,
    Popper: PopupPopper,
    CloseButton: PopupCloseButton,
  },
});
