/** @jsx jsx */
import React from 'react';
import {jsx} from '@emotion/core';

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  return <li role="presentation" {...props} />;
};
