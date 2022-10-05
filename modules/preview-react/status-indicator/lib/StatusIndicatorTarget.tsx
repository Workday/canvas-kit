import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

import {useStatusIndicatorModel, useStatusIndicatorTarget} from './hooks';

export const StatusIndicatorTarget = createSubcomponent(PrimaryButton)({
  displayName: 'StatusIndicator.Target',
  modelHook: useStatusIndicatorModel,
  elemPropsHook: useStatusIndicatorTarget,
})<ExtractProps<typeof PrimaryButton, never>>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
