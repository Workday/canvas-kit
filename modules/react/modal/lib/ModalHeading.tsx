import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {useModalHeading, useModalModel} from './hooks';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Heading, never> {}

export const ModalHeading = createSubcomponent('h2')({
  displayName: 'Modal.Heading',
  modelHook: useModalModel,
  elemPropsHook: useModalHeading,
})<ModalHeadingProps>((elemProps, Element) => {
  return <Popup.Heading marginInlineStart="l" marginInlineEnd="l" as={Element} {...elemProps} />;
});
