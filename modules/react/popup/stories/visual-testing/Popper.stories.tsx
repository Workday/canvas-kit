import * as React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Popper, Popup} from '@workday/canvas-kit-react/popup';
import {createStyles, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Popups/Popper',
  component: Popper,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const containerStyles = createStyles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: px2rem(400),
  height: px2rem(400),
});

const innerContainerStyles = createStyles({
  overflow: 'hidden',
  width: px2rem(200),
  height: px2rem(200),
  padding: system.padding.xl,
  border: `1px solid ${system.color.border.info.default}`,
  borderRadius: system.shape.md,
});

const squareStyles: React.CSSProperties = {
  position: 'absolute',
  left: 190,
  top: 250,
};

export const CustomPlacement = {
  render: () => {
    const ownerRef = React.useRef<HTMLDivElement>(null);
    const virtualLeft = 190 + 30; // square offset + red box offset
    const virtualTop = 250 + 30; // square offset + red box offset
    return (
      <div className={containerStyles}>
        <div className={innerContainerStyles}>
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
              <path stroke={cssVar(system.color.fg.default)} d="M0.5 0.5H99.5V99.5H0.5z"></path>
              <path fill={cssVar(system.color.fg.danger.default)} d="M30 30H70V70H30z"></path>
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
              <Menu.Card>
                <Menu.List>
                  <Menu.Item>Custom</Menu.Item>
                  <Menu.Item>Placement</Menu.Item>
                </Menu.List>
              </Menu.Card>
            </Menu>
          </Popper>
        </div>
      </div>
    );
  },
};

export const PopperRTL = () => (
  <CanvasProvider dir="rtl">
    <Popper open={true}>
      <Popup.Card dir="rtl" cs={{animation: 'none', width: px2rem(300)}}>
        <Popup.CloseIcon aria-label="" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>האם ברצונך למחוק פריט זה</Popup.Body>
      </Popup.Card>
    </Popper>
  </CanvasProvider>
);
