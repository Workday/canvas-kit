import * as React from 'react';

import {createComponent, ExtractProps, StyledType} from '@workday/canvas-kit-react/common';

import {ModalOverlay} from './ModalOverlay';
import styled from '@emotion/styled';

const StyledOverlay = styled(ModalOverlay)<StyledType>({
  '& > div': {maxHeight: 'inherit'}, // reset maxHeight of centering div
});

export const ModalOverflowOverlay = createComponent('div')({
  displayName: 'Modal.OverflowOverlay',
  Component: (
    {children, model, ...elemProps}: ExtractProps<typeof ModalOverlay, never>,
    ref,
    Element
  ) => {
    return (
      <StyledOverlay as={Element} ref={ref} overflowX="hidden" overflowY="auto" {...elemProps}>
        {children}
      </StyledOverlay>
    );
  },
});
