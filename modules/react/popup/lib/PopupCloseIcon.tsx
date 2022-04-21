import React from 'react';

import {xIcon} from '@workday/canvas-system-icons-web';
import {
  styled,
  createSubcomponent,
  StyledType,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {TertiaryButton} from '@workday/canvas-kit-react/button';

import {usePopupCloseButton, usePopupModel} from './hooks';

const closeIconSpacing = 4;

<<<<<<< HEAD
export interface PopupCloseIconProps extends ExtractProps<typeof IconButton, never> {}
=======
export interface PopupCloseIconProps extends ExtractProps<typeof TertiaryButton, never> {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: PopupModel;
}
>>>>>>> 66707760f9a668fff661c61bf664b57eb86983c5

const StyledCloseIcon = styled(TertiaryButton)<StyledType & PopupCloseIconProps>(
  {
    position: 'absolute',
  },
  ({size}) => ({
    right: closeIconSpacing,
    top: closeIconSpacing,
  })
);

export const PopupCloseIcon = createSubcomponent('button')({
  displayName: 'Popup.CloseIcon',
<<<<<<< HEAD
  modelHook: usePopupModel,
  elemPropsHook: usePopupCloseButton,
})<PopupCloseIconProps>(({size = 'medium', children, ...elemProps}, Element) => {
  return <StyledCloseIcon as={Element} variant="plain" size={size} icon={xIcon} {...elemProps} />;
=======
  Component: (
    {size = 'medium', children, model, ...elemProps}: PopupCloseIconProps,
    ref,
    Element
  ) => {
    const localModel = useModelContext(PopupModelContext, model);
    const props = usePopupCloseButton(localModel, elemProps, ref);
    return <StyledCloseIcon as={Element} size={size} icon={xIcon} {...props} />;
  },
>>>>>>> 66707760f9a668fff661c61bf664b57eb86983c5
});
