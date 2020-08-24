/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {folderCloseIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors} from '@workday/canvas-kit-react-core';

export interface DropdownButtonProps extends IconButtonProps {
  'aria-label': string;
  buttonIcon?: CanvasSystemIcon;
  buttonRef: React.Ref<HTMLButtonElement>;
  toggled: boolean;
}

export const DropdownButton = ({
  buttonIcon = folderCloseIcon,
  buttonRef,
  toggled,
  variant = IconButton.Variant.Plain,
  ...props
}: DropdownButtonProps) => {
  const hasPlainVariant = variant === IconButton.Variant.Plain;
  // gives the plain icon variant a little extra space between the chevron separators
  const customStyles = css(hasPlainVariant ? {margin: '0 1px'} : {});
  return (
    <IconButton
      type="button"
      css={customStyles}
      variant={variant}
      icon={buttonIcon}
      color={colors.licorice200}
      buttonRef={buttonRef}
      toggled={toggled}
      aria-pressed={undefined}
      aria-expanded={toggled}
      aria-haspopup
      aria-controls="menu"
      {...props}
    />
  );
};
