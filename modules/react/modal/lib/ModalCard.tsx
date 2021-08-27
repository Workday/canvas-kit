import * as React from 'react';

import {createComponent, useModelContext, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup, PopupModelContext} from '@workday/canvas-kit-react/popup';

import {useModalCard} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const ModalCard = createComponent('div')({
  displayName: 'Modal.Card',
  Component: ({children, model, ...elemProps}: ModalCardProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = useModalCard(localModel, elemProps, ref);
    return (
      <Popup.Card as={Element} width={440} borderWidth={0} {...props}>
        {children}
      </Popup.Card>
    );
  },
});
