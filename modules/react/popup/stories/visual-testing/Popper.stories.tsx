import * as React from 'react';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Popup, Popper} from '@workday/canvas-kit-react/popup';
import {colors, space, borderRadius} from '@workday/canvas-kit-react/tokens';

export default {
  title: 'Testing/Popups/Popper',
  component: Popper,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

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

export const CustomPlacement = {
  render: () => {
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
  <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
    <Popper open={true}>
      <Popup.Card style={{animation: 'none'}} width={300} dir="rtl">
        <Popup.CloseIcon aria-label="" />
        <Popup.Heading>למחוק פריט</Popup.Heading>
        <Popup.Body>האם ברצונך למחוק פריט זה</Popup.Body>
      </Popup.Card>
    </Popper>
  </CanvasProvider>
);
