import * as React from 'react';
import {createComponent, ExtractProps, useDefaultModel} from '@workday/canvas-kit-react/common';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {PopupModelContext, Popup} from '@workday/canvas-kit-react/popup';
import {ModalOverlay} from './ModalOverlay';
import {ModalCard} from './ModalCard';
import {useModalModel} from './hooks';
import {ModalHeading} from './ModalHeading';

export interface ModalProps extends ExtractProps<typeof Dialog, never> {}

export const Modal = createComponent()({
  displayName: 'Modal',
  Component: ({children, model, ...config}: ModalProps) => {
    const value = useDefaultModel(model, config, useModalModel);

    return <PopupModelContext.Provider value={value}>{children}</PopupModelContext.Provider>;
  },

  subComponents: {
    Body: Popup.Body,
    Card: ModalCard,
    CloseIcon: Popup.CloseIcon,
    Target: Popup.Target,
    Heading: ModalHeading,
    Overlay: ModalOverlay,
    CloseButton: Popup.CloseButton,
  },
});
