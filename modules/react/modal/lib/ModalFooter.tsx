import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  StyledType,
  styled,
} from '@workday/canvas-kit-react/common';

import {HStack} from '@workday/canvas-kit-react/layout';
import {useModalModel} from './hooks';
import {space} from '@workday/canvas-kit-react/tokens';

export interface ModalFooterProps<T = unknown>
  extends Partial<ExtractProps<typeof HStack, never>> {}

const StyledModalFooter = styled(HStack)<StyledType>({
  padding: `${space.s} ${space.l} ${space.l} ${space.l}`,
});

export const ModalFooter = createSubcomponent('div')({
  displayName: 'Modal.Footer',
  modelHook: useModalModel,
})<ModalFooterProps>(({...elemProps}) => {
  return <StyledModalFooter spacing="s" {...elemProps} />;
});
