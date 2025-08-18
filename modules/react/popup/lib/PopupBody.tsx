import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {usePopupModel} from './hooks';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '../../layout';
import {system} from '@workday/canvas-tokens-web';

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
