import React from 'react';
import {Popper} from '@workday/canvas-kit-react-popup';

// local components
import {useDropdown} from './hooks';
import {DropdownButton} from './Button';
import {DropdownMenu} from './Menu';

export const Dropdown = () => {
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
      <DropdownButton {...dropdownButtonProps} />
      <Popper placement="bottom-start" {...popperProps}>
        <DropdownMenu {...dropdownMenuProps} />
      </Popper>
    </>
  );
};
