import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

import {usePopupTarget, usePopupModel} from './hooks';

export interface PopupTargetProps {}

export const PopupTarget = createSubcomponent(SecondaryButton)({
  displayName: 'Popup.Target',
  modelHook: usePopupModel,
  elemPropsHook: usePopupTarget,
})((elemProps, Element) => {
  return <Element {...elemProps} />;
});
