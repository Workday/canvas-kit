/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import withReadme from 'storybook-readme/with-readme';
import {Popper, Placement} from '@workday/canvas-kit-react-common';
import {TooltipContainer} from '@workday/canvas-kit-react-tooltip';
import {Card} from '@workday/canvas-kit-react-card';

import README from '../README.md';

export default {
  title: 'Components|Popups/Tooltip/React/Visual Testing',
  decorators: [withReadme(README)],
  parameters: {
    chromatic: {
      disabled: false,
    },
  },
};

export const Placements = () => {
  const [open, setOpen] = React.useState(false);
  const [ref, setRef] = React.useState<null | Element>(null);
  const [containerElement, setContainerElement] = React.useState<null | Element>(null);

  React.useLayoutEffect(() => {
    setContainerElement(document.querySelector('[data-testid="tooltip-container"]'));
    setRef(document.querySelector('[data-testid="tooltip-target"]'));
    setOpen(true);
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
      data-testid="tooltip-container"
      style={{
        display: 'inline-block',
        overflow: 'auto',
        padding: 100,
      }}
    >
      <Card
        data-testid="tooltip-target"
        style={{
          width: 300,
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Target
      </Card>
      {placements.map(placement =>
        !open ? null : (
          <Popper
            key={placement}
            containerElement={containerElement}
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
};
