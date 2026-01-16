import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useModalHeading, useModalModel} from './hooks';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Heading, never> {}

export const modalHeadingStencil = createStencil({
  base: {
    '@media screen and (max-width: 768px)': {
      padding: `${system.space.x2} ${system.space.x2} ${system.space.x1}`,
    },
  },
});

export const ModalHeading = createSubcomponent('h2')({
  displayName: 'Modal.Heading',
  modelHook: useModalModel,
  elemPropsHook: useModalHeading,
})<ModalHeadingProps>((elemProps, Element) => {
  return <Popup.Heading as={Element} {...mergeStyles(elemProps, modalHeadingStencil())} />;
});
