import {Card} from '@workday/canvas-kit-react/card';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {mergeStyles} from '../../layout';
import {usePopupModel} from './hooks';

export const popupBodyStencil = createStencil({
  base: {
    overflowY: 'auto',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    paddingInline: cssVar(system.padding.xs, system.space.x2),
  },
});

export const PopupBody = createSubcomponent('div')({
  displayName: 'Popup.Body',
  modelHook: usePopupModel,
})<ExtractProps<typeof Card.Body>>(elemProps => {
  return <Card.Body {...mergeStyles(elemProps, popupBodyStencil())} />;
});
