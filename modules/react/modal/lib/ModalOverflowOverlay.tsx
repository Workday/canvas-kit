import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';

import {ModalOverlay} from './ModalOverlay';
import {useModalModel} from './hooks';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

const modalOverflowOverlay = createStencil({
  base: {
    '& > div': {maxHeight: 'inherit'}, // reset maxHeight of centering div
    overflow: 'hidden auto',
  },
});

export const ModalOverflowOverlay = createSubcomponent('div')({
  displayName: 'Modal.OverflowOverlay',
  modelHook: useModalModel,
})<ExtractProps<typeof ModalOverlay, never>>((elemProps, Element) => {
  return <ModalOverlay as={Element} {...mergeStyles(elemProps, modalOverflowOverlay())} />;
});
