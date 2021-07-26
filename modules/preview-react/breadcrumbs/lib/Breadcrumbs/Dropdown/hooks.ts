import {useState, useLayoutEffect} from 'react';
import {useUniqueId, changeFocus} from '@workday/canvas-kit-react/common';
import {
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
  useReturnFocus,
  usePopupTarget,
  usePopupPopper,
} from '@workday/canvas-kit-react/popup';

import {DropdownButtonProps} from './Button';
import {DropdownMenuProps} from './Menu';
import {Breadcrumb} from '../types';

export const useFocusActiveItemElement = <E extends HTMLElement>(
  activeDropdownItemRef: React.RefObject<E>
) => {
  useLayoutEffect(() => {
    console.log('useFocusActiveItem');
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

interface UseDropdown {
  dropdownButtonProps: Omit<DropdownButtonProps, 'aria-label'>;
  dropdownMenuProps: DropdownMenuProps;
  popperProps: ReturnType<typeof usePopupPopper>;
}

export const useDropdown = (
  activeDropdownItemRef: React.RefObject<HTMLAnchorElement>,
  items: Breadcrumb[],
  buttonId?: string
): UseDropdown => {
  // state
  const [activeDropdownItem, setActiveDropdownItem] = useState(initialActiveItem);
  // behaviors
  const model = usePopupModel({
    initialFocusRef: activeDropdownItemRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useReturnFocus(model);
  useFocusActiveItemElement(activeDropdownItemRef);

  const handleButtonKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      setActiveDropdownItem(items[0]);
    }
  };

  const resetMenuFocus = () => {
    model.events.hide();
    changeFocus(model.state.targetRef.current);
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

  const dropdownButtonProps = usePopupTarget(model, {
    id: uniqueButtonId,
    toggled: model.state.visibility !== 'hidden',
    onKeyUp: handleButtonKeyUp,
  });

  const dropdownMenuProps = {
    'aria-labelledby': uniqueButtonId,
    dropdownItems: items,
    activeDropdownItem,
    activeDropdownItemRef,
    setActiveDropdownItem,
    resetFocus: resetMenuFocus,
    toggleActiveItemUp,
    toggleActiveItemDown,
  };

  const popperProps = usePopupPopper(model);

  return {dropdownButtonProps, dropdownMenuProps, popperProps};
};
