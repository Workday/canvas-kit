import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {CORNER_SHAPE, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useModalCard, useModalModel} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const modalCardStencil = createStencil({
  base: {
    margin: base.legacy.size500,
    width: px2rem(440),
    border: '0',
    outline: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[5],
    borderRadius: system.legacy.shape.xxxl,
    cornerShape: CORNER_SHAPE,
    '@media screen and (max-width: 768px)': {
      gap: 0,
      margin: system.legacy.gap.md, // 16px all around margin on smaller screen sizes
      padding: system.legacy.gap.md, // brings total padding between edge and content to 24px
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
