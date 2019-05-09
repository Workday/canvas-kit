/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {colors} from '@workday/canvas-kit-react-core';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';

import {AccentIcon, AppletIcon, SystemIcon, Graphic} from './index';
import README from './README.md';

const graphicExample: CanvasGraphic = {
  name: 'badgeAchievement',
  type: CanvasIconTypes.Graphic,
  svg:
    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="wd-graphic wd-graphic-badge-achievement" focusable="false" role="presentation" viewBox="0 0 50 50"><g fill="none" fill-rule="nonzero" class="wd-icon-container"><circle cx="25" cy="25" r="25" fill="#FFC943"/><path fill="#FF7A45" d="M17 12h23l-4.373 7.5L40 27H17z"/><path fill="#656464" d="M15 12h2v31h-2z"/><circle cx="16" cy="11.5" r="1.5" fill="#656464"/></g></svg>',
  filename: 'wd-graphic-badge-achievement.svg',
  category: '',
  tags: [],
};

storiesOf('Canvas Kit/Icon', module)
  .addDecorator(withReadme(README))
  .add('Accent Icon', () => (
    <div className="story">
      <h1 className="section-label">Accent Icon</h1>
      <AccentIcon icon={shieldIcon} />
      <AccentIcon icon={shieldIcon} color={colors.pomegranate500} />
      <span
        style={{
          backgroundColor: colors.blueberry500,
          display: 'inline-block',
          verticalAlign: 'top',
        }}
      >
        <AccentIcon icon={shieldIcon} color={colors.frenchVanilla100} transparent={true} />
      </span>
      <br />
      <AccentIcon icon={shieldIcon} size={80} />
    </div>
  ))
  .add('Applet Icon', () => (
    <div className="story">
      <h1 className="section-label">Applet Icon</h1>
      <AppletIcon icon={benefitsIcon} />
      <AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
      <br />
      <AppletIcon icon={benefitsIcon} size={60} />
    </div>
  ))
  .add('System Icon', () => (
    <div className="story">
      <h1 className="section-label">System Icon</h1>
      <SystemIcon icon={activityStreamIcon} />
      <SystemIcon icon={activityStreamIcon} color={colors.blueberry500} />
      <SystemIcon
        className="custom-class"
        icon={activityStreamIcon}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
      <br />
      <SystemIcon icon={activityStreamIcon} size={48} />
    </div>
  ))
  .add('Graphic', () => (
    <div className="story">
      <h1 className="section-label">Graphic</h1>
      <Graphic src={graphicExample} />
      <br />
      <Graphic src={graphicExample} width={80} />
      <div style={{width: 100}}>
        <Graphic src={graphicExample} grow={true} />
      </div>
    </div>
  ));
