/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';
import {CSSObject} from '@emotion/styled';
import withReadme from 'storybook-readme/with-readme';

import {Popper, Placement} from '@workday/canvas-kit-react-popup';
import {xIcon} from '@workday/canvas-system-icons-web';
import {Card} from '@workday/canvas-kit-react-card';
import {IconButton, Button, DeleteButton} from '@workday/canvas-kit-react-button';
import {Tooltip, TooltipContainer, useTooltip} from '@workday/canvas-kit-react-tooltip';

import README from '../README.md';

export default {
  title: 'Components|Popups/Tooltip/React',
  component: Tooltip,
  decorators: [withReadme(README)],
};

export const Default = () => {
  return (
    <Tooltip title="Close">
      <IconButton variant={IconButton.Variant.Circle} icon={xIcon} aria-label="Close" />
    </Tooltip>
  );
};

export const DescribeType = () => {
  return (
    <Tooltip type="describe" title="The service will restart after this action">
      <DeleteButton>Delete</DeleteButton>
    </Tooltip>
  );
};

export const CustomContent = () => {
  return (
    <React.Fragment>
      <Tooltip
        type="describe"
        title={
          <div>
            This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
          </div>
        }
      >
        <Button>Hover Me</Button>
      </Tooltip>

      <p>
        <strong>Note</strong>: Assistive technology will read tooltip content as text-only. Screen
        readers may ignore "describe" tooltips depending on verbosity settings. Consider a different
        way to describe important content.
      </p>
    </React.Fragment>
  );
};

export const UseTooltip = () => {
  const {targetProps, popperProps, tooltipProps} = useTooltip();

  return (
    <React.Fragment>
      <h3>Hover over the icon</h3>
      <IconButton
        variant={IconButton.Variant.Circle}
        icon={xIcon}
        {...targetProps}
        aria-label="Close"
      />
      <Popper placement="top" {...popperProps}>
        <TooltipContainer {...tooltipProps}>Close</TooltipContainer>
      </Popper>
    </React.Fragment>
  );
};

export const Placements = () => {
  const placementStyles: CSSObject = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const createPlacement = (placement: Placement) => {
    return (
      <Tooltip title="Add" placement={placement}>
        <Card
          css={{
            display: 'flex',
            width: 80,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {placement}
        </Card>
      </Tooltip>
    );
  };

  return (
    <div
      css={{
        padding: 100, // give enough room for the tooltips to fit around their targets
        display: 'grid',
        gridTemplateColumns: '80px 320px 80px',
        gridTemplateRows: '80px 320px 80px',
      }}
    >
      <div />
      <div css={{...placementStyles, flexDirection: 'row'}}>
        {['top-start', 'top', 'top-end'].map(createPlacement)}
      </div>
      <div />
      <div css={{...placementStyles, flexDirection: 'column'}}>
        {['left-start', 'left', 'left-end'].map(createPlacement)}
      </div>
      <div />
      <div css={{...placementStyles, flexDirection: 'column'}}>
        {['right-start', 'right', 'right-end'].map(createPlacement)}
      </div>
      <div />
      <div css={{...placementStyles, flexDirection: 'row'}}>
        {['bottom-start', 'bottom', 'bottom-end'].map(createPlacement)}
      </div>
      <div />
    </div>
  );
};
