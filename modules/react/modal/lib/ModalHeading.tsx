import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {useModalHeading, useModalModel} from './hooks';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Heading, never> {}

const modalHeading = createStencil({
  base: {
    '@media (max-width: 767.5px)': {
      marginBottom: system.space.zero,
      padding: `${system.space.x2} ${system.space.x2} ${system.space.x1} ${system.space.x2}`,
    },
  },
});

export const ModalHeading = createSubcomponent('h2')({
  displayName: 'Modal.Heading',
  modelHook: useModalModel,
  elemPropsHook: useModalHeading,
})<ModalHeadingProps>((elemProps, Element) => {
  return <Popup.Heading as={Element} {...mergeStyles(elemProps, modalHeading())} />;
});
