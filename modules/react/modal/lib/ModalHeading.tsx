import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  getTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';
import {space} from '@workday/canvas-kit-react/tokens';

import {useModalHeading, useModalModel} from './hooks';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Heading, never> {}

const ResponsiveModalHeading = styled(Popup.Heading)<ModalHeadingProps & StyledType>(({theme}) => {
  const {canvas: canvasTheme} = getTheme(theme);
  return {
    [canvasTheme.breakpoints.down('s')]: {
      marginBottom: space.zero,
      padding: `${space.xxs} ${space.xxs} ${space.xxxs} ${space.xxs}`,
    },
  };
});

export const ModalHeading = createSubcomponent('h2')({
  displayName: 'Modal.Heading',
  modelHook: useModalModel,
  elemPropsHook: useModalHeading,
})<ModalHeadingProps>((elemProps, Element) => {
  return <ResponsiveModalHeading as={Element} {...elemProps} />;
});
