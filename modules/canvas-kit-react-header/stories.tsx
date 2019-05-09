/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import styled from 'react-emotion';
import {css, cx} from 'emotion';
import {GlobalHeader, Header, DubLogoTitle, WorkdayLogoTitle} from './index';
import {Avatar} from '@workday/canvas-kit-react-avatar';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';
import {colors, spacing} from '@workday/canvas-kit-react-core';
import {Button, IconButton} from '@workday/canvas-kit-react-button';
import chroma from 'chroma-js';
import README from './README.md';
import bgImg from './static/workday-bg.jpg';
import {HeaderVariant} from './lib/shared/types';

const containerStyle = css({
  backgroundColor: colors.soap100,
  padding: spacing.m,
});

const backgroundStyle = css({
  padding: `0 0 64px 0`,
  background: `linear-gradient(${chroma(colors.blueberry500)
    .alpha(0.8)
    .css()}, ${chroma(colors.blueberry400)
    .alpha(0.8)
    .css()}), url(${bgImg})`,
  backgroundPosition: `0 50%`,
  backgroundSize: 'cover',
});

// Simulate a React Router link
const Link = styled('a')<{to: string}>({});

const handleMenuClickTest = (e: React.SyntheticEvent) => {
  alert(`Menu clicked!`);
};

const handleAvatarClickTest = (e: React.SyntheticEvent) => {
  alert(`Avatar clicked!`);
};

const handleSearchSubmitTest = (query: string) => {
  alert(`You searched for "${query}"!`);
};

const handleBreakpointChangeTest = (key: string) => {
  alert(`The breakpoint key is "${key}"!`);
};

const nav = (
  <nav>
    <ul>
      <li className="current">
        <span>Discover</span>
      </li>
      <li>
        <div>Library</div>
      </li>
      <li>
        <Link to="#">Create</Link>
      </li>
      <li>
        <a href="#">Manage</a>
      </li>
    </ul>
  </nav>
);

storiesOf('Canvas Kit/Header', module)
  .addDecorator(withReadme(README))
  .add('Global', () => (
    <div className="story">
      <h1 className="section-label">"Global" Header</h1>
      <div className={containerStyle}>
        <GlobalHeader
          brand={
            <a href="#">
              <DubLogoTitle themeColor={Header.Theme.White} />
            </a>
          }
          menuToggle={
            <Avatar
              onClick={handleMenuClickTest}
              url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
            />
          }
          onSearchSubmit={handleSearchSubmitTest}
        >
          <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Default} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Default} />
          <Avatar
            onClick={handleAvatarClickTest}
            url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
          />
        </GlobalHeader>
      </div>
      <div className={containerStyle}>
        <GlobalHeader
          brand={<WorkdayLogoTitle variant={HeaderVariant.Global} />}
          menuToggle={<Avatar onClick={handleMenuClickTest} />}
          onSearchSubmit={handleSearchSubmitTest}
          breakpoint={700}
          onBreakpointChange={handleBreakpointChangeTest}
        >
          <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Default} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Default} />
          <Avatar onClick={handleAvatarClickTest} />
        </GlobalHeader>
      </div>
      <div className={containerStyle}>
        <GlobalHeader onSearchSubmit={handleSearchSubmitTest} onMenuClick={handleMenuClickTest}>
          <IconButton icon={notificationsIcon} buttonType={IconButton.Types.Default} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Default} />
          <Avatar onClick={handleAvatarClickTest} />
        </GlobalHeader>
      </div>
    </div>
  ))
  .add('Generic - Dub', () => (
    <div className="story">
      <h1 className="section-label">Generic - "Dub" Header</h1>
      <div className={containerStyle}>
        <Header title="Required" onSearchSubmit={handleSearchSubmitTest} />
      </div>
      <div className={containerStyle}>
        <Header title="Icons Only" brandUrl="#" onSearchSubmit={handleSearchSubmitTest}>
          {/* Test states and padding on various types of icons */}
          <a href="/">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Default} />
          <IconButton icon={inboxIcon} buttonType={IconButton.Types.Plain} />
          <Avatar onClick={handleAvatarClickTest} />
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          title="Kitchen Sink"
          themeColor={Header.Theme.Blue}
          brandUrl="#"
          onMenuClick={handleMenuClickTest}
          onSearchSubmit={handleSearchSubmitTest}
        >
          {nav}
          <IconButton buttonType={IconButton.Types.Inverse} icon={notificationsIcon} />
          <Avatar onClick={handleAvatarClickTest} />
          <Button buttonType={Button.Types.Primary}>Download</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Dub}
          title="Ignored when brand prop exists..."
          themeColor={Header.Theme.White}
          brand={
            <DubLogoTitle
              title="Contained Lockup"
              themeColor={Header.Theme.Blue}
              bgColor={colors.gradients.blueberry}
            />
          }
          brandUrl="#"
          onSearchSubmit={handleSearchSubmitTest}
        >
          {nav}
          <IconButton buttonType={IconButton.Types.Default} icon={notificationsIcon} />
          <IconButton buttonType={IconButton.Types.Default} icon={inboxIcon} />
          <Button buttonType={Button.Types.Primary}>Logout</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Dub}
          title="Centered Menu"
          themeColor={Header.Theme.White}
          centeredNav={true}
          brandUrl="#"
          onSearchSubmit={handleSearchSubmitTest}
        >
          {nav}
          <IconButton buttonType={IconButton.Types.Default} icon={notificationsIcon} />
          <IconButton buttonType={IconButton.Types.Default} icon={inboxIcon} />
          <Button buttonType={Button.Types.Primary}>Logout</Button>
        </Header>
      </div>
      <br />
      <div className={cx(containerStyle, backgroundStyle)}>
        <Header
          variant={Header.Variant.Dub}
          title="Transparent"
          themeColor={Header.Theme.Transparent}
          brandUrl="#"
          onSearchSubmit={handleSearchSubmitTest}
        >
          {nav}
          <IconButton buttonType={IconButton.Types.Inverse} icon={notificationsIcon} />
          <IconButton buttonType={IconButton.Types.Inverse} icon={inboxIcon} />
          <Button buttonType={Button.Types.Primary}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Generic - Full', () => (
    <div className="story">
      <h1 className="section-label">Generic - "Full" Header</h1>
      <div className={containerStyle}>
        <Header variant={Header.Variant.Full} />
      </div>
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title="Design"
          themeColor={Header.Theme.White}
          brandUrl="#"
        >
          {nav}
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title="Kitchen Sink"
          themeColor={Header.Theme.Blue}
          brandUrl="#"
          onMenuClick={handleMenuClickTest}
        >
          {nav}
          <IconButton buttonType={IconButton.Types.Inverse} icon={notificationsIcon} />
          <Avatar onClick={handleAvatarClickTest} />
          <Button buttonType={Button.Types.Primary}>Download</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header variant={Header.Variant.Full} title="" themeColor={Header.Theme.Blue} brandUrl="#">
          {nav}
          <IconButton buttonType={IconButton.Types.Inverse} icon={notificationsIcon} />
          <Avatar onClick={handleAvatarClickTest} />
        </Header>
      </div>
      <br />
      <div className={cx(containerStyle, backgroundStyle)}>
        <Header
          variant={Header.Variant.Full}
          title="Transparent"
          themeColor={Header.Theme.Transparent}
          brandUrl="#"
        >
          {nav}
          <IconButton buttonType={IconButton.Types.Inverse} icon={notificationsIcon} />
          <Avatar onClick={handleAvatarClickTest} />
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title=""
          themeColor={Header.Theme.White}
          centeredNav={true}
          brandUrl="#"
        >
          {nav}
          <IconButton buttonType={IconButton.Types.Default} icon={notificationsIcon} />
          <IconButton buttonType={IconButton.Types.Default} icon={inboxIcon} />
          <Button buttonType={Button.Types.Primary}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Custom Breakpoints', () => (
    <div className="story">
      <h1 className="section-label">Custom Breakpoints</h1>
      <Header
        title="Normal Breakpoints"
        themeColor={Header.Theme.Blue}
        brandUrl="#"
        onMenuClick={handleMenuClickTest}
      >
        {nav}
        <IconButton buttonType={IconButton.Types.Inverse} icon={notificationsIcon} />
        <Avatar onClick={handleAvatarClickTest} />
        <Button buttonType={Button.Types.Primary}>Download</Button>
      </Header>
      <Header
        title="Nav Collapses Later"
        breakpoints={{sm: 320, md: 420, lg: 768}}
        onBreakpointChange={handleBreakpointChangeTest}
      >
        {nav}
      </Header>
      <Header title="Nav Collapses Earlier" breakpoints={{sm: 320, md: 768, lg: 1280}}>
        {nav}
        <IconButton buttonType={IconButton.Types.Default} icon={notificationsIcon} />
        <Avatar onClick={handleAvatarClickTest} />
        <Button buttonType={Button.Types.Primary}>Download</Button>
      </Header>
      <Header
        title="Icons Drop Later"
        breakpoints={{...Header.defaultProps.breakpoints, md: 640, lg: 1140}}
      >
        <IconButton buttonType={IconButton.Types.Default} icon={notificationsIcon} />
        <IconButton buttonType={IconButton.Types.Default} icon={inboxIcon} />
        <Button buttonType={Button.Types.Primary}>Logout</Button>
      </Header>
    </div>
  ));
