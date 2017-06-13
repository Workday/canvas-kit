/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import styled from 'react-emotion';
import {css, cx} from 'emotion';
import chroma from 'chroma-js';
import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';

import {Avatar} from '../../../avatar/react/index';
import {SystemIcon} from '../../../icon/react/index';
import {colors, spacing} from '../../../core/react/index';
import {Button, IconButton} from '../../../button/react/index';
import {GlobalHeader, Header, DubLogoTitle, WorkdayLogoTitle, HeaderVariant} from '../index';

import README from '../README.md';
import bgImg from '../static/workday-bg.jpg';

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

const nav = (
  <nav>
    <ul>
      <li className="current">
        <a href="#">Discover</a>
      </li>
      <li>
        <a href="#">Library</a>
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

storiesOf('Header', module)
  .addDecorator(withReadme(README))
  .add('Global Header', () => (
    <div className="story">
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
          <IconButton
            icon={notificationsIcon}
            buttonType={IconButton.Types.Circle}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            icon={inboxIcon}
            buttonType={IconButton.Types.Circle}
            title="Inbox"
            aria-label="Inbox"
          />
          <Avatar
            onClick={handleAvatarClickTest}
            url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
            altText="Profile"
          />
        </GlobalHeader>
      </div>
      <div className={containerStyle}>
        <GlobalHeader
          brand={<WorkdayLogoTitle variant={HeaderVariant.Global} />}
          menuToggle={<Avatar onClick={handleMenuClickTest} />}
          onSearchSubmit={handleSearchSubmitTest}
          breakpoint={700}
        >
          <IconButton
            icon={notificationsIcon}
            buttonType={IconButton.Types.Circle}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            icon={inboxIcon}
            buttonType={IconButton.Types.Circle}
            title="Inbox"
            aria-label="Inbox"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
        </GlobalHeader>
      </div>
      <div className={containerStyle}>
        <GlobalHeader onSearchSubmit={handleSearchSubmitTest} onMenuClick={handleMenuClickTest}>
          <IconButton
            icon={notificationsIcon}
            buttonType={IconButton.Types.Circle}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            icon={inboxIcon}
            buttonType={IconButton.Types.Circle}
            title="Inbox"
            aria-label="Inbox"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
        </GlobalHeader>
      </div>
    </div>
  ))
  .add('Dub Header', () => (
    <div className="story">
      <div className={containerStyle}>
        <Header title="Required" onSearchSubmit={handleSearchSubmitTest} />
      </div>
      <div className={containerStyle}>
        <Header title="Icons Only" brandUrl="#" onSearchSubmit={handleSearchSubmitTest}>
          {/* Test states and padding on various types of icons */}
          <a href="/">
            <SystemIcon icon={notificationsIcon} />
          </a>
          <IconButton
            icon={inboxIcon}
            buttonType={IconButton.Types.Circle}
            title="Inbox"
            aria-label="Inbox"
          />
          <IconButton
            icon={inboxIcon}
            buttonType={IconButton.Types.Plain}
            title="Inbox"
            aria-label="Inbox"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
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
          <IconButton
            buttonType={IconButton.Types.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
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
          <IconButton
            buttonType={IconButton.Types.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            buttonType={IconButton.Types.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <IconButton
            buttonType={IconButton.Types.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
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
          <IconButton
            buttonType={IconButton.Types.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            buttonType={IconButton.Types.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
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
          <IconButton
            buttonType={IconButton.Types.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            buttonType={IconButton.Types.Inverse}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <Button buttonType={Button.Types.Primary}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Full Header', () => (
    <div className="story">
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
          <IconButton
            buttonType={IconButton.Types.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
          <Button buttonType={Button.Types.Primary}>Download</Button>
        </Header>
      </div>
      <br />
      <div className={containerStyle}>
        <Header variant={Header.Variant.Full} title="" themeColor={Header.Theme.Blue} brandUrl="#">
          {nav}
          <IconButton
            buttonType={IconButton.Types.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
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
          <IconButton
            buttonType={IconButton.Types.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
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
          <IconButton
            buttonType={IconButton.Types.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            buttonType={IconButton.Types.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <Button buttonType={Button.Types.Primary}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Header With Custom Breakpoints', () => (
    <div className="story">
      <Header
        title="Normal Breakpoints"
        themeColor={Header.Theme.Blue}
        brandUrl="#"
        onMenuClick={handleMenuClickTest}
      >
        {nav}
        <IconButton
          buttonType={IconButton.Types.Inverse}
          icon={notificationsIcon}
          title="Notifications"
          aria-label="Notifications"
        />
        <Avatar onClick={handleAvatarClickTest} altText="Profile" />
        <Button buttonType={Button.Types.Primary}>Download</Button>
      </Header>
      <Header title="Nav Collapses Later" breakpoints={{sm: 320, md: 420, lg: 768}}>
        {nav}
      </Header>
      <Header title="Nav Collapses Earlier" breakpoints={{sm: 320, md: 768, lg: 1280}}>
        {nav}
        <IconButton buttonType={IconButton.Types.Circle} icon={notificationsIcon} />
        <Avatar onClick={handleAvatarClickTest} />
        <Button buttonType={Button.Types.Primary}>Download</Button>
      </Header>
      <Header
        title="Icons Drop Later"
        breakpoints={{...Header.defaultProps.breakpoints, md: 640, lg: 1140}}
      >
        <IconButton
          buttonType={IconButton.Types.Circle}
          icon={notificationsIcon}
          title="Notifications"
          aria-label="Notifications"
        />
        <IconButton
          buttonType={IconButton.Types.Circle}
          icon={inboxIcon}
          title="Inbox"
          aria-label="Inbox"
        />
        <Button buttonType={Button.Types.Primary}>Logout</Button>
      </Header>
    </div>
  ));
