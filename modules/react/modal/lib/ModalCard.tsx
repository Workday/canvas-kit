import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  StyledType,
  styled,
} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {Popup} from '@workday/canvas-kit-react/popup';

import {useModalCard, useModalModel} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

const ResponsiveModalCard = styled(Popup.Card)<ModalCardProps & StyledType>(({theme}) => ({
  margin: space.xl,
  padding: space.m,
  [theme.canvas.breakpoints.down('s')]: {
    margin: `0 0 ${space.xl}`,
    padding: space.s,
    borderRadius: space.m, // matches mobile specs
  },
}));

export const ModalCard = createSubcomponent('div')({
  displayName: 'Modal.Card',
  modelHook: useModalModel,
  elemPropsHook: useModalCard,
})<ModalCardProps>((elemProps, Element) => {
  return <ResponsiveModalCard as={Element} width={440} borderWidth={0} depth={6} {...elemProps} />;
});
