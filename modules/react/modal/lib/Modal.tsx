import * as React from 'react';
import {
  createContainer,
  createWrapperSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {Popup} from '@workday/canvas-kit-react/popup';
import {ModalOverlay} from './ModalOverlay';
import {ModalCard} from './ModalCard';
import {useModalModel} from './hooks';
import {ModalHeading} from './ModalHeading';
import {ModalOverflowOverlay} from './ModalOverflowOverlay';

export interface ModalProps extends ExtractProps<typeof Dialog, never> {
  /** The contents of the Modal. Can be `Modal` subcomponents or any valid elements. */
  children: React.ReactNode;
}

export const Modal = createContainer()({
  displayName: 'Modal',
  modelHook: useModalModel,
  subComponents: {
    Body: Popup.Body,
    Card: ModalCard,
    CloseIcon: Popup.CloseIcon,
    Target: Popup.Target,
    Heading: ModalHeading,
    Overlay: ModalOverlay,
    OverflowOverlay: ModalOverflowOverlay,
    CloseButton: Popup.CloseButton,
  },
})<ModalProps>(elemProps => {
  return <>{elemProps.children}</>;
});
