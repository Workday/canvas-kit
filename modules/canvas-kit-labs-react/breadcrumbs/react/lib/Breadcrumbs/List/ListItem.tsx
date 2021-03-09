/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/core';

import {useRTL} from '../hooks';

export type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

const breadcrumbItemStyles = css({
  display: `flex`,
  alignItems: `center`,
});

export const BreadcrumbsListItem = ({children, ...props}: ListItemProps) => {
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevronLeftSmallIcon : chevronRightSmallIcon;

  return (
    <li css={breadcrumbItemStyles} {...props}>
      {children}
      <SystemIcon
        icon={icon}
        color={colors.licorice200}
        colorHover={colors.licorice200}
        aria-hidden
      />
    </li>
  );
};
