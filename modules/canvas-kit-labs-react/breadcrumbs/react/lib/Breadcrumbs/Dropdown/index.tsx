import React from 'react';
import {Breadcrumb} from '../types';
import {Popper} from '@workday/canvas-kit-react/popup';

import {useRTL} from '../hooks';
import {useDropdown} from './hooks';
import {DropdownButton, DropdownButtonProps} from './Button';
import {DropdownMenu} from './Menu';

export interface DropdownProps extends Pick<DropdownButtonProps, 'buttonIcon'> {
  buttonAriaLabel: string;
  items?: Breadcrumb[];
}

export const Dropdown = ({buttonAriaLabel, buttonIcon, items = []}: DropdownProps) => {
  // refs
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const activeDropdownItemRef = React.useRef<HTMLAnchorElement>(null);
  // behaviors
  const {dropdownButtonProps, dropdownMenuProps, popperProps} = useDropdown(
    activeDropdownItemRef,
    buttonRef,
    items
  );
  const {shouldUseRTL} = useRTL();
  const placement = shouldUseRTL ? 'bottom-end' : 'bottom-start';

  return (
    <>
      <DropdownButton
        aria-label={buttonAriaLabel}
        buttonIcon={buttonIcon}
        {...dropdownButtonProps}
      />
      <Popper placement={placement} {...popperProps}>
        <DropdownMenu {...dropdownMenuProps} />
      </Popper>
    </>
  );
};
