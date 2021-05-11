import {useState, useLayoutEffect} from 'react';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {
  usePopupOld,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  PopperProps,
} from '@workday/canvas-kit-react/popup';

import {DropdownButtonProps} from './Button';
import {DropdownMenuProps} from './Menu';
import {Breadcrumb} from '../types';

export const useFocusActiveItemElement = <E extends HTMLElement>(
  activeDropdownItemRef: React.RefObject<E>
) => {
  useLayoutEffect(() => {
    if (activeDropdownItemRef.current) {
      return activeDropdownItemRef.current.focus();
    }
  });
};

const initialActiveItem = {
  index: 0,
  link: '',
  text: '',
  width: 0,
} as Breadcrumb;

interface DropdownPopperProps extends Pick<PopperProps, 'open' | 'anchorElement'> {
  ref: React.RefObject<HTMLDivElement>;
}

interface UseDropdown {
  dropdownButtonProps: Omit<DropdownButtonProps, 'aria-label'>;
  dropdownMenuProps: DropdownMenuProps;
  popperProps: DropdownPopperProps;
}

export const useDropdown = (
  activeDropdownItemRef: React.RefObject<HTMLAnchorElement>,
  ref: React.RefObject<HTMLButtonElement>,
  items: Breadcrumb[],
  buttonId?: string
): UseDropdown => {
  // state
  const [activeDropdownItem, setActiveDropdownItem] = useState(initialActiveItem);
  // behaviors
  const {targetProps, closePopup, popperProps} = usePopupOld();
  useCloseOnOutsideClick(popperProps.ref, closePopup);
  useCloseOnEscape(popperProps.ref, closePopup, ref);
  useFocusActiveItemElement(activeDropdownItemRef);

  const handleButtonKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      setActiveDropdownItem(items[0]);
    }
  };

  const resetMenuFocus = () => {
    ref.current?.focus();
    closePopup();
  };

  const findActiveDropdownItemByIndex = (index: number) => {
    return items.filter(item => item.index === index)[0];
  };

  const toggleActiveItemUp = () => {
    const previousItem = findActiveDropdownItemByIndex(activeDropdownItem.index - 1);
    if (!previousItem) {
      return resetMenuFocus();
    }
    return setActiveDropdownItem(previousItem);
  };

  const toggleActiveItemDown = () => {
    const nextItem = findActiveDropdownItemByIndex(activeDropdownItem.index + 1);
    if (!nextItem) {
      return setActiveDropdownItem(items[0]);
    }
    return setActiveDropdownItem(nextItem);
  };

  const uniqueButtonId = useUniqueId(buttonId);

  const dropdownButtonProps = {
    id: uniqueButtonId,
    ref,
    toggled: popperProps.open,
    onKeyUp: handleButtonKeyUp,
    ...targetProps,
  };

  const dropdownMenuProps = {
    'aria-labelledby': uniqueButtonId,
    dropdownItems: items,
    activeDropdownItem: activeDropdownItem,
    activeDropdownItemRef: activeDropdownItemRef,
    setActiveDropdownItem: setActiveDropdownItem,
    resetFocus: resetMenuFocus,
    toggleActiveItemUp,
    toggleActiveItemDown,
  };

  return {dropdownButtonProps, dropdownMenuProps, popperProps};
};
