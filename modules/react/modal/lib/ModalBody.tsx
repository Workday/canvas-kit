import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useModalModel} from './hooks';

export interface ModalBodyProps extends ExtractProps<typeof Popup.Body, never> {}

export const modalBodyStencil = createStencil({
  base: {
    '@media screen and (max-width: 768px)': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      padding: `${cssVar(system.padding.xxs, system.space.x1)} ${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.xs, system.space.x2)}`,
    },
  },
});

export const ModalBody = createSubcomponent('div')({
  displayName: 'Modal.Body',
  modelHook: useModalModel,
})<ModalBodyProps>((elemProps, Element) => {
  return <Popup.Body as={Element} {...mergeStyles(elemProps, modalBodyStencil())} />;
});
