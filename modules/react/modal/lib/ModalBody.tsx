import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  getCanvasTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';
import {space} from '@workday/canvas-kit-react/tokens';

import {useModalModel} from './hooks';

export interface ModalHeadingProps extends ExtractProps<typeof Popup.Body, never> {}

const ResponsiveModalBody = styled(Popup.Body)<ModalBodyProps & StyledType>(({theme}) => {
  const canvasTheme = getCanvasTheme(theme);
  return {
    [canvasTheme.breakpoints.down('s')]: {
      marginBottom: space.zero,
      paddingTop: space.xxxs,
      paddingLeft: space.xxs,
      paddingRight: space.xxs,
      paddingBottom: space.xxs,
    },
  };
});

export const ModalBody = createSubcomponent('div')({
  displayName: 'Modal.Body',
  modelHook: useModalModel,
})<ModalHeadingProps>((elemProps, Element) => {
  return <ResponsiveModalHeading as={Element} {...elemProps} />;
});
