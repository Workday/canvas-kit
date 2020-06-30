/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {Menu, MenuItem} from '@workday/canvas-kit-labs-react-menu';
import {Popper} from '@workday/canvas-kit-react-popup';
import {withSnapshotsEnabled} from '../../../../utils/storybook';
import {colors} from '@workday/canvas-kit-react-core';

export default withSnapshotsEnabled({
  title: 'Testing|React/Popups/Popper',
});

const styles: React.CSSProperties = {
  overflow: 'hidden',

  width: 180,
  height: 180,
  padding: 12,
  margin: 50,

  border: `1px solid ${colors.blueberry500}`,
  borderRadius: 12,
};

const squareStyles: React.CSSProperties = {
  width: 10,
  height: 10,
  background: colors.chiliMango500,
  borderRadius: 2,
};

export const CustomPlacement = () => {
  return (
    <div style={styles}>
      {
        'This element owns the Popper and has overflow set to hidden. The popup is rendered from here:'
      }
      <div style={squareStyles} />
      <Popper
        anchorElement={null}
        getAnchorClientRect={() => ({
          top: 200,
          left: 200,
          width: 1,
          height: 1,
          bottom: window.innerHeight - 200 - 1,
          right: window.innerWidth - 200 - 1,
          x: 200,
          y: 200,
          toJSON: () => '',
        })}
      >
        <Menu>
          <MenuItem>{'Custom'}</MenuItem>
          <MenuItem>{'Placement'}</MenuItem>
        </Menu>
      </Popper>
    </div>
  );
};
