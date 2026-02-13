import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {xIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {mergeStyles} from '../../layout';
import {usePopupCloseButton, usePopupModel} from './hooks';

export interface PopupCloseIconProps extends ExtractProps<typeof TertiaryButton, never> {}

export const popupCloseIconStencil = createStencil({
  base: {
    position: 'absolute',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    insetInlineEnd: cssVar(system.padding.xs, system.space.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    top: cssVar(system.padding.xs, system.space.x1),
  },
});

export const PopupCloseIcon = createSubcomponent('button')({
  displayName: 'Popup.CloseIcon',
  modelHook: usePopupModel,
  elemPropsHook: usePopupCloseButton,
})<PopupCloseIconProps>(({children, ...elemProps}, Element) => {
  return (
    <TertiaryButton
      as={Element}
      size="medium"
      icon={xIcon}
      type="button"
      {...mergeStyles(elemProps, popupCloseIconStencil())}
    />
  );
});
