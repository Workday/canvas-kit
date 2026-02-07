import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useModalCard, useModalModel} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const modalCardStencil = createStencil({
  base: {
    margin: system.space.x10,
    width: calc.add(calc.multiply(system.space.x20, 5), system.space.x10),
    borderWidth: system.space.zero,
    outline: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[6],
    borderRadius: system.shape.xxxl,
    '@media screen and (max-width: 768px)': {
      gap: system.space.zero,
      margin: system.space.x4, // 16px all around margin on smaller screen sizes
      padding: system.space.x4, // brings total padding between edge and content to 24px
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
