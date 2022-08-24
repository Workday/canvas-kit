import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';

import {HStack} from '@workday/canvas-kit-react/layout';
import {usePopupModel} from './hooks';

export interface PopupFooterProps<T = unknown>
  extends Partial<ExtractProps<typeof HStack, never>> {}

export const PopupFooter = createSubcomponent('div')({
  displayName: 'Popup.Footer',
  modelHook: usePopupModel,
})<PopupFooterProps>(({...elemProps}) => {
  return <HStack paddingX="l" paddingBottom="l" paddingTop="zero" spacing="s" {...elemProps} />;
});
