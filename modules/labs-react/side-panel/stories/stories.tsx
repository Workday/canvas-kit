/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';
import {jsx} from '@emotion/core';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-labs-react/side-panel';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {colors, depth} from '@workday/canvas-kit-react/tokens';
import {type} from '@workday/canvas-kit-labs-react/tokens';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {plusIcon} from '@workday/canvas-system-icons-web';
import README from '../README.md';
import {SidePanelTransitionStates} from '../lib/SidePanel';

export default {
  title: 'Labs/Side Panel/React',
  decorators: [withReadme(README)],
  component: SidePanel,
};

const height = `calc(100vh - 80px)`;

export const Default = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  return (
    <div style={{height}}>
      <SidePanel {...panelProps} onStateTransition={setPanelState}>
        <SidePanel.ToggleButton {...controlProps} />
        {panelState === 'expanded' && (
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
        )}
      </SidePanel>
    </div>
  );
};

export const NoHeaderPermanentlyOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  return (
    <div style={{height}}>
      <SidePanel {...panelProps}>
        <span hidden {...labelProps}>
          Tasks Panel
        </span>
        <div style={{padding: '16px 24px'}}>
          <PrimaryButton size="large" icon={plusIcon}>
            Add New
          </PrimaryButton>
        </div>
      </SidePanel>
    </div>
  );
};

export const RightSidePanel = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel({
    initialExpanded: false,
    panelId: 'sidepanelid1',
  });

  return (
    <div
      style={{
        position: 'relative',
        height,
      }}
    >
      <SidePanel {...panelProps} style={{position: 'absolute', right: 0}} origin="right">
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
    panelId: 'sidepanelid1',
    initialExpanded: false,
  });
  return (
    <div style={{display: 'flex', backgroundColor: colors.soap200, height}}>
      <SidePanel
        as="aside"
        {...panelProps}
        variant={'alternate'}
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
          <PrimaryButton {...controlProps} role="button">
            Toggle Side Panel
          </PrimaryButton>
        </div>
      </main>
    </div>
  );
};

const steps = [
  {id: 1, name: 'step 1'},
  {id: 2, name: 'step 2'},
  {id: 3, name: 'step 3'},
  {id: 4, name: 'step 4'},
];

export const WithListItems = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  const handleItemKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      setCurrentStep(parseInt(event.currentTarget.id, 10));
    }
  };

  return (
    <div style={{height: '100vh'}}>
      <SidePanel {...panelProps} onStateTransition={setPanelState}>
        <SidePanel.ToggleButton {...controlProps} />
        {panelState === 'expanded' && (
          <div
            style={{
              display: 'flex',
              padding: `16px 12px`,
              flexDirection: 'column',
            }}
          >
            <h3 {...labelProps}>Tasks Panel</h3>
            <ol role="list" style={{listStyle: 'none', margin: 0, padding: 0}}>
              {steps.map(item => {
                return (
                  <li
                    id={`${item.id}`}
                    onKeyDown={handleItemKeyDown}
                    tabIndex={0}
                    style={{
                      fontWeight: currentStep === item.id ? 'bold' : 'normal',
                      padding: '4px',
                      cursor: 'pointer',
                    }}
                    key={item.id}
                    onClick={() => setCurrentStep(item.id)}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </SidePanel>
    </div>
  );
};
