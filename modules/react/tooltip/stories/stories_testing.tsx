import * as React from 'react';
import {Popper, Placement} from '@workday/canvas-kit-react/popup';
import {TooltipContainer, Tooltip, OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {resetIcon} from '@workday/canvas-system-icons-web';
import {Card} from '@workday/canvas-kit-react/card';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {StaticStates} from '@workday/canvas-kit-react/testing';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

export default {
  title: 'Testing/Popups/Tooltip',
};

export const NonInteractive = () => {
  return (
    <Tooltip title="Test">
      <span data-testid="non-interactive">Non-interactive Tooltip</span>
    </Tooltip>
  );
};

export const Overflow = () => {
  return (
    <OverflowTooltip>
      <SecondaryButton data-testid="overflow-tooltip" icon={resetIcon} style={{maxWidth: 200}}>
        Super Mega Ultra Long Content With Max Width On The Button with Icon
      </SecondaryButton>
    </OverflowTooltip>
  );
};

export const Placements = withSnapshotsEnabled(() => {
  const ref = React.useRef<HTMLDivElement>(null);

  const placements: Placement[] = [
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
  ];
  return (
    <div
      style={{
        display: 'inline-block',
        overflow: 'auto',
        padding: 100,
      }}
    >
      <Card
        ref={ref}
        style={{
          width: 300,
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card.Body>
          Target: We set font to sans serif so we don't have to wait for roboto to load
        </Card.Body>
      </Card>
      {placements.map(placement => (
        <Popper
          key={placement}
          placement={placement}
          popperOptions={{
            modifiers: [
              // keep the tooltips from moving - no matter what!
              {name: 'flip', enabled: false},
              {name: 'preventOverflow', enabled: false},
            ],
          }}
          open={true}
          anchorElement={ref}
        >
          <TooltipContainer style={{fontFamily: 'sans-serif'}} transformOrigin={null}>
            {placement}
          </TooltipContainer>
        </Popper>
      ))}
    </div>
  );
});

export const PlacementsFocus = withSnapshotsEnabled(() => {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    document.body.setAttribute('data-whatinput', 'keyboard');
  }, []);

  const placements: Placement[] = [
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
  ];
  return (
    <StaticStates>
      <div
        style={{
          display: 'inline-block',
          overflow: 'auto',
          padding: 100,
        }}
      >
        <SecondaryButton
          style={{
            width: 300,
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}
          className="focus"
          ref={ref}
        >
          <span style={{whiteSpace: 'normal', textOverflow: 'initial', overflow: 'visible'}}>
            Target: We set font to sans serif so we don't have to wait for roboto to load
          </span>
        </SecondaryButton>
        {placements.map(placement => (
          <Popper
            key={placement}
            placement={placement}
            popperOptions={{
              modifiers: [
                // keep the tooltips from moving - no matter what!
                {name: 'flip', enabled: false},
                {name: 'preventOverflow', enabled: false},
              ],
            }}
            open={true}
            anchorElement={ref}
          >
            <TooltipContainer style={{fontFamily: 'sans-serif'}} transformOrigin={null}>
              {placement}
            </TooltipContainer>
          </Popper>
        ))}
      </div>
    </StaticStates>
  );
});
