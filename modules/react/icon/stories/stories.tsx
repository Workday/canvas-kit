import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import * as SystemIcons from '@workday/canvas-system-icons-web';
import {Card} from '@workday/canvas-kit-react/card';
import {CanvasGraphic, CanvasIconTypes} from '@workday/design-assets-types';

import {colors} from '@workday/canvas-kit-react/tokens';
import {AccentIcon, AppletIcon, SystemIcon, SystemIconCircle, Graphic} from '../index';

const graphicExample: CanvasGraphic = {
  name: 'badgeAchievement',
  type: CanvasIconTypes.Graphic,
  svg:
    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="wd-graphic wd-graphic-badge-achievement" focusable="false" role="presentation" viewBox="0 0 50 50"><g fill="none" fill-rule="nonzero" class="wd-icon-container"><circle cx="25" cy="25" r="25" fill="#FFC943"/><path fill="#FF7A45" d="M17 12h23l-4.373 7.5L40 27H17z"/><path fill="#656464" d="M15 12h2v31h-2z"/><circle cx="16" cy="11.5" r="1.5" fill="#656464"/></g></svg>',
  filename: 'wd-graphic-badge-achievement.svg',
  category: '',
  tags: [],
};

storiesOf('Assets/Icon', module)
  .addParameters({component: AccentIcon})
  .addParameters({ReadmePath: 'react/icon'})
  .add('Accent Icon', () => (
    <div className="story">
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
      <AccentIcon icon={shieldIcon} size={80} shouldMirror={true} />
    </div>
  ));

storiesOf('Assets/Icon', module)
  .addParameters({component: AppletIcon})
  .add('Applet Icon', () => (
    <div className="story">
      <AppletIcon icon={benefitsIcon} />
      <AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
      <br />
      <AppletIcon icon={benefitsIcon} size={60} />
      <AppletIcon icon={benefitsIcon} size={60} shouldMirror={true} />
    </div>
  ));
const ImportedSystemIcons = Object.keys(SystemIcons);
storiesOf('Assets/Icon', module)
  .addParameters({component: SystemIcon})
  .add('System Icon', () => (
    <div className="story">
      {ImportedSystemIcons.map(key => {
        // @ts-ignore
        const icon: CanvasSystemIcon = SystemIcons[key];
        return icon.svg ? (
          <Card
            display="inline-flex"
            width={210}
            // style={{
            //   display: 'inline-flex',
            //   margin: '8px',
            //   width: 200,
            //   justifyContent: 'center',
            // }}
            key={icon.name}
          >
            <Card.Body display="flex">
              <div>
                <SystemIcon icon={icon} />

                <p style={{marginBottom: 0}}>{icon.name}Icon</p>
              </div>
            </Card.Body>
          </Card>
        ) : null;
      })}
      {/* <SystemIcon icon={activityStreamIcon} />
      <SystemIcon icon={activityStreamIcon} color={colors.blueberry500} />
      <SystemIcon
        className="custom-class"
        icon={activityStreamIcon}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
      />
      <br />
      <SystemIcon icon={activityStreamIcon} colorHover={colors.cinnamon300} />
      <SystemIcon
        icon={activityStreamIcon}
        color={colors.blueberry500}
        fillHover={colors.chiliMango200}
        accentHover={colors.chiliMango400}
      />
      <SystemIcon
        className="custom-class"
        icon={activityStreamIcon}
        accent={colors.frenchVanilla100}
        fill={colors.blueberry500}
        background={colors.blueberry500}
        fillHover={colors.cantaloupe500}
        accentHover={colors.frenchVanilla100}
        backgroundHover={colors.cantaloupe500}
      />
      <br />
      <SystemIcon icon={activityStreamIcon} size={48} />
      <SystemIconCircle icon={activityStreamIcon} />
      <SystemIconCircle icon={activityStreamIcon} shouldMirror={true} />
      <SystemIconCircle icon={activityStreamIcon} background={colors.blueberry400} />
      <SystemIconCircle
        icon={activityStreamIcon}
        background={colors.blueberry400}
        shouldMirror={true}
      /> */}
    </div>
  ));

storiesOf('Assets/Icon', module)
  .addParameters({component: Graphic})
  .add('Graphic', () => (
    <div className="story">
      <Graphic src={graphicExample} />
      <br />
      <Graphic src={graphicExample} width={80} />
      <div style={{width: 100}}>
        <Graphic src={graphicExample} grow={true} />
      </div>
      <div style={{width: 100}}>
        <Graphic src={graphicExample} grow={true} shouldMirror={true} />
      </div>
    </div>
  ));
