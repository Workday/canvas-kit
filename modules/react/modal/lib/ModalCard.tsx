import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';

import {useModalCard, useModalModel} from './hooks';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const modalCardStencil = createStencil({
  base: {
    margin: system.space.x10,
    width: calc.add(calc.multiply(system.space.x20, 5), system.space.x10),
    borderWidth: system.space.zero,
    outline: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[6],
    '@media screen and (max-width: 768px)': {
      gap: system.space.zero,
      margin: system.space.x4, // 16px all around margin on smaller screen sizes
      padding: system.space.x4, // brings total padding between edge and content to 24px
      borderRadius: system.space.x6, // 24px border radius on smaller devices.
    },
  },
});

export const ModalCard = createSubcomponent('div')({
  displayName: 'Modal.Card',
  modelHook: useModalModel,
  elemPropsHook: useModalCard,
})<ModalCardProps>((elemProps, Element) => {
  return <Popup.Card as={Element} {...mergeStyles(elemProps, modalCardStencil())} />;
});
