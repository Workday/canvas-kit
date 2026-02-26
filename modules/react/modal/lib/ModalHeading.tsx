import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useModalHeading, useModalModel} from './hooks';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Heading, never> {}

export const modalHeadingStencil = createStencil({
  base: {
    '@media screen and (max-width: 768px)': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      padding: `${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.xxs, system.space.x1)}`,
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
