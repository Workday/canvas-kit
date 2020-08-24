import React from 'react';
import {Popper} from '@workday/canvas-kit-react-popup';

// local components
import {useDropdown} from './hooks';
import {DropdownButton, DropdownButtonProps} from './Button';
import {DropdownMenu} from './Menu';

interface DropdownProps extends Pick<DropdownButtonProps, 'buttonIcon'> {
  buttonAriaLabel: string;
}

export const Dropdown = ({buttonAriaLabel, buttonIcon}: DropdownProps) => {
  // refs
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const activeDropdownItemRef = React.useRef<HTMLLIElement>(null);
  // behaviors
  const {dropdownButtonProps, dropdownMenuProps, popperProps} = useDropdown(
    activeDropdownItemRef,
    buttonRef
  );

  return (
    <>
      <DropdownButton
        aria-label={buttonAriaLabel}
        buttonIcon={buttonIcon}
        {...dropdownButtonProps}
      />
      <Popper placement="bottom-start" {...popperProps}>
        <DropdownMenu {...dropdownMenuProps} />
      </Popper>
    </>
  );
};
