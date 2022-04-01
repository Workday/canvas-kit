import React from 'react';

import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';
// import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
// import {colors, space} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {PillsContext} from './Pill';

export interface PillIconProps extends SystemIconProps {}

export const PillIcon = createComponent('span')({
  displayName: 'Pill.Icon',
  Component: ({size, ...elemProps}: PillIconProps, ref, Element) => {
    const {variant} = React.useContext(PillsContext);

    return (
      <>
        {variant === 'removable' ? (
          <button>
            <SystemIcon size={20} {...elemProps}></SystemIcon>
          </button>
        ) : (
          <SystemIcon size={20} {...elemProps} />
        )}
      </>
    );
  },
});
