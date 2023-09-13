import React from 'react';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {DeprecatedMenu, DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';
import {styled} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react/tokens';

const Header = styled(DeprecatedMenuItem)({
  fontWeight: type.properties.fontWeights.bold,
});

export const Headers = () => {
  return (
    <DeprecatedMenu>
      <Header isHeader={true}>Sort By</Header>
      <DeprecatedMenuItem icon={checkIcon}>
        <span aria-label="sort by newest">Newest</span>
      </DeprecatedMenuItem>
      <DeprecatedMenuItem>
        <span aria-label="sort by oldest">Oldest</span>
      </DeprecatedMenuItem>
      <Header isHeader={true} hasDivider={true}>
        Display Density
      </Header>
      <DeprecatedMenuItem icon={checkIcon}>
        <span aria-label="display density simple">Simple</span>
      </DeprecatedMenuItem>
      <DeprecatedMenuItem>
        <span aria-label="display density detailed">Detailed</span>
      </DeprecatedMenuItem>
    </DeprecatedMenu>
  );
};
