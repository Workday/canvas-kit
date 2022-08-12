import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {useModalCard, useModalModel} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const ModalCard = createSubcomponent('div')({
  displayName: 'Modal.Card',
  modelHook: useModalModel,
  elemPropsHook: useModalCard,
})<ModalCardProps>((elemProps, Element) => {
  return (
    <Popup.Card
      as={Element}
      width={440}
      borderWidth={0}
      margin="xl"
      depth={6}
      padding="zero"
      {...elemProps}
    />
  );
});
