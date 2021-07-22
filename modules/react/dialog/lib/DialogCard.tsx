import * as React from 'react';

import {createComponent, useModelContext, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup, PopupModelContext} from '@workday/canvas-kit-react/popup';

import {useDialogCard} from './hooks';

export interface DialogCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const DialogCard = createComponent('div')({
  displayName: 'Dialog.Card',
  Component: ({children, model, ...elemProps}: DialogCardProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = useDialogCard(localModel, elemProps, ref);
    return (
      <Popup.Card as={Element} {...props}>
        {children}
      </Popup.Card>
    );
  },
});
