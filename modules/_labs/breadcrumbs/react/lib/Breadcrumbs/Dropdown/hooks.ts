import {useContext, useLayoutEffect, useState} from 'react';
import {useUniqueId} from '@workday/canvas-kit-react-common';
import {usePopup, useCloseOnOutsideClick, useCloseOnEscape} from '@workday/canvas-kit-react-popup';

import {DropdownContext} from './Provider';
import {DropdownMenuProps} from './Menu';
import {DropdownButtonProps} from './Button';

export const useFocusActiveItemElement = <E extends HTMLElement>(
  activeDropdownItemRef: React.RefObject<E>
) => {
  useLayoutEffect(() => {
    if (activeDropdownItemRef.current) {
      return activeDropdownItemRef.current.focus();
    }
  });
};

export const useDropdown = (
  activeDropdownItemRef: React.RefObject<HTMLLIElement>,
  buttonRef: React.RefObject<HTMLButtonElement>,
  buttonId: string = ''
) => {
  // state
  const {activeDropdownItem, dropdownItems, setActiveDropdownItem} = useContext(DropdownContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // behaviors
  const {targetProps, closePopup, popperProps} = usePopup();
  useCloseOnOutsideClick(popperProps.ref, closePopup);
  useCloseOnEscape(popperProps.ref, closePopup);
  useFocusActiveItemElement(activeDropdownItemRef);

  const handleButtonKeyUp = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter') {
      setIsDropdownOpen(true);
      setActiveDropdownItem(dropdownItems[0]);
    }
  };

  const resetMenuFocus = () => {
    buttonRef.current?.focus();
    closePopup();
  };

  const uniqueButtonId = useUniqueId(buttonId);

  const dropdownButtonProps = {
    id: uniqueButtonId,
    'aria-label': 'more links',
    buttonRef,
    setIsDropdownOpen,
    toggled: popperProps.open,
    onKeyUp: handleButtonKeyUp,
    ...targetProps,
  } as DropdownButtonProps;

  const dropdownMenuProps = {
    'aria-labelledby': uniqueButtonId,
    dropdownItems: dropdownItems,
    activeDropdownItem: activeDropdownItem,
    activeDropdownItemRef: activeDropdownItemRef,
    setActiveDropdownItem: setActiveDropdownItem,
    resetFocus: resetMenuFocus,
  } as DropdownMenuProps;

  console.log('popperprops', popperProps);
  console.log('targetprops', targetProps);
  return {dropdownButtonProps, dropdownMenuProps, popperProps};
};
