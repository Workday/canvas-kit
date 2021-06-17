import * as React from 'react';

import {createComponent, useModelContext, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup, PopupModelContext} from '@workday/canvas-kit-react/popup';

import {useDialogCard} from './hooks';

export interface DialogPopupProps extends ExtractProps<typeof Popup.Popper> {}

export const DialogCard = createComponent('div')({
  displayName: 'Dialog.Card',
  Component: ({children, model, ...elemProps}: DialogPopupProps, ref, Element) => {
    const localModel = useModelContext(PopupModelContext, model);

    const props = useDialogCard(localModel, elemProps, ref);
    return (
      <Popup.Card as={Element} {...props}>
        {children}
      </Popup.Card>
    );
  },
});
