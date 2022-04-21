import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {useModalCard, useModalModel} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const ModalCard = createSubcomponent('div')({
  displayName: 'Modal.Card',
<<<<<<< HEAD
  modelHook: useModalModel,
  elemPropsHook: useModalCard,
})<ModalCardProps>((elemProps, Element) => {
  return <Popup.Card as={Element} width={440} borderWidth={0} margin="xl" {...elemProps} />;
=======
  Component: ({children, model, ...elemProps}: ModalCardProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = useModalCard(localModel, elemProps, ref);
    return (
      <Popup.Card as={Element} width={440} borderWidth={0} margin="xl" depth={6} {...props}>
        {children}
      </Popup.Card>
    );
  },
>>>>>>> 66707760f9a668fff661c61bf664b57eb86983c5
});
