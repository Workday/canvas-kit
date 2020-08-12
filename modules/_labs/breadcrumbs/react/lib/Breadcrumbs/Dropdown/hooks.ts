import {useContext, useLayoutEffect} from 'react';
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
  // behaviors
  const {targetProps, closePopup, popperProps} = usePopup();
  useCloseOnOutsideClick(popperProps.ref, closePopup);
  useCloseOnEscape(popperProps.ref, closePopup);
  useFocusActiveItemElement(activeDropdownItemRef);

  const handleButtonKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      targetProps.onClick(e as any); // needed to get Cypress to open the menu (but not IRL?)
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
    buttonRef,
    toggled: popperProps.open,
    onKeyDown: handleButtonKeyUp,
    ...targetProps,
  } as Omit<DropdownButtonProps, 'aria-label'>;

  const dropdownMenuProps = {
    'aria-labelledby': uniqueButtonId,
    dropdownItems: dropdownItems,
    activeDropdownItem: activeDropdownItem,
    activeDropdownItemRef: activeDropdownItemRef,
    setActiveDropdownItem: setActiveDropdownItem,
    resetFocus: resetMenuFocus,
  } as DropdownMenuProps;

  return {dropdownButtonProps, dropdownMenuProps, popperProps};
};
