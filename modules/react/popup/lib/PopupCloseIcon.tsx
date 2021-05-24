import React from 'react';

import {xIcon} from '@workday/canvas-system-icons-web';
import {space} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  createComponent,
  StyledType,
  useModelContext,
  createHook,
  changeFocus,
} from '@workday/canvas-kit-react/common';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';

import {PopupModel} from './usePopupModel';
import {PopupModelContext} from './Popup';

const closeIconSpacing = space.xs;
const closeIconSpacingSmall = 10;

export interface PopupCloseIconProps extends IconButtonProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
}

const StyledCloseIcon = styled(IconButton)<StyledType & IconButtonProps>(
  {
    position: 'absolute',
  },
  ({size}) => ({
    right: size === 'small' ? closeIconSpacingSmall : closeIconSpacing,
    top: size === 'small' ? closeIconSpacingSmall : closeIconSpacing,
  })
);

const useCloseButton = createHook(({events, state}: PopupModel) => {
  return {
    onClick: () => {
      events.hide();

      // delay until after state change have happened and changes are flushed to the DOM
      requestAnimationFrame(() => {
        if (state.willReturnFocus?.current) {
          changeFocus((state.returnFocusRef || state.targetRef).current);
        }
      });
    },
  };
});

export const PopupCloseIcon = createComponent('button')({
  displayName: 'Popup.CloseIcon',
  Component: (
    {size = 'medium', children, model, ...elemProps}: PopupCloseIconProps,
    ref,
    Element
  ) => {
    const localModel = useModelContext(PopupModelContext, model);
    const props = useCloseButton(localModel, elemProps, ref);
    return <StyledCloseIcon as={Element} variant="plain" size={size} icon={xIcon} {...props} />;
  },
});
