/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Popper, Placement} from '@workday/canvas-kit-react-common';
import {xIcon} from '@workday/canvas-system-icons-web';
import {Card} from '@workday/canvas-kit-react-card';
import {IconButton} from '@workday/canvas-kit-react-button';
import {Tooltip, useTooltip} from '@workday/canvas-kit-react-tooltip';

import README from '../README.md';

storiesOf('Components|Popups/Tooltip/React', module)
  .addParameters({component: Tooltip})
  .addDecorator(withReadme(README))
  .add('Default', () => {
    const {targetProps, popperProps, tooltipProps} = useTooltip();

    return (
      <>
        <h3>Hover over the icon</h3>
        <IconButton
          variant={IconButton.Variant.Circle}
          icon={xIcon}
          aria-label="Close"
          {...targetProps}
        />
        <Popper placement="top" {...popperProps}>
          <Tooltip {...tooltipProps}>Close</Tooltip>
        </Popper>
      </>
    );
  })
  .add('Placements', () => {
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
      <div style={{width: 502, height: 502}}>
        <div
          data-testid="tooltip-container"
          style={{
            width: 300,
            height: 300,
            border: '1px solid gray',
            overflow: 'auto',
            padding: 100,
          }}
        >
          <Card
            data-testid="tooltip-target"
            style={{
              width: 298,
              height: 298,
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
                  modifiers: {flip: {enabled: false}},
                }}
                open={open}
                anchorElement={ref}
              >
                <Tooltip>{placement}</Tooltip>
              </Popper>
            )
          )}
        </div>
      </div>
    );
  });
