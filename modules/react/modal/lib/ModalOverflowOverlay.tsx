import * as React from 'react';

import {createSubcomponent, ExtractProps, StyledType} from '@workday/canvas-kit-react/common';

import {ModalOverlay} from './ModalOverlay';
import styled from '@emotion/styled';
import {useModalModel} from './hooks';

const StyledOverlay = styled(ModalOverlay)<StyledType>({
  '& > div': {maxHeight: 'inherit'}, // reset maxHeight of centering div
});

export const ModalOverflowOverlay = createSubcomponent('div')({
  displayName: 'Modal.OverflowOverlay',
  modelHook: useModalModel,
})<ExtractProps<typeof ModalOverlay, never>>((elemProps, Element) => {
  return <StyledOverlay as={Element} overflowX="hidden" overflowY="auto" {...elemProps} />;
});
