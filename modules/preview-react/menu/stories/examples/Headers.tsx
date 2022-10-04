import React from 'react';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {styled} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react/tokens';

const Header = styled(MenuItem)({
  fontWeight: type.properties.fontWeights.bold,
});

export const Headers = () => {
  return (
    <Menu>
      <Header isHeader={true}>Sort By</Header>
      <MenuItem icon={checkIcon}>
        <span aria-label="sort by newest">Newest</span>
      </MenuItem>
      <MenuItem>
        <span aria-label="sort by oldest">Oldest</span>
      </MenuItem>
      <Header isHeader={true} hasDivider={true}>
        Display Density
      </Header>
      <MenuItem icon={checkIcon}>
        <span aria-label="display density simple">Simple</span>
      </MenuItem>
      <MenuItem>
        <span aria-label="display density detailed">Detailed</span>
      </MenuItem>
    </Menu>
  );
};
