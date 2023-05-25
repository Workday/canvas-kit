import React from 'react';
import {PopperController, customViewport} from '../../../../utils/storybook';
import {Placement} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export default {
  title: 'Testing/Popups/Tooltip',
  component: Tooltip,
  parameters: {
    viewport: {
      viewports: customViewport,
      defaultViewport: 'landscape',
    },
  },
};

export const TooltipWithFallbackPlacements = () => {
  const [placement, setPlacement] = React.useState<Placement>('top');
  const [marginLeftBtn, setMarginLeftBtn] = React.useState(0);
  const [marginRightBtn, setMarginRightBtn] = React.useState(0);

  const handlePlacement = (placement: Placement) => {
    setPlacement(placement);
  };

  const handleMarginLeftBtn = (marginLeftBtn: number) => {
    setMarginLeftBtn(marginLeftBtn);
  };

  const handleMarginRightBtn = (marginLeftBtn: number) => {
    setMarginRightBtn(marginLeftBtn);
  };

  return (
    <div style={{height: 1200}} data-testid="scroll-area-fallback-placement">
      <PopperController
        marginLeftBtn={marginLeftBtn}
        marginRightBtn={marginRightBtn}
        placement={placement}
        onSetPlacement={handlePlacement}
        onSetMarginLeftBtn={handleMarginLeftBtn}
        onSetMarginRightBtn={handleMarginRightBtn}
      >
        <Flex width="100%" marginTop={100} justifyContent="center" alignItems="start">
          <React.Fragment>
            <Tooltip
              type="describe"
              placement={placement}
              title={
                <div>
                  This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
                </div>
              }
            >
              <SecondaryButton style={{marginLeft: marginLeftBtn, marginRight: marginRightBtn}}>
                Hover Me
              </SecondaryButton>
            </Tooltip>
          </React.Fragment>
        </Flex>
      </PopperController>
    </div>
  );
};
