import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

export const ModalBody = createSubcomponent('div')({
  displayName: 'Modal.Body',
  modelHook: usePopupModel,
})<ExtractProps<typeof Card.Body>>(elemProps => {
  return <Popup.Body overflowY="auto" padding={'l'} paddingY="m" {...elemProps} />;
});
