import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useModalCard, useModalModel} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const modalCardStencil = createStencil({
  base: {
    margin: cssVar(base.size500, system.space.x10),
    width: px2rem(440),
    border: '0',
    outline: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[5],
    borderRadius: system.shape.xxxl,
    '@media screen and (max-width: 768px)': {
      gap: 0,
      margin: system.gap.md, // 16px all around margin on smaller screen sizes
      padding: system.gap.md, // brings total padding between edge and content to 24px
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
