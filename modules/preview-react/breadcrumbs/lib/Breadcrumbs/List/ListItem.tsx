import React from 'react';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {useRTL} from '../hooks';
import {Flex} from '@workday/canvas-kit-react/layout';

export type ListItemProps = React.HTMLAttributes<HTMLLIElement>;

export const BreadcrumbsListItem = ({children, ...props}: ListItemProps) => {
  const {shouldUseRTL} = useRTL();
  const icon = shouldUseRTL ? chevronLeftSmallIcon : chevronRightSmallIcon;

  return (
    <Flex as="li" alignItems="center" {...props}>
      {children}
      <SystemIcon
        icon={icon}
        size={24}
        color={colors.licorice200}
        colorHover={colors.licorice200}
        aria-hidden
      />
    </Flex>
  );
};
