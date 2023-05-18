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

import {useModalModel} from './hooks';

export interface ModalBodyProps extends ExtractProps<typeof Popup.Body, never> {}

const ResponsiveModalBody = styled(Popup.Body)<ModalBodyProps & StyledType>(({theme}) => {
  const {canvas: canvasTheme} = getTheme(theme);
  return {
    [canvasTheme.breakpoints.down('s')]: {
      marginBottom: space.zero,
      padding: `${space.xxxs} ${space.xxs} ${space.xxs} ${space.xxs}`,
    },
  };
});

export const ModalBody = createSubcomponent('div')({
  displayName: 'Modal.Body',
  modelHook: useModalModel,
})<ModalBodyProps>((elemProps, Element) => {
  return <ResponsiveModalBody as={Element} {...elemProps} />;
});
