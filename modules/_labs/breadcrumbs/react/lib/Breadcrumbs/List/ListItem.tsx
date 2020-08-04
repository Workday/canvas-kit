/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react-core';

export interface BCListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const breadcrumbItemStyles = css({
  display: `flex`,
  alignItems: `center`,
});

export const BreadcrumbsListItem = ({children, ...props}: BCListItemProps) => {
  return (
    <li css={breadcrumbItemStyles} {...props}>
      {children}
      <SystemIcon
        icon={chevronRightSmallIcon}
        color={colors.licorice200}
        colorHover={colors.licorice200}
        aria-hidden
      />
    </li>
  );
};
