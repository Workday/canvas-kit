/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import chroma from 'chroma-js';

import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';

import {AvatarButton} from '../../../../avatar/react';
import {colors, spacing} from '../../../../core/react';
import {Button, IconButton} from '../../../../button/react';
import {MenuItem} from '../../../menu/react';
import {
  GlobalHeader,
  Header,
  DubLogoTitle,
  WorkdayLogoTitle,
  HeaderVariant,
  SearchBar,
  SearchBarProps,
} from '../index';

import README from '../README.md';
import bgImg from '../static/workday-bg.jpg';
import {boolean, withKnobs} from '@storybook/addon-knobs';

const containerStyle = {
  backgroundColor: colors.soap100,
  padding: spacing.m,
};

const backgroundStyle = {
  padding: `0 0 64px 0`,
  background: `linear-gradient(${chroma(colors.blueberry500)
    .alpha(0.8)
    .css()}, ${chroma(colors.blueberry400)
    .alpha(0.8)
    .css()}), url(${bgImg})`,
  backgroundPosition: `0 50%`,
  backgroundSize: 'cover',
};

// Simulate a React Router link
const Link = styled('a')<{to: string}>({});

const handleMenuClickTest = (e: React.MouseEvent) => {
  action(`Menu clicked! ${e.target}`)();
};

const handleAvatarClickTest = (e: React.MouseEvent) => {
  action(`Avatar clicked! ${e.target}`);
};

const handleSearchSubmitTest = (e: React.MouseEvent<HTMLFormElement>) => {
  const formInputValue = (e.target as HTMLFormElement).getElementsByTagName('input')[0].value;
  action(`search submitted ${formInputValue}`)();
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

class SearchWithAutoComplete extends React.Component<
  Partial<SearchBarProps>,
  {currentText: string}
> {
  state = {
    currentText: '',
  };

  autocompleteCallback = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({currentText: event.target.value});
  };

  onSubmit = (event: React.FormEvent) => {
    const formInputValue = (event.target as HTMLFormElement).getElementsByTagName('input')[0].value;
    action(`search submitted ${formInputValue}`)();
  };

  render() {
    const autocompleteResult = (textModifier: string) => (
      <MenuItem onClick={action(`Clicked Result ${textModifier}`)}>
        Result{' '}
        <span>
          num<span>ber</span>
        </span>{' '}
        {textModifier}
      </MenuItem>
    );
    return (
      <SearchBar
        {...this.props}
        autocompleteItems={Array.apply(null, Array(this.state.currentText.length))
          .map((x: any, i: string) => autocompleteResult(i))
          .splice(0, 5)}
        isCollapsed={boolean('isCollapsed', false)}
        onInputChange={this.autocompleteCallback}
        placeholder={`Search with Autocomplete`}
        grow={true}
        searchTheme={SearchBar.Theme.Dark}
        onSubmit={this.onSubmit}
      />
    );
  }
}

storiesOf('Labs|Header/React', module)
  .addParameters({component: Header})
  .addDecorator(withReadme(README))
  .addDecorator(withKnobs)
  .add('Global Header', () => (
    <div className="story">
      <div css={containerStyle}>
        <GlobalHeader
          brand={
            <a href="#">
              <DubLogoTitle themeColor={Header.Theme.White} />
            </a>
          }
          menuToggle={
            <AvatarButton
              onClick={handleMenuClickTest}
              url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
            />
          }
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              onSubmit={handleSearchSubmitTest}
            />
          }
          isCollapsed={boolean('isCollapsed', false)}
          onMenuClick={handleMenuClickTest}
        >
          <IconButton
            icon={notificationsIcon}
            variant={IconButton.Variant.Circle}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            icon={inboxIcon}
            variant={IconButton.Variant.Circle}
            title="Inbox"
            aria-label="Inbox"
          />
          <AvatarButton
            onClick={handleAvatarClickTest}
            url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
            altText="Profile"
          />
        </GlobalHeader>
      </div>
      <div css={containerStyle}>
        <GlobalHeader
          brand={<WorkdayLogoTitle variant={HeaderVariant.Global} />}
          menuToggle={<AvatarButton onClick={handleMenuClickTest} />}
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              onSubmit={handleSearchSubmitTest}
            />
          }
          isCollapsed={boolean('isCollapsed', false)}
        >
          <IconButton
            icon={notificationsIcon}
            variant={IconButton.Variant.Circle}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            icon={inboxIcon}
            variant={IconButton.Variant.Circle}
            title="Inbox"
            aria-label="Inbox"
          />
          <AvatarButton onClick={handleAvatarClickTest} altText="Profile" />
        </GlobalHeader>
      </div>
      <div css={containerStyle}>
        <GlobalHeader
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              onSubmit={handleSearchSubmitTest}
            />
          }
          onMenuClick={handleMenuClickTest}
          isCollapsed={boolean('isCollapsed', false)}
        >
          <IconButton
            icon={notificationsIcon}
            variant={IconButton.Variant.Circle}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            icon={inboxIcon}
            variant={IconButton.Variant.Circle}
            title="Inbox"
            aria-label="Inbox"
          />
          <AvatarButton onClick={handleAvatarClickTest} altText="Profile" />
        </GlobalHeader>
      </div>
    </div>
  ))
  .add('Dub Header', () => (
    <div className="story">
      <div css={containerStyle}>
        <Header
          title="Required"
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              rightAlign={true}
              autocompleteItems={[<MenuItem>Hello</MenuItem>]}
              onSubmit={handleSearchSubmitTest}
            />
          }
          isCollapsed={boolean('isCollapsed', false)}
        />
      </div>
      <div css={containerStyle}>
        <Header
          title="Icons Only"
          brandUrl="#"
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              onSubmit={handleSearchSubmitTest}
            />
          }
          isCollapsed={boolean('isCollapsed', false)}
        >
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <AvatarButton onClick={handleAvatarClickTest} altText="Profile" />
        </Header>
      </div>
      <br />
      <div css={containerStyle}>
        <Header
          title="Kitchen Sink"
          themeColor={Header.Theme.Blue}
          brandUrl="#"
          onMenuClick={handleMenuClickTest}
          leftSlot={<SearchWithAutoComplete searchTheme={SearchBar.Theme.Dark} />}
          isCollapsed={boolean('isCollapsed', false)}
          css={[{zIndex: 4}]}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <AvatarButton onClick={handleAvatarClickTest} altText="Profile" />
          <Button variant={Button.Variant.Primary}>Download</Button>
        </Header>
      </div>
      <br />
      <div css={containerStyle}>
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
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              grow={true}
              onSubmit={handleSearchSubmitTest}
            />
          }
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <Button variant={Button.Variant.Primary}>Logout</Button>
        </Header>
      </div>
      <br />
      <div css={containerStyle}>
        <Header
          variant={Header.Variant.Dub}
          title="Centered Menu"
          themeColor={Header.Theme.White}
          centeredNav={true}
          brandUrl="#"
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              grow={true}
              onSubmit={handleSearchSubmitTest}
            />
          }
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <Button variant={Button.Variant.Primary}>Logout</Button>
        </Header>
      </div>
      <br />
      <div css={containerStyle}>
        <Header
          variant={Header.Variant.Dub}
          title="Centered Menu Without Search"
          themeColor={Header.Theme.White}
          centeredNav={true}
          brandUrl="#"
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <Button variant={Button.Variant.Primary}>Logout</Button>
        </Header>
      </div>
      <br />
      <div css={[containerStyle, backgroundStyle]}>
        <Header
          variant={Header.Variant.Dub}
          title="Transparent"
          themeColor={Header.Theme.Transparent}
          brandUrl="#"
          leftSlot={
            <SearchBar
              isCollapsed={boolean('isCollapsed', false)}
              grow={true}
              onSubmit={handleSearchSubmitTest}
              searchTheme={SearchBar.Theme.Dark}
            />
          }
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            variant={IconButton.Variant.Inverse}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <Button variant={Button.Variant.Primary}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Full Header', () => (
    <div className="story">
      <div css={containerStyle}>
        <Header variant={Header.Variant.Full} isCollapsed={boolean('isCollapsed', false)} />
      </div>
      <div css={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title="Design"
          themeColor={Header.Theme.White}
          brandUrl="#"
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
        </Header>
      </div>
      <br />
      <div css={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title="Kitchen Sink"
          themeColor={Header.Theme.Blue}
          brandUrl="#"
          onMenuClick={handleMenuClickTest}
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <AvatarButton onClick={handleAvatarClickTest} altText="Profile" />
          <Button variant={Button.Variant.Primary}>Download</Button>
        </Header>
      </div>
      <br />
      <div css={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title=""
          themeColor={Header.Theme.Blue}
          brandUrl="#"
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <AvatarButton onClick={handleAvatarClickTest} />
        </Header>
      </div>
      <br />
      <div css={[containerStyle, backgroundStyle]}>
        <Header
          variant={Header.Variant.Full}
          title="Transparent"
          themeColor={Header.Theme.Transparent}
          brandUrl="#"
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Inverse}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <AvatarButton onClick={handleAvatarClickTest} altText="Profile" />
        </Header>
      </div>
      <br />
      <div css={containerStyle}>
        <Header
          variant={Header.Variant.Full}
          title=""
          themeColor={Header.Theme.White}
          centeredNav={true}
          brandUrl="#"
          isCollapsed={boolean('isCollapsed', false)}
        >
          {nav}
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton
            variant={IconButton.Variant.Circle}
            icon={inboxIcon}
            title="Inbox"
            aria-label="Inbox"
          />
          <Button variant={Button.Variant.Primary}>Logout</Button>
        </Header>
      </div>
    </div>
  ))
  .add('Search Form', () => (
    <div css={{background: 'grey', padding: '12px'}}>
      <SearchWithAutoComplete css={{marginLeft: spacing.zero}} />
    </div>
  ));
