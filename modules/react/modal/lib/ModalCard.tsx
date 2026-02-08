import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useModalCard, useModalModel} from './hooks';

export interface ModalCardProps extends ExtractProps<typeof Popup.Card, never> {}

export const modalCardStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    margin: cssVar(base.size500, system.space.x10),
    width: px2rem(440),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderWidth: cssVar(base.size0, system.space.zero),
    outline: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[5],
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.xxxl, system.shape.x6),
    '@media screen and (max-width: 768px)': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      gap: cssVar(system.gap.none, system.space.zero),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      margin: cssVar(system.padding.md, system.space.x4), // 16px all around margin on smaller screen sizes
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      padding: cssVar(system.padding.md, system.space.x4), // brings total padding between edge and content to 24px
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
