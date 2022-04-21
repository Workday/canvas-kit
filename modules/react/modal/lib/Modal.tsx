import * as React from 'react';
import {
  createContainerComponent,
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

export const Modal = createContainerComponent()({
  displayName: 'Modal',
  modelHook: useModalModel,
  subComponents: {
    Body: createWrapperSubcomponent(Popup.Body)({
      displayName: 'Modal.Body',
      modelHook: useModalModel,
    }),
    Card: ModalCard,
    CloseIcon: createWrapperSubcomponent(Popup.CloseIcon)({
      displayName: 'Modal.CloseIcon',
      modelHook: useModalModel,
    }),
    Target: createWrapperSubcomponent(Popup.Target)({
      displayName: 'Modal.Target',
      modelHook: useModalModel,
    }),
    Heading: ModalHeading,
    Overlay: ModalOverlay,
    OverflowOverlay: ModalOverflowOverlay,
    CloseButton: createWrapperSubcomponent(Popup.CloseButton)({
      displayName: 'Modal.CloseButton',
      modelHook: useModalModel,
    }),
  },
})<ModalProps>(elemProps => {
  return <>{elemProps.children}</>;
});
