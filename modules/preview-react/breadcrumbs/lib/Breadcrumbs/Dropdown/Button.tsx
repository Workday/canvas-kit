import React from 'react';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';
import {relatedActionsIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors} from '@workday/canvas-kit-react/tokens';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface DropdownButtonProps extends IconButtonProps {
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

export const DropdownButton = createComponent(IconButton)({
  displayName: 'DropdownButton',
  Component: (
    {
      buttonIcon = relatedActionsIcon,
      toggled,
      variant = 'plain',
      ...elemProps
    }: DropdownButtonProps,
    ref,
    Element
  ) => {
    const hasPlainVariant = variant === 'plain';

    return (
      <Element
        ref={ref}
        type="button"
        style={hasPlainVariant ? {margin: '0 1px'} : {}}
        variant={variant}
        icon={buttonIcon}
        color={colors.licorice200}
        toggled={toggled}
        aria-pressed={undefined} // removing aria-pressed from IconButton and opting for aria-expanded
        aria-expanded={toggled}
        aria-haspopup
        aria-controls="menu"
        {...elemProps}
      />
    );
  },
});
