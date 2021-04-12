/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {Menu, MenuItem} from '@workday/canvas-kit-labs-react/menu';
import {Popper} from '@workday/canvas-kit-react/popup';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {colors, space, borderRadius} from '@workday/canvas-kit-react/tokens';

const containerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 400,
  height: 400,
};

const innerContainerStyles: React.CSSProperties = {
  overflow: 'hidden',

  width: 200,
  height: 200,
  padding: space.m,

  border: `1px solid ${colors.blueberry500}`,
  borderRadius: borderRadius.l,
};

const squareStyles: React.CSSProperties = {
  position: 'absolute',
  left: 190,
  top: 250,
};

export const CustomPlacement = withSnapshotsEnabled(() => {
  const ownerRef = React.useRef<HTMLDivElement>(null);
  const virtualLeft = 190 + 30; // square offset + red box offset
  const virtualTop = 250 + 30; // square offset + red box offset
  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        {
          'The element with the black square owns the Popper while it is virtually positioned to the red square:'
        }
        <div style={squareStyles} ref={ownerRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
            viewBox="0 0 100 100"
          >
            <path stroke={colors.blackPepper400} d="M0.5 0.5H99.5V99.5H0.5z"></path>
            <path fill={colors.cinnamon400} d="M30 30H70V70H30z"></path>
          </svg>
        </div>
        <Popper
          anchorElement={ownerRef}
          getAnchorClientRect={() => ({
            top: virtualTop,
            left: virtualLeft,
            width: 40,
            height: 40,
            bottom: virtualTop + 40,
            right: virtualLeft + 40,
            x: virtualLeft,
            y: virtualTop,
            toJSON: () => '',
          })}
        >
          <Menu>
            <MenuItem>{'Custom'}</MenuItem>
            <MenuItem>{'Placement'}</MenuItem>
          </Menu>
        </Popper>
      </div>
    </div>
  );
});
