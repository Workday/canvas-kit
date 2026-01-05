import {Card} from '@workday/canvas-kit-react/card';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {mergeStyles} from '../../layout';
import {usePopupModel} from './hooks';

export const popupBodyStencil = createStencil({
  base: {
    overflowY: 'auto',
    padding: system.space.x2,
  },
});

export const PopupBody = createSubcomponent('div')({
  displayName: 'Popup.Body',
  modelHook: usePopupModel,
})<ExtractProps<typeof Card.Body>>(elemProps => {
  return <Card.Body {...mergeStyles(elemProps, popupBodyStencil())} />;
});
