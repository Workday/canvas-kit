/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import withReadme from 'storybook-readme/with-readme';
import {jsx} from '@emotion/core';
import SidePanel, {useSidePanel} from '../index';
import {Button} from '@workday/canvas-kit-react-button';
import {colors, depth} from '@workday/canvas-kit-react-core';
import {type} from '@workday/canvas-kit-labs-react-core';
import {AccentIcon} from '@workday/canvas-kit-react-icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {plusIcon} from '@workday/canvas-system-icons-web';
import README from '../README.md';

export default {
  title: 'Labs|Side Panel/React',
  decorators: [withReadme(README)],
  component: SidePanel,
};

export const Default = () => {
  const height = `calc(100vh - 80px)`;
  const {panelProps, labelProps, controlProps} = useSidePanel({});

  return (
    <SidePanel {...panelProps} height={height}>
      <SidePanel.ToggleButton {...controlProps} />
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: `16px 12px`,
        }}
      >
        <AccentIcon style={{marginRight: 16}} icon={rocketIcon} />
        <h3 {...labelProps} style={{...type.h4, color: colors.licorice500}}>
          Tasks Panel
        </h3>
      </div>
    </SidePanel>
  );
};

export const NoHeaderPermanentlyOpen = () => {
  const height = `calc(100vh - 80px)`;
  const {panelProps, labelProps} = useSidePanel({});

  return (
    <SidePanel height={height} {...panelProps}>
      <span hidden {...labelProps}>
        Tasks Panel
      </span>
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
  const {panelProps, labelProps, controlProps} = useSidePanel({
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
        {...panelProps}
        style={{position: 'absolute', right: 0}}
        origin="right"
        height={`calc(100vh - ${heightOffset * 2}px)`}
      >
        <SidePanel.ToggleButton {...controlProps} />
        <span hidden {...labelProps}>
          Right Panel
        </span>
      </SidePanel>
    </div>
  );
};

export const ExternalControl = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel({
    id: 'sidepanelid1',
    initialExpanded: false,
  });
  const heightOffset = 40;
  return (
    <div style={{display: 'flex', backgroundColor: colors.soap200}}>
      <SidePanel
        as="aside"
        {...panelProps}
        variant={'alternate'}
        height={`calc(100vh - ${heightOffset * 2}px)`}
        onExpandedChange={expanded => {
          console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
        }}
        onStateTransition={state => {
          console.log(`Side Panel is ${state}`);
        }}
      >
        <span hidden {...labelProps}>
          Controlled Panel
        </span>
      </SidePanel>
      <main>
        <div
          style={{
            position: 'absolute',
            ...depth[3],
            borderRadius: 4,
            marginTop: 24,
            left: 400,
            padding: 24,
            width: 320,
            textAlign: 'center',
            backgroundColor: colors.frenchVanilla100,
          }}
        >
          <p>Control from somewhere else</p>
          <Button {...controlProps} role="button" variant={Button.Variant.Primary}>
            Toggle Side Panel
          </Button>
        </div>
      </main>
    </div>
  );
};
