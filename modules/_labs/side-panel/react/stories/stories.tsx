/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {css, jsx} from '@emotion/core';
import SidePanel, {useSidePanel} from '../index';
import {Button} from '@workday/canvas-kit-react-button';
import {colors, depth} from '@workday/canvas-kit-react-core';
import {type} from '@workday/canvas-kit-labs-react-core';
import {AccentIcon} from '@workday/canvas-kit-react-icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {plusIcon} from '@workday/canvas-system-icons-web';

import README from '../README.md';
import {accessibleHide} from '@workday/canvas-kit-react-common';
import {SidePanelTransitionStates} from '../lib/SidePanel';

export default {
  title: 'Labs|Side Panel/React',
  decorators: [withReadme(README)],
  component: SidePanel,
};

export const Default = () => {
  const height = `calc(100vh - 80px)`;
  const {expanded, panelProps, labelProps, buttonProps} = useSidePanel({});
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  const headerStyles = state =>
    css(state === 'expanded' ? {} : accessibleHide, {
      display: 'flex',
      alignItems: 'center',
      padding: `16px 12px`,
    });

  /**
   * This is a typical use case for a side panel. The Side Panel has a toggle button and
   * a header. Together, these three elements make a expandable panel accessible and the
   * useSidePanel hook helps connect the three elements together through prop spreading.
   */
  return (
    <SidePanel {...panelProps} height={height} onStateTransition={setPanelState}>
      <div css={headerStyles(panelState)}>
        <AccentIcon style={{marginRight: 16}} icon={rocketIcon} />
        <h3 {...labelProps} style={{...type.h4, color: colors.licorice500}}>
          Quick Tasks
        </h3>
      </div>
      <SidePanel.ToggleButton {...buttonProps} aria-label="toggle button" />
    </SidePanel>
  );
};

export const NoHeaderPermanentlyOpen = () => {
  const height = `calc(100vh - 80px)`;
  const {panelProps, labelProps} = useSidePanel({});

  /**
   * We're not using buttonProps in this example because while there's a button,
   * it's not controlling the Side Panel. It's meant for some other function.
   *
   * Because we don't have an explicit header, we're using a visually hidden element to
   * label the side panel. This is done by spreading panelProps and labelProps to their
   * respective elements (connects the two via aria-labelledby).
   */
  return (
    <SidePanel height={height} {...panelProps}>
      <SidePanel.HiddenLabel {...labelProps}>Quick Tasks</SidePanel.HiddenLabel>
      <div style={{padding: '16px 24px'}}>
        <Button variant={Button.Variant.Primary} size={Button.Size.Large} icon={plusIcon}>
          Add New
        </Button>
      </div>
    </SidePanel>
  );
};

export const RightSidePanel = () => {
  const heightOffset = 40;
  const {panelProps, buttonProps} = useSidePanel({
    initialExpanded: false,
    id: 'sidepanelid1',
  });

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <SidePanel
        aria-label="navigation pane"
        {...panelProps}
        style={{position: 'absolute', right: 0}}
        origin="right"
        height={`calc(100vh - ${heightOffset * 2}px)`}
      >
        <SidePanel.ToggleButton aria-label="toggle button" {...buttonProps} />
      </SidePanel>
    </div>
  );
};

export const ExternalControl = () => {
  const {panelProps, buttonProps} = useSidePanel({
    id: 'sidepanelid1',
    initialExpanded: false,
  });
  const heightOffset = 40;
  return (
    <div style={{display: 'flex', backgroundColor: colors.soap200}}>
      <div style={{width: 400}}>
        <SidePanel
          aria-label="navigation pane"
          {...panelProps}
          variant={'alternate'}
          height={`calc(100vh - ${heightOffset * 2}px)`}
          onExpandedChange={expanded => {
            console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
          }}
          onStateTransition={state => {
            console.log(`Side Panel is ${state}`);
          }}
        ></SidePanel>
      </div>
      <div>
        <div
          style={{
            ...depth[3],
            borderRadius: 4,
            marginTop: 24,
            padding: 24,
            width: 320,
            textAlign: 'center',
            backgroundColor: colors.frenchVanilla100,
          }}
        >
          <p>Control from somewhere else</p>
          <Button
            aria-label="toggle button"
            role="button"
            aria-expanded="true"
            {...buttonProps}
            variant={Button.Variant.Primary}
          >
            Toggle Side Panel
          </Button>
        </div>
      </div>
    </div>
  );
};
