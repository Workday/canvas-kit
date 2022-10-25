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
    margin: space.s, // 16px all around margin on smaller screen sizes
    padding: space.xxs, // brings total padding between edge and content to 16px
    borderRadius: space.m, // 24px border radius on smaller devices.
  },
}));

export const ModalCard = createSubcomponent('div')({
  displayName: 'Modal.Card',
  modelHook: useModalModel,
  elemPropsHook: useModalCard,
})<ModalCardProps>((elemProps, Element) => {
  return <ResponsiveModalCard as={Element} width={440} borderWidth={0} depth={6} {...elemProps} />;
});
