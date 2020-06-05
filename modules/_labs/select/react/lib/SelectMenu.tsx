import React, {useState, useEffect} from 'react';
import {Rect} from '@popperjs/core';

import {CSSObject, keyframes} from '@emotion/core';
import {
  EmotionCanvasTheme,
  ErrorType,
  Placement,
  Popper,
  Themeable,
  styled,
} from '@workday/canvas-kit-react-common';
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
   * If true, enable animation on the SelectMenu.
   * @default true
   */
  isAnimated: boolean;
  /**
   * If true, automatically flip the SelectMenu to keep it visible if necessary (e.g., if the the SelectMenu would otherwise display below the visible area of the viewport).
   * @default true
   */
  isAutoFlipped: boolean;
  /**
   * If true, focus the SelectMenu when it's shown. Set to false if you don't want to focus the SelectMenu automatically (for visual testing purposes, for example).
   * @default true
   */
  isAutoFocused: boolean;
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

      '[data-popper-placement="bottom-start"] &': {
        top: 0,
      },
      '[data-popper-placement="top-start"] &': {
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

    '[data-popper-placement="bottom-start"] &': {
      borderBottom: border,
    },
    '[data-popper-placement="top-start"] &': {
      borderTop: border,
    },
  };
};

const Menu = styled('div')<
  Pick<SelectMenuProps, 'error' | 'isAnimated' | 'isHiding' | 'theme'> & {width: number}
>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    boxSizing: 'border-box',
    position: 'relative',

    '[data-popper-placement="bottom-start"] &': {
      borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
      borderTop: 0,
    },
    '[data-popper-placement="top-start"] &': {
      borderRadius: `${borderRadius.m} ${borderRadius.m} 0 0`,
      borderBottom: 0,
    },
  },
  ({error, theme}) => ({
    ...menuBorderStyles(theme, error),
  }),
  ({isAnimated}) =>
    isAnimated && {
      animationName: fadeInAnimation,
      animationDuration: `${menuFadeDuration / 1000}s`,
      // Required to prevent the occasional menu flash when the menu
      // fades out
      animationFillMode: 'forwards',
    },
  ({isAnimated, isHiding}) =>
    isAnimated &&
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
  props: Pick<SelectMenuProps, 'isAutoFlipped' | 'isAutoFocused' | 'isFlipped' | 'menuRef'>
) => {
  const {isAutoFlipped, isAutoFocused, isFlipped, menuRef} = props;

  let fallbackPlacements: Placement[] = [];
  if (isAutoFlipped) {
    fallbackPlacements = isFlipped ? ['bottom-start'] : ['top-start'];
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
        offset: ({
          placement,
          reference,
          popper,
        }: {
          placement: Placement;
          reference: Rect;
          popper: Rect;
        }) => {
          // Skid menu along the edge of the button to account
          // for fractional x-positioning of the button (e.g.,
          // if the button is in a horizontally-centered modal)
          // and to ensure proper alignment between the button
          // and the menu
          const skidding = reference.x % 1 === 0 ? 0 : 1;
          // Displace menu towards the button to obscure the bottom
          // edge of the button and to create a smooth visual
          // connection between the button and the menu
          const distance = -parseInt(borderRadius.m, 10);
          return [skidding, distance];
        },
      },
    },
  ];

  return {
    modifiers,
    onFirstUpdate: () => {
      if (isAutoFocused && menuRef && menuRef.current) {
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
    isAnimated,
    isAutoFlipped,
    isAutoFocused,
    isFlipped,
    isHidden,
    isHiding,
    menuRef,
    ...elemProps
  } = props;

  const [width, setWidth] = useState(0);

  const handleWidthChange = () => {
    if (buttonRef.current) {
      const newMenuWidth = buttonRef.current.clientWidth + 2 * buttonBorderWidth;
      setWidth(newMenuWidth);
    }
  };

  useEffect(() => {
    handleWidthChange();
  }, [width]);

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

  // Render nothing if buttonRef.current hasn't been set
  return buttonRef.current ? (
    <Popper
      placement={isFlipped ? 'top-start' : 'bottom-start'}
      open={!isHidden}
      anchorElement={buttonRef.current}
      popperOptions={generatePopperOptions({
        isAutoFlipped,
        isAutoFocused,
        isFlipped,
        menuRef,
      })}
      // zIndex is necessary in order for the menu to be displayed
      // properly if Select is placed within a CK Modal (necessary
      // to override zIndex of 1 for the Modal)
      style={{zIndex: 2}}
    >
      <Menu error={error} isAnimated={isAnimated} isHiding={isHiding} width={width}>
        <MenuList error={error} ref={menuRef} role="listbox" tabIndex={-1} {...elemProps}>
          {children}
        </MenuList>
      </Menu>
    </Popper>
  ) : null;
};

SelectMenu.defaultProps = {
  isAnimated: true,
  isAutoFlipped: true,
  isAutoFocused: true,
  isFlipped: false,
  isHidden: false,
  isHiding: false,
};

export default SelectMenu;
