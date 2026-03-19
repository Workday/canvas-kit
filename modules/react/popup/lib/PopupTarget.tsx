import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {usePopupModel, usePopupTarget} from './hooks';

export interface PopupTargetProps {}

export const PopupTarget = createSubcomponent(SecondaryButton)({
  displayName: 'Popup.Target',
  modelHook: usePopupModel,
  elemPropsHook: usePopupTarget,
})((elemProps, Element) => {
  return <Element {...elemProps} />;
});
