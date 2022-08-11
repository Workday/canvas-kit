import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';

import {HStack} from '@workday/canvas-kit-react/layout';
import {useModalModel} from './hooks';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ModalFooterProps<T = unknown>
  extends Partial<ExtractProps<typeof HStack, never>> {}

export const ModalFooter = createSubcomponent('div')({
  displayName: 'Modal.Footer',
  modelHook: useModalModel,
})<ModalFooterProps>(({...elemProps}) => {
  return (
    <HStack padding={`${space.s} ${space.l} ${space.l} ${space.l}`} spacing="s" {...elemProps} />
  );
});
