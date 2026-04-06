import * as React from 'react';
import styled from '@emotion/styled';

import {Flex} from '@workday/canvas-kit-react/layout';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';

import {AccentIcon, AppletIcon, SystemIcon, SystemIconCircle, Graphic} from '../../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const graphicExample: CanvasGraphic = {
  name: 'badgeAchievement',
  type: CanvasIconTypes.Graphic,
  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="wd-graphic wd-graphic-badge-achievement" focusable="false" role="presentation" viewBox="0 0 50 50"><g fill="none" fill-rule="nonzero" class="wd-icon-container"><circle cx="25" cy="25" r="25" fill="#FFC943"/><path fill="#FF7A45" d="M17 12h23l-4.373 7.5L40 27H17z"/><path fill="#656464" d="M15 12h2v31h-2z"/><circle cx="16" cy="11.5" r="1.5" fill="#656464"/></g></svg>',
  filename: 'wd-graphic-badge-achievement.svg',
  category: '',
  tags: [],
};

const styleOverrides = {
  container: createStyles({
    flexDirection: 'row',
    alignItems: 'center',
    gap: system.space.x4,
  }),
  systemIconStyles: createStyles({
    background: system.color.static.red.softer,
  }),
};

export const Overview = () => (
  <Flex cs={styleOverrides.container}>
    <AccentIcon icon={shieldIcon} />
    <AppletIcon icon={benefitsIcon} />
    <SystemIcon icon={activityStreamIcon} cs={styleOverrides.systemIconStyles} />
    <SystemIconCircle icon={activityStreamIcon} />
    <Graphic src={graphicExample} />
  </Flex>
);
