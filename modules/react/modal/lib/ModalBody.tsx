import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useModalModel} from './hooks';

export interface ModalBodyProps extends ExtractProps<typeof Popup.Body, never> {}

export const modalBodyStencil = createStencil({
  base: {
    '@media screen and (max-width: 768px)': {
      padding: `${system.space.x1} ${system.space.x2} ${system.space.x2}`,
    },
  },
});

export const ModalBody = createSubcomponent('div')({
  displayName: 'Modal.Body',
  modelHook: useModalModel,
})<ModalBodyProps>((elemProps, Element) => {
  return <Popup.Body as={Element} {...mergeStyles(elemProps, modalBodyStencil())} />;
});
