import * as React from 'react';
import {CSSObject, keyframes} from '@emotion/core';
import {EmotionCanvasTheme, ErrorType, Themeable, styled} from '@workday/canvas-kit-react-common';
import {colors, borderRadius, inputColors, spacingNumbers} from '@workday/canvas-kit-react-core';
import {SelectProps} from './Select';

interface SelectMenuProps
  extends Themeable,
    React.HTMLAttributes<HTMLUListElement>,
    Pick<SelectProps, 'error'> {
  /**
   * If true, enable animation on the SelectMenu.
   * @default true
   */
  isAnimated: boolean;
  /**
   * If true, set the SelectMenu to the "is hiding" state.
   * @default false
   */
  isHiding: boolean;
  /**
   * The ref to the underlying menu/listbox element. Use this to imperatively manipulate the menu.
   */
  menuRef?: React.Ref<HTMLUListElement>;
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
      content: '""',
      display: 'block',
      height: 1,
      borderLeft: dividerBorder,
      borderRight: dividerBorder,
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
    borderBottom: border,
    borderLeft: border,
    borderRight: border,
  };
};

const Menu = styled('div')<Pick<SelectMenuProps, 'error' | 'isAnimated' | 'isHiding' | 'theme'>>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
    borderTop: 0,
    boxSizing: 'border-box',
    position: 'absolute',
    // Offset the menu by the height of the select (spacingNumbers.xl)
    // minus the borderRadius of the select (borderRadius.m)
    top: `${spacingNumbers.xl - parseInt(borderRadius.m, 10)}px`,
    width: '100%',
    zIndex: 1,
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
    }
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

const SelectMenu = (props: SelectMenuProps) => {
  const {children, error, isAnimated, isHiding, menuRef, ...elemProps} = props;

  return (
    <Menu error={error} isAnimated={isAnimated} isHiding={isHiding}>
      <MenuList error={error} ref={menuRef} role="listbox" tabIndex={-1} {...elemProps}>
        {children}
      </MenuList>
    </Menu>
  );
};

SelectMenu.defaultProps = {
  isAnimated: true,
  isHiding: false,
};

export default SelectMenu;
