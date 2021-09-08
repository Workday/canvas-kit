import * as React from 'react';
import {Popper, Placement} from '@workday/canvas-kit-react/popup';
import {TooltipContainer, Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Card} from '@workday/canvas-kit-react/card';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {StaticStates} from '@workday/canvas-kit-react/common';

import {withSnapshotsEnabled} from '../../../../utils/storybook';

const fontDelay = 150; // best guess for the font delay to prevent incorrect Chromatic regressions

export default {
  title: 'Testing/React/Popups/Tooltip',
};

export const NonInteractive = () => {
  return (
    <Tooltip title="Test">
      <span data-testid="non-interactive">Non-interactive Tooltip</span>
    </Tooltip>
  );
};

export const Placements = withSnapshotsEnabled(() => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const id = setTimeout(() => {
      setOpen(true);
    });

    return () => {
      clearTimeout(id);
    };
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
        <Card.Body>Target</Card.Body>
      </Card>
      {placements.map(placement =>
        !open ? null : (
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
            open={open}
            anchorElement={ref}
          >
            <TooltipContainer transformOrigin={null}>{placement}</TooltipContainer>
          </Popper>
        )
      )}
    </div>
  );
});

export const PlacementsFocus = withSnapshotsEnabled(() => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    document.body.setAttribute('data-whatinput', 'keyboard');
    const id = setTimeout(() => {
      setOpen(true);
    });

    return () => {
      clearTimeout(id);
    };
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
          Target
        </SecondaryButton>
        {placements.map(placement =>
          !open ? null : (
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
              open={open}
              anchorElement={ref}
            >
              <TooltipContainer transformOrigin={null}>{placement}</TooltipContainer>
            </Popper>
          )
        )}
      </div>
    </StaticStates>
  );
});
