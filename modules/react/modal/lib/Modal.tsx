import * as React from 'react';
import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {Popup} from '@workday/canvas-kit-react/popup';
import {ModalOverlay} from './ModalOverlay';
import {ModalCard} from './ModalCard';
import {useModalModel} from './hooks';
import {ModalHeading} from './ModalHeading';
import {ModalOverflowOverlay} from './ModalOverflowOverlay';
import {ModalBody} from './ModalBody';

export const Modal = createContainer()({
  displayName: 'Modal',
  modelHook: useModalModel,
  subComponents: {
    Body: ModalBody,
    Card: ModalCard,
    CloseIcon: Popup.CloseIcon,
    Target: Popup.Target,
    Heading: ModalHeading,
    Overlay: ModalOverlay,
    OverflowOverlay: ModalOverflowOverlay,
    CloseButton: Popup.CloseButton,
  },
})<ExtractProps<typeof Dialog, never>>(elemProps => {
  return <>{elemProps.children}</>;
});
