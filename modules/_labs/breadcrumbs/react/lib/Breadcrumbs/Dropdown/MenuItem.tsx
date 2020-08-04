/** @jsx jsx */
import React, {forwardRef} from 'react';
import {css, jsx} from '@emotion/core';
import {colors, commonColors, spacing, type, typeColors} from '@workday/canvas-kit-react-core';

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  ref: React.RefObject<HTMLLIElement> | null;
}

const dropdownMenuItemStyles = css({
  ...type.body,
  alignItems: 'center',
  boxSizing: 'border-box',
  color: colors.blackPepper300,
  cursor: 'pointer',
  display: 'flex',
  padding: `${spacing.xxs} ${spacing.s}`,
  transition: 'background-color color 80ms',
  '&:hover': {
    backgroundColor: commonColors.hoverBackground,
  },
  '&:focus': {
    backgroundColor: commonColors.focusBackground,
    color: typeColors.inverse,
    outline: 'none',
  },
});

export const DropdownMenuItem = forwardRef((props: DropdownMenuItemProps, ref) => {
  return <li ref={ref} role="none" tabIndex={0} css={dropdownMenuItemStyles} {...props} />;
});
