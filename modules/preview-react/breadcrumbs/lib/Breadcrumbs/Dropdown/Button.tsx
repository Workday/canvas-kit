import React from 'react';
import {TertiaryButton, TertiaryButtonProps} from '@workday/canvas-kit-react/button';
import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface DropdownButtonProps extends TertiaryButtonProps {
  /**
   * The accessibility label for the button
   */
  'aria-label': string;
  /**
   * The Canvas System Icon for the button
   *
   * @default relatedActionsIcon
   */
  buttonIcon?: CanvasSystemIcon;
  /**
   * The boolean to determine whether the button should be in a 'toggled' state
   */
  toggled: boolean;
}

export const DropdownButton = createComponent(TertiaryButton)({
  displayName: 'DropdownButton',
  Component: (
    {
      buttonIcon = relatedActionsIcon,
      variant = undefined,
      toggled,
      ...elemProps
    }: DropdownButtonProps,
    ref,
    Element
  ) => {
    return (
      <Element
        ref={ref}
        type="button"
        variant={variant}
        icon={buttonIcon}
        aria-pressed={undefined} // removing aria-pressed from button and opting for aria-expanded
        aria-expanded={toggled}
        aria-haspopup
        aria-controls="menu"
        size="small"
        {...elemProps}
      />
    );
  },
});
