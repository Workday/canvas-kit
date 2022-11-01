import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';
import {space} from '@workday/canvas-kit-react/tokens';

import {useModalHeading, useModalModel} from './hooks';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Heading, never> {}

const ResponsiveModalHeading = styled(Popup.Heading)<ModalHeadingProps & StyledType>(({theme}) => ({
  [theme.canvas.breakpoints.down('s')]: {
    marginBottom: space.zero,
  },
}));

export const ModalHeading = createSubcomponent('h2')({
  displayName: 'Modal.Heading',
  modelHook: useModalModel,
  elemPropsHook: useModalHeading,
})<ModalHeadingProps>((elemProps, Element) => {
  return <ResponsiveModalHeading as={Element} {...elemProps} />;
});
