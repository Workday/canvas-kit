import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {usePopupModel} from '@workday/canvas-kit-react/popup';

export const ModalBody = createSubcomponent('div')({
  displayName: 'Modal.Body',
  modelHook: usePopupModel,
})<ExtractProps<typeof Card.Body>>(elemProps => {
  return <Card.Body overflowY="auto" padding={'l'} paddingTop="zero" {...elemProps} />;
});
