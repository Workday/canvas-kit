/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import styled from '@emotion/styled';
import {spacing} from '@workday/canvas-kit-react-core';
import {type} from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import {AccentIcon} from '@workday/canvas-kit-react-icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {transformationImportIcon} from '@workday/canvas-system-icons-web';

import SidePanel, {SidePanelProps} from '../index';
import README from '../README.md';

export default {
  title: 'Labs|Side Panel/React',
  decorators: [withReadme(README)],
  component: SidePanel,
};

export const LeftSidePanel = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const SidePanelHeader = styled('div')<Pick<SidePanelProps, 'collapsed'>>(
    {
      display: 'flex',
    },
    ({collapsed}) => ({
      alignItems: collapsed ? undefined : 'center',
      justifyContent: collapsed ? 'center' : 'space-between',
      padding: collapsed
        ? `${spacing.s} 0 0 0`
        : `${spacing.m} ${spacing.xxs} ${spacing.m} ${spacing.s}`,
      left: collapsed ? 0 : undefined,
      right: collapsed ? 0 : undefined,
      margin: collapsed ? 'auto' : undefined,
    })
  );

  const heightOffset = 40;

  const buttonStyle = {
    transform: `rotate(${collapsed ? 0 : 180}deg)`,
  };

  const headingStyle = {
    ...type.h4,
    flex: 1,
    margin: `0 ${spacing.s}`,
  };

  return (
    <SidePanel height={`calc(100vh - ${heightOffset * 2}px)`} collapsed={collapsed}>
      <SidePanelHeader collapsed={collapsed}>
        {collapsed ? null : <AccentIcon icon={rocketIcon} />}
        {collapsed ? null : <h4 style={headingStyle}>Left Side Panel</h4>}
        <IconButton
          style={buttonStyle}
          icon={transformationImportIcon}
          aria-label={collapsed ? 'expand navigation pane' : 'collapse navigation pane'}
          onClick={e => {
            setCollapsed(!collapsed);
          }}
        />
      </SidePanelHeader>
      <nav aria-label="navigation pane"></nav>
    </SidePanel>
  );
};

export const RightSidePanel = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const SidePanelHeader = styled('div')<Pick<SidePanelProps, 'collapsed'>>(
    {
      display: 'flex',
    },
    ({collapsed}) => ({
      alignItems: collapsed ? undefined : 'center',
      justifyContent: collapsed ? 'center' : 'space-between',
      padding: collapsed
        ? `${spacing.s} 0 0 0`
        : `${spacing.m} ${spacing.s} ${spacing.m} ${spacing.xxs}`,
      left: collapsed ? 0 : undefined,
      right: collapsed ? 0 : undefined,
      margin: collapsed ? 'auto' : undefined,
    })
  );

  const heightOffset = 40;

  const buttonStyle = {
    transform: `rotate(${collapsed ? 180 : 0}deg)`,
  };

  const headingStyle = {
    ...type.h4,
    flex: 1,
    margin: `0 ${spacing.s}`,
  };

  return (
    <SidePanel
      style={{position: 'absolute', right: 40}}
      height={`calc(100vh - ${heightOffset * 2}px)`}
      collapsed={collapsed}
    >
      <SidePanelHeader collapsed={collapsed}>
        <IconButton
          style={buttonStyle}
          icon={transformationImportIcon}
          aria-label={collapsed ? 'expand navigation pane' : 'collapse navigation pane'}
          onClick={e => {
            setCollapsed(!collapsed);
          }}
        />
        {collapsed ? null : <h4 style={headingStyle}>Right Side Panel</h4>}
      </SidePanelHeader>
      <nav aria-label="navigation pane"></nav>
    </SidePanel>
  );
};
