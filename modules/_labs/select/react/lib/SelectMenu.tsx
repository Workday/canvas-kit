import * as React from 'react';
import {ErrorType, styled} from '@workday/canvas-kit-react-common';
import {CSSObject, keyframes} from '@emotion/core';
import {colors, borderRadius, inputColors} from '@workday/canvas-kit-react-core';
import {SelectProps} from './Select';

interface SelectMenuProps
  extends React.HTMLAttributes<HTMLUListElement>,
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

const menuBorderCSS = (error?: ErrorType): CSSObject => {
  let borderColor = inputColors.focusBorder;
  let dividerBorderColor = borderColor;
  let dividerBorderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = inputColors.error.border;
    dividerBorderColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    borderColor = colors.cantaloupe600;
    dividerBorderColor = inputColors.warning.border;
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

      '[data-popper-placement^="bottom-start"] &': {
        top: 0,
      },
      '[data-popper-placement^="top-start"] &': {
        bottom: 0,
      },
    },
  };
};

const menuListBorderCSS = (error?: ErrorType): CSSObject => {
  let borderColor = inputColors.focusBorder;
  let borderWidth = 1;

  if (error === ErrorType.Error) {
    borderColor = inputColors.error.border;
  } else if (error === ErrorType.Alert) {
    borderColor = inputColors.warning.border;
    borderWidth = 2;
  }

  const border = `${borderWidth}px solid ${borderColor}`;

  return {
    borderLeft: border,
    borderRight: border,

    '[data-popper-placement^="bottom-start"] &': {
      borderBottom: border,
    },
    '[data-popper-placement^="top-start"] &': {
      borderTop: border,
    },
  };
};

const Menu = styled('div')<Pick<SelectMenuProps, 'error' | 'isAnimated' | 'isHiding'>>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    boxSizing: 'border-box',
    position: 'relative',

    '[data-popper-placement^="bottom-start"] &': {
      borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
      borderTop: 0,
    },
    '[data-popper-placement^="top-start"] &': {
      borderRadius: `${borderRadius.m} ${borderRadius.m} 0 0`,
      borderBottom: 0,
    },
  },
  ({error}) => ({
    ...menuBorderCSS(error),
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

const MenuList = styled('ul')<Pick<SelectProps, 'error'>>(
  {
    listStyle: 'none',
    margin: 0,
    maxHeight: 200,
    overflowY: 'auto',
    padding: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  ({error}) => ({
    ...menuListBorderCSS(error),
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
