import * as React from 'react';
import {shieldIcon} from '@workday/canvas-accent-icons-web';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';
import {CanvasIconTypes, CanvasGraphic} from '@workday/design-assets-types';
import {
  AccentIcon,
  AppletIcon,
  SystemIcon,
  SystemIconCircle,
  Graphic,
  graphicImageStencil,
  systemIconCircleStencil,
} from '../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

import {system} from '@workday/canvas-tokens-web';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';

const graphicExample: CanvasGraphic = {
  name: 'badgeAchievement',
  type: CanvasIconTypes.Graphic,
  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="wd-graphic wd-graphic-badge-achievement" focusable="false" role="presentation" viewBox="0 0 50 50"><g fill="none" fill-rule="nonzero" class="wd-icon-container"><circle cx="25" cy="25" r="25" fill="#FFC943"/><path fill="#FF7A45" d="M17 12h23l-4.373 7.5L40 27H17z"/><path fill="#656464" d="M15 12h2v31h-2z"/><circle cx="16" cy="11.5" r="1.5" fill="#656464"/></g></svg>',
  filename: 'wd-graphic-badge-achievement.svg',
  category: '',
  tags: [],
};
const graphicExampleWithURL = {
  url: 'https://wd5.myworkday.com/wday/asset/canvas-graphics-web/5.0.7/wd-graphic-learning-welcome-desktop.svg',
};

export default {
  title: 'Tokens/Icon',
};

const customStyles = createStyles({
  [graphicImageStencil.vars.height]: '105px',
});

export const AccentIconStory = {
  name: 'Accent Icon',
  component: AccentIcon,
  parameters: {ReadmePath: 'react/icon'},
  render: () => (
    <div className="story">
      <AccentIcon icon={shieldIcon} />
      <AccentIcon icon={shieldIcon} color={system.color.static.red.strong} />
      <span
        style={{
          backgroundColor: cssVar(system.color.bg.primary.default),
          display: 'inline-block',
          verticalAlign: 'top',
        }}
      >
        <AccentIcon icon={shieldIcon} color={system.color.fg.inverse} transparent={true} />
      </span>
      <br />
      <AccentIcon icon={shieldIcon} size={80} />
      <AccentIcon icon={shieldIcon} size={80} shouldMirror={true} />
    </div>
  ),
};

export const AppletIconStory = {
  name: 'Applet Icon',
  component: AppletIcon,
  render: () => (
    <div className="story">
      <AppletIcon icon={benefitsIcon} />
      <AppletIcon icon={benefitsIcon} color={AppletIcon.Colors.Pomegranate} />
      <br />
      <AppletIcon icon={benefitsIcon} size={60} />
      <AppletIcon icon={benefitsIcon} size={60} shouldMirror={true} />
    </div>
  ),
};

export const SystemIconStory = {
  name: 'System Icon',
  component: SystemIcon,
  render: () => (
    <div className="story">
      <SystemIcon icon={activityStreamIcon} />
      <SystemIcon icon={activityStreamIcon} color={system.color.static.green.default} />
      <SystemIcon
        icon={activityStreamIcon}
        color={system.color.static.green.default}
        colorHover={system.color.static.green.stronger}
      />
      <SystemIcon
        className="custom-class"
        icon={activityStreamIcon}
        accent={system.color.fg.primary.default}
        fill={system.color.fg.primary.default}
        background={system.color.fg.inverse}
      />
      <br />
      <SystemIcon icon={activityStreamIcon} colorHover={system.color.fg.critical.default} />
      <SystemIcon
        icon={activityStreamIcon}
        color={system.color.static.blue.default}
        fillHover={system.color.static.amber.default}
        accentHover={system.color.static.amber.default}
      />
      <SystemIcon
        className="custom-class"
        icon={activityStreamIcon}
        accent={system.color.static.blue.default}
        fill={system.color.static.blue.default}
        background={system.color.static.blue.default}
        fillHover={system.color.static.amber.default}
        accentHover={system.color.static.blue.default}
        backgroundHover={system.color.static.amber.default}
      />
      <br />
      <SystemIcon icon={activityStreamIcon} size={48} />
      <SystemIconCircle icon={activityStreamIcon} />
      <SystemIconCircle icon={activityStreamIcon} shouldMirror={true} />
      <SystemIconCircle icon={activityStreamIcon} size={120} shouldMirror={true} />
      <SystemIconCircle
        icon={activityStreamIcon}
        background={system.color.bg.default}
        color={system.color.fg.inverse}
      />
      <SystemIconCircle
        icon={activityStreamIcon}
        background={system.color.bg.primary.default}
        color={system.color.fg.inverse}
        shouldMirror={true}
        cs={{[systemIconCircleStencil.vars.color]: cssVar(system.color.fg.inverse)}}
      />
    </div>
  ),
};

export const GraphicStory = {
  name: 'Graphic',
  component: Graphic,
  render: () => (
    <div className="story">
      <h3>Default</h3>
      <p>Using a local SVG</p>
      <Graphic src={graphicExample} alt="A flag icon" />
      <br />
      <h3>Parent setting width with grow set to true</h3>
      <div style={{width: 400}}>
        <Graphic src={graphicExample} grow={true} alt="A flag icon" />
      </div>
      <h3>Passing in src type</h3>
      <div style={{width: 400}}>
        <Graphic src={graphicExampleWithURL} alt="A desktop image" />
      </div>
      <h3>Passing in a url</h3>
      <div style={{width: 400}}>
        <Graphic
          src={{
            url: 'https://raw.githubusercontent.com/gist/alanbsmith/244155135cbd05cdeac288f0236445e1/raw/59dc5fa911d64ecce8fc776c8c62481824c35bcb/magnifying-glass-canvas.svg',
          }}
          alt="A magnifying glass"
        />
      </div>
      <h3>Setting Height via stencil</h3>
      <div>
        <Graphic
          cs={customStyles}
          src={{
            url: 'https://raw.githubusercontent.com/gist/alanbsmith/244155135cbd05cdeac288f0236445e1/raw/59dc5fa911d64ecce8fc776c8c62481824c35bcb/magnifying-glass-canvas.svg',
          }}
          alt="A magnifying glass"
        />
      </div>
      <h3>Custom Width</h3>
      <p>Using a url SVG</p>
      <Graphic
        width={100}
        alt="A magnifying glass"
        src={{
          url: 'https://raw.githubusercontent.com/gist/alanbsmith/244155135cbd05cdeac288f0236445e1/raw/59dc5fa911d64ecce8fc776c8c62481824c35bcb/magnifying-glass-canvas.svg',
        }}
        srcset="https://raw.githubusercontent.com/gist/alanbsmith/244155135cbd05cdeac288f0236445e1/raw/59dc5fa911d64ecce8fc776c8c62481824c35bcb/magnifying-glass-canvas.svg, 2x"
      />
      <h3>Using srcset</h3>
      <Graphic
        alt="A magnifying glass"
        width={400}
        src={{
          url: 'https://picsum.photos/400',
        }}
        srcset="https://picsum.photos/400 400w, https://picsum.photos/800 800w, https://picsum.photos/1200 1200w"
      />
    </div>
  ),
};
