import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';

import {CSSObject} from '@emotion/core';
import {EmotionCanvasTheme, ErrorType, Themeable, styled} from '@workday/canvas-kit-react-common';
import {Placement, Popper, useCloseOnEscape} from '@workday/canvas-kit-react-popup';
import {colors, borderRadius, inputColors} from '@workday/canvas-kit-react-core';

import {SelectProps} from './Select';
import {buttonBorderWidth} from './SelectBase';
import {MenuPlacement, MenuVisibility} from './types';

interface SelectMenuProps
  extends Themeable,
    React.HTMLAttributes<HTMLUListElement>,
    Pick<SelectProps, 'error'> {
  /**
   * The ref to the anchor button element. Required to anchor the menu.
   */
  buttonRef: React.RefObject<HTMLButtonElement>;
  /**
   * The ref to the underlying menu/listbox element. Use this to imperatively manipulate the menu.
   */
  menuRef?: React.RefObject<HTMLUListElement>;
  /**
   * The function called when the Escape key is pressed while the SelectMenu is the topmost element in the stack.
   */
  onCloseOnEscape?: () => void;
  /**
   * The placement of the SelectMenu relative to its corresponding button.
   * @default 'bottom'
   */
  placement?: MenuPlacement;
  /**
   * If true, automatically flip the SelectMenu to keep it visible if necessary (e.g., if the the SelectMenu would otherwise display below the visible area of the viewport).
   * @default true
   */
  shouldAutoFlip?: boolean;
  /**
   * If true, focus the SelectMenu when it's shown. Set to false if you don't want to focus the SelectMenu automatically (for visual testing purposes, for example).
   * @default true
   */
  shouldAutoFocus?: boolean;
  /**
   * The visibility state of the SelectMenu.
   * @default 'closed'
   */
  visibility?: MenuVisibility;
}

export const menuAnimationDuration = 200;

const menuBorderStyles = (theme: EmotionCanvasTheme, error?: ErrorType): CSSObject => {
  let borderColor = theme.canvas.palette.common.focusOutline;
  let dividerBorderColor = borderColor;
  let dividerBorderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = theme.canvas.palette.error.main;
    dividerBorderColor = borderColor;
  } else if (error === ErrorType.Alert) {
    borderColor = theme.canvas.palette.alert.darkest;
    dividerBorderColor = theme.canvas.palette.alert.main;
    dividerBorderWidth = 2;
  }

  const dividerBorder = `${dividerBorderWidth}px solid ${dividerBorderColor}`;

  return {
    borderColor: borderColor,

    // Render the divider using a pseudo-element
    '&:before': {
      backgroundColor: colors.soap400,
      borderLeft: dividerBorder,
      borderRight: dividerBorder,
      boxSizing: 'border-box',
      content: '""',
      display: 'block',
      height: 1,
      position: 'absolute',
      width: '100%',

      '[data-popper-placement="bottom"] &': {
        top: 0,
      },
      '[data-popper-placement="top"] &': {
        bottom: 0,
      },
    },
  };
};

const menuListBorderStyles = (theme: EmotionCanvasTheme, error?: ErrorType): CSSObject => {
  let borderColor = theme.canvas.palette.common.focusOutline;
  let borderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = theme.canvas.palette.error.main;
  } else if (error === ErrorType.Alert) {
    borderColor = theme.canvas.palette.alert.main;
    borderWidth = 2;
  }

  const border = `${borderWidth}px solid ${borderColor}`;

  return {
    borderLeft: border,
    borderRight: border,

    '[data-popper-placement="bottom"] &': {
      borderBottom: border,
    },
    '[data-popper-placement="top"] &': {
      borderTop: border,
    },
  };
};

const Menu = styled('div')<
  Pick<SelectMenuProps, 'error' | 'theme' | 'visibility'> & {width: number}
>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    boxSizing: 'border-box',
    position: 'relative',
    transition: `opacity ${menuAnimationDuration}ms`,

    '[data-popper-placement="bottom"] &': {
      borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
      borderTop: 0,
    },
    '[data-popper-placement="top"] &': {
      borderRadius: `${borderRadius.m} ${borderRadius.m} 0 0`,
      borderBottom: 0,
    },
  },
  ({error, theme}) => ({
    ...menuBorderStyles(theme, error),
  }),
  ({visibility}) => ({
    opacity: visibility === 'opening' || visibility === 'opened' || visibility === 'close' ? 1 : 0,
  }),
  ({width}) => ({
    width: width,
  })
);

const MenuList = styled('ul')<Pick<SelectProps, 'error' | 'theme'>>(
  {
    listStyle: 'none',
    margin: 0,
    maxHeight: 200,
    outline: 'none',
    overflowY: 'auto',
    padding: 0,
  },
  ({error, theme}) => ({
    ...menuListBorderStyles(theme, error),
  })
);

const generatePopperOptions = (
  props: Pick<SelectMenuProps, 'menuRef' | 'placement' | 'shouldAutoFlip' | 'shouldAutoFocus'>
) => {
  const {menuRef, placement, shouldAutoFlip, shouldAutoFocus} = props;

  let fallbackPlacements: Placement[] = [];
  if (shouldAutoFlip) {
    fallbackPlacements = placement === 'top' ? ['bottom'] : ['top'];
  }

  const modifiers = [
    {
      name: 'flip',
      options: {
        fallbackPlacements,
      },
    },
    {
      name: 'offset',
      options: {
        offset: () => {
          const skidding = 0;

          // Displace menu towards the button to obscure the bottom
          // edge of the button and to create a smooth visual
          // connection between the button and the menu
          const distance = -parseInt(borderRadius.m, 10);

          return [skidding, distance];
        },
      },
    },
    {
      name: 'preventOverflow',
      options: {
        // Ensure the menu stays aligned with its reference (button),
        // even if that means the menu is pushed out of view
        mainAxis: false,
      },
    },
  ];

  return {
    modifiers,
    // TODO: Consider using a more general-purpose focus function here rather
    // than relying on Popper's onFirstUpdate for better control over how
    // focus is managed
    onFirstUpdate: () => {
      if (shouldAutoFocus && menuRef && menuRef.current) {
        menuRef.current.focus();
      }
    },
  };
};

const SelectMenu = ({
  buttonRef,
  children,
  error,
  menuRef,
  onCloseOnEscape,
  placement = 'bottom',
  shouldAutoFlip = true,
  shouldAutoFocus = true,
  visibility = 'closed',
  ...elemProps
}: SelectMenuProps) => {
  const popupRef = React.useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  const handleWidthChange = useCallback(() => {
    if (buttonRef.current && visibility !== 'closed') {
      const newMenuWidth = buttonRef.current.clientWidth + 2 * buttonBorderWidth;
      setWidth(newMenuWidth);
    }
  }, [buttonRef, visibility]);

  useLayoutEffect(() => {
    handleWidthChange();
  }, [handleWidthChange]);

  // TODO: Figure out a better way to handle width changes in the reference button.
  // Seems like we should resize the menu when the reference button width changes, not
  // necessarily when the window resizes. Resizing the menu on window resize addresses
  // the case when `grow = true` and the user resizes the browser window while the
  // menu is opened, but doesn't address cases where the reference button size changes
  // through other means.
  useEffect(() => {
    // Update menu width state on resize to ensure menu resizes as window resizes
    window.addEventListener('resize', handleWidthChange);

    return () => {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, [handleWidthChange]);

  useCloseOnEscape(popupRef, () => onCloseOnEscape?.());

  // TODO: use the useCloseOnOutsideClick hook after it's been modified to handle
  // multiple things happening on the same click. Currently, the hook doesn't
  // support the use case where one Select Menu is activated by clicking on its
  // Select Button while another Select Menu is already active (both Menus are
  // visible instead of the original Menu dismissing). In order to support the
  // correct behavior for now, we're dismissing the Menu on blur instead of
  // using the hook.

  return (
    <Popper
      placement={placement}
      anchorElement={buttonRef}
      popperOptions={generatePopperOptions({
        menuRef,
        placement,
        shouldAutoFlip,
        shouldAutoFocus,
      })}
      ref={popupRef}
    >
      <Menu error={error} visibility={visibility} width={width}>
        <MenuList error={error} ref={menuRef} role="listbox" tabIndex={-1} {...elemProps}>
          {children}
        </MenuList>
      </Menu>
    </Popper>
  );
};

export default SelectMenu;
