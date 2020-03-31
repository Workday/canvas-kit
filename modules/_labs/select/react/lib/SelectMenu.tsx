import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import {ErrorType} from '@workday/canvas-kit-react-common';
import {CSSObject, keyframes} from '@emotion/core';
import {colors, borderRadius, inputColors, spacingNumbers} from '@workday/canvas-kit-react-core';
import {SelectProps} from './Select';

interface SelectMenuProps
  extends Pick<SelectProps, 'error' | 'grow'>,
    React.HTMLAttributes<HTMLUListElement> {
  isHiding?: boolean;
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
      content: '""',
      display: 'block',
      height: 1,
      borderLeft: dividerBorder,
      borderRight: dividerBorder,
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
    borderBottom: border,
    borderLeft: border,
    borderRight: border,
  };
};

const Menu = styled('div')<Pick<SelectProps, 'error' | 'grow'> & Pick<SelectMenuProps, 'isHiding'>>(
  {
    animationName: fadeInAnimation,
    animationDuration: `${menuFadeDuration / 1000}s`,
    // Required to prevent the occasional menu flash when the menu
    // fades out
    animationFillMode: 'forwards',
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${inputColors.border}`,
    borderRadius: `0 0 ${borderRadius.m} ${borderRadius.m}`,
    borderTop: 0,
    boxSizing: 'border-box',
    minWidth: 280,
    position: 'absolute',
    // Offset the menu by the height of the select (spacingNumbers.xl)
    // minus the borderRadius of the select (borderRadius.m)
    top: `${spacingNumbers.xl - parseInt(borderRadius.m, 10)}px`,
    zIndex: 1,
  },
  ({error}) => ({
    ...menuBorderCSS(error),
  }),
  ({isHiding}) =>
    isHiding && {
      animationName: fadeOutAnimation,
    },
  ({grow}) =>
    grow && {
      width: '100%',
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

export const SelectMenu = (props: SelectMenuProps) => {
  const {children, error, grow, isHiding, menuRef, ...elemProps} = props;

  return (
    <Menu error={error} grow={grow} isHiding={isHiding}>
      <MenuList error={error} ref={menuRef} role="listbox" tabIndex={-1} {...elemProps}>
        {children}
      </MenuList>
    </Menu>
  );
};
