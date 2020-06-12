import React, {useState, useEffect, useLayoutEffect} from 'react';

import {CSSObject, keyframes} from '@emotion/core';
import {EmotionCanvasTheme, ErrorType, Themeable, styled} from '@workday/canvas-kit-react-common';
import {Placement, Popper, useCloseOnEscape} from '@workday/canvas-kit-react-popup';
import {colors, borderRadius, inputColors} from '@workday/canvas-kit-react-core';

import {SelectProps} from './Select';
import {buttonBorderWidth} from './SelectBase';

interface SelectMenuProps
  extends Themeable,
    React.HTMLAttributes<HTMLUListElement>,
    Pick<SelectProps, 'error'> {
  /**
   * The ref to the anchor button element. Required to anchor the menu.
   */
  buttonRef: React.RefObject<HTMLButtonElement>;
  /**
   * If true, flip the SelectMenu so it extends upwards from the button.
   * @default false
   */
  isFlipped: boolean;
  /**
   * If true, hide the SelectMenu.
   * @default false
   */
  isHidden: boolean;
  /**
   * If true, set the SelectMenu to the "is hiding" state.
   * @default false
   */
  isHiding: boolean;
  /**
   * The ref to the underlying menu/listbox element. Use this to imperatively manipulate the menu.
   */
  menuRef?: React.RefObject<HTMLUListElement>;
  /**
   * The function called when the Escape key is pressed while the SelectMenu is the topmost element in the stack.
   */
  onCloseOnEscape?: () => void;
  /**
   * If true, enable animation on the SelectMenu.
   * @default true
   */
  shouldAnimate: boolean;
  /**
   * If true, automatically flip the SelectMenu to keep it visible if necessary (e.g., if the the SelectMenu would otherwise display below the visible area of the viewport).
   * @default true
   */
  shouldAutoFlip: boolean;
  /**
   * If true, focus the SelectMenu when it's shown. Set to false if you don't want to focus the SelectMenu automatically (for visual testing purposes, for example).
   * @default true
   */
  shouldAutoFocus: boolean;
}

const fadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOutAnimation = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

export const menuFadeDuration = 200;

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
  Pick<SelectMenuProps, 'error' | 'isHiding' | 'shouldAnimate' | 'theme'> & {width: number}
>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    boxSizing: 'border-box',
    position: 'relative',

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
  ({shouldAnimate}) =>
    shouldAnimate && {
      animationName: fadeInAnimation,
      animationDuration: `${menuFadeDuration / 1000}s`,
      // Required to prevent the occasional menu flash when the menu
      // fades out
      animationFillMode: 'forwards',
    },
  ({isHiding, shouldAnimate}) =>
    shouldAnimate &&
    isHiding && {
      animationName: fadeOutAnimation,
    },
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
  props: Pick<SelectMenuProps, 'isFlipped' | 'menuRef' | 'shouldAutoFlip' | 'shouldAutoFocus'>
) => {
  const {isFlipped, menuRef, shouldAutoFlip, shouldAutoFocus} = props;

  let fallbackPlacements: Placement[] = [];
  if (shouldAutoFlip) {
    fallbackPlacements = isFlipped ? ['bottom'] : ['top'];
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
    onFirstUpdate: () => {
      if (shouldAutoFocus && menuRef && menuRef.current) {
        menuRef.current.focus();
      }
    },
  };
};

const SelectMenu = (props: SelectMenuProps) => {
  const {
    buttonRef,
    children,
    error,
    isFlipped,
    isHidden,
    isHiding,
    menuRef,
    onCloseOnEscape,
    shouldAnimate,
    shouldAutoFlip,
    shouldAutoFocus,
    ...elemProps
  } = props;

  const popupRef = React.useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  const handleWidthChange = () => {
    if (buttonRef.current && !isHidden) { // Oops, a double-negative - "not is hidden" means "is open", right?
      const newMenuWidth = buttonRef.current.clientWidth + 2 * buttonBorderWidth;
      setWidth(newMenuWidth);
    }
  };

  useLayoutEffect(() => {
    handleWidthChange();
  }, [buttonRef, isHidden]);

  // TODO: Figure out a better way to handle width changes in the reference button.
  // Seems like we should resize the menu when the reference button width changes, not
  // necessarily when the window resizes. Resizing the menu on window resize addresses
  // the case when `grow = true` and the user resizes the browser window while the
  // menu is open, but doesn't address cases where the reference button size changes
  // through other means.
  useEffect(() => {
    // Update menu width state on resize to ensure menu resizes as window resizes
    window.addEventListener('resize', handleWidthChange);

    return () => {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);

  useCloseOnEscape(popupRef, () => onCloseOnEscape?.());

  // TODO: use the useCloseOnOutsideClick hook after it's been modified to handle
  // multiple things happening on the same click. Currently, the hook doesn't
  // support the use case where one Select Menu is activated by clicking on its
  // Select Button while another Select Menu is already active (both Menus are
  // visible instead of the original Menu dismissing). In order to support the
  // correct behavior for now, we're dismissing the Menu on blur instead of
  // using the hook.

  // Make sure we only open the Popper when we know the width of the button element. We need to use
  // `top` and `bottom` instead of `top-start` and `bottom-start` placements because PopperJS
  // incorrectly rounds `start` and `end` modifiers:
  // https://github.com/popperjs/popper-core/blob/38914aae7a2e91715c6eb2b563517082a40cfa64/src/utils/computeOffsets.js#L68-L81
  // This rounding causes problems with browsers that allow subpixel values for elements like
  // Firefox and Edge.
  const open = !isHidden && width !== 0;

  // Render nothing if buttonRef.current hasn't been set
  return buttonRef.current ? (
    <Popper
      placement={isFlipped ? 'top' : 'bottom'}
      open={open}
      anchorElement={buttonRef.current}
      popperOptions={generatePopperOptions({
        isFlipped,
        menuRef,
        shouldAutoFlip,
        shouldAutoFocus,
      })}
      ref={popupRef}
    >
      <Menu error={error} isHiding={isHiding} shouldAnimate={shouldAnimate} width={width}>
        <MenuList error={error} ref={menuRef} role="listbox" tabIndex={-1} {...elemProps}>
          {children}
        </MenuList>
      </Menu>
    </Popper>
  ) : null;
};

SelectMenu.defaultProps = {
  isFlipped: false,
  isHidden: false,
  isHiding: false,
  shouldAnimate: true,
  shouldAutoFlip: true,
  shouldAutoFocus: true,
};

export default SelectMenu;
