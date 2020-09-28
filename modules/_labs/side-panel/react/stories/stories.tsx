/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import SidePanel from '../index';
import {Button} from '@workday/canvas-kit-react-button';
import {colors, depth} from '@workday/canvas-kit-react-core';

import README from '../README.md';

export default {
  title: 'Labs|Side Panel/React',
  decorators: [withReadme(README)],
  component: SidePanel,
};

export const Default = () => {
  const heightOffset = 40;

  return (
    <SidePanel
      height={`calc(100vh - ${heightOffset * 2}px)`}
      onCollapsedChange={collapsed => {
        console.log(`collapsed state is: ${collapsed ? 'true' : 'false'}`);
      }}
      onStateChange={internalState => {
        console.log(`Side Panel is ${internalState}`);
      }}
    ></SidePanel>
  );
};

export const RightSidePanel = () => {
  const heightOffset = 40;

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <SidePanel
        style={{position: 'absolute', right: 0}}
        defaultCollapsed
        origin="right"
        height={`calc(100vh - ${heightOffset * 2}px)`}
        onCollapsedChange={collapsed => {
          console.log(`collapsed state is: ${collapsed ? 'true' : 'false'}`);
        }}
        onStateChange={internalState => {
          console.log(`Side Panel is ${internalState}`);
        }}
      ></SidePanel>
    </div>
  );
};

export const ControlledSidePanel = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const heightOffset = 40;
  return (
    <div style={{display: 'flex', backgroundColor: colors.soap200}}>
      <div style={{width: 400}}>
        <SidePanel
          variant={'alternate'}
          collapsed={collapsed}
          height={`calc(100vh - ${heightOffset * 2}px)`}
          onCollapsedChange={collapsed => {
            console.log(`collapsed state is: ${collapsed ? 'true' : 'false'}`);
          }}
          onStateChange={internalState => {
            console.log(`Side Panel is ${internalState}`);
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
          <p>Controlled Side Panel</p>
          <Button
            variant={Button.Variant.Primary}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {`${collapsed ? 'Expand' : 'Collapse'} Side Panel`}
          </Button>
        </div>
      </div>
    </div>
  );
};
