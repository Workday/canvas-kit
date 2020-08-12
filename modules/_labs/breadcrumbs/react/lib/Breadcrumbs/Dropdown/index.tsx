import React from 'react';
import {Popper} from '@workday/canvas-kit-react-popup';

// local components
import {useDropdown} from './hooks';
import {DropdownButton} from './Button';
import {DropdownMenu} from './Menu';

interface DropdownProps {
  buttonAriaLabel: string;
}

export const Dropdown = ({buttonAriaLabel}: DropdownProps) => {
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
      <DropdownButton aria-label={buttonAriaLabel} {...dropdownButtonProps} />
      <Popper placement="bottom-start" {...popperProps}>
        <DropdownMenu {...dropdownMenuProps} />
      </Popper>
    </>
  );
};
