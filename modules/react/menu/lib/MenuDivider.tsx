import * as React from 'react';
import styled from '@emotion/styled';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';

const Divider = styled('hr')<StyledType>({
  display: 'block',
  height: 1,
  border: 0,
  borderTop: `1px solid ${colors.soap400}`,
  margin: `${space.xxs} 0`,
});

export const MenuDivider = createComponent('hr')({
  displayName: 'Menu.Divider',
  Component(elemProps, ref, Element) {
    return <Divider as={Element} ref={ref} {...elemProps} />;
  },
});
