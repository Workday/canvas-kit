import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {usePopupModel} from './hooks';

export const PopupBody = createSubcomponent('div')({
  displayName: 'Popup.Body',
  modelHook: usePopupModel,
})<ExtractProps<typeof Card.Body>>(elemProps => {
  return <Card.Body overflowY="auto" padding="xxs" {...elemProps} />;
});
