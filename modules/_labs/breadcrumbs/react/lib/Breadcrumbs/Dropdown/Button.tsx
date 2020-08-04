/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';
import {folderCloseIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react-core';

interface DropdownButtonProps extends IconButtonProps {
  buttonRef: React.Ref<HTMLButtonElement>;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggled: boolean;
}

export const DropdownButton = ({
  buttonRef,
  setIsDropdownOpen,
  toggled,
  variant = IconButton.Variant.Plain,
  'aria-label': ariaLabel = 'More links',
  ...props
}: DropdownButtonProps) => {
  const hasPlainVariant = variant === IconButton.Variant.Plain;
  // gives the plain icon variant a little extra space between the chevron separators
  const customStyles = css(hasPlainVariant ? {margin: '0 1px'} : {});

  return (
    <IconButton
      css={customStyles}
      variant={variant}
      icon={folderCloseIcon}
      color={colors.licorice200}
      buttonRef={buttonRef}
      toggled={toggled}
      onClick={() => setIsDropdownOpen(!toggled)}
      aria-label={ariaLabel}
      aria-pressed={undefined}
      aria-expanded={toggled}
      aria-haspopup={true}
      aria-controls="menu"
      {...props}
    />
  );
};
