/// <reference path="../../../../typings.d.ts" />
import styled from '@emotion/styled';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import chroma from 'chroma-js';

import {notificationsIcon, inboxIcon} from '@workday/canvas-system-icons-web';

import {Avatar} from '@workday/canvas-kit-react/avatar';
import {colors, gradients} from '@workday/canvas-kit-react/tokens';
import {IconButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {SearchForm, SearchFormProps} from '@workday/canvas-kit-labs-react/search-form';
import {
  DeprecatedGlobalHeader,
  DeprecatedHeader,
  DeprecatedDubLogoTitle,
  DeprecatedWorkdayLogoTitle,
  DeprecatedHeaderVariant,
} from '../index';

import bgImg from '../static/workday-bg.jpg';
import {Box} from '../../common';

// Simulate a React Router link
const Link = styled('a')<{to: string}>({});

const handleMenuClickTest = (e: React.MouseEvent) => {
  console.log(`Menu clicked! ${e.target}`);
};

const handleAvatarClickTest = (e: React.MouseEvent) => {
  console.log(`Avatar clicked! ${e.target}`);
};

const handleSearchSubmitTest = (e: React.MouseEvent<HTMLFormElement>) => {
  const formInputValue = (e.target as HTMLFormElement).getElementsByTagName('input')[0].value;
  console.log(`search submitted ${formInputValue}`);
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
  Partial<SearchFormProps>,
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
    console.log(`search submitted ${formInputValue}`);
  };

  render() {
    const autocompleteResult = (textModifier: string) => (
      <MenuItem onClick={() => `Clicked Result ${textModifier}`}>
        Result{' '}
        <span>
          num<span>ber</span>
        </span>{' '}
        {textModifier}
      </MenuItem>
    );
    return (
      <SearchForm
        autocompleteItems={Array.apply(null, Array(this.state.currentText.length))
          .map((_, i) => autocompleteResult(String(i)))
          .splice(0, 5)}
        isCollapsed={false}
        onInputChange={this.autocompleteCallback}
        placeholder={`Search with Autocomplete`}
        grow={true}
        onSubmit={this.onSubmit}
        {...this.props}
      />
    );
  }
}

storiesOf('Labs/Header/React', module)
  .addParameters({component: DeprecatedHeader})
  .addParameters({ReadmePath: 'labs-react/header'})
  .add('Global Header', () => (
    <div className="story">
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedGlobalHeader
          brand={
            <a href="#">
              <DeprecatedDubLogoTitle themeColor={DeprecatedHeader.Theme.White} />
            </a>
          }
          menuToggle={
            <Avatar
              onClick={handleMenuClickTest}
              url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
            />
          }
          leftSlot={<SearchForm isCollapsed={false} onSubmit={handleSearchSubmitTest} />}
          isCollapsed={false}
          onMenuClick={handleMenuClickTest}
        >
          <IconButton
            icon={notificationsIcon}
            variant="circle"
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton icon={inboxIcon} variant="circle" title="Inbox" aria-label="Inbox" />
          <Avatar
            onClick={handleAvatarClickTest}
            url="https://s3-us-west-2.amazonaws.com/design-assets-internal/avatars/lmcneil.png"
            altText="Profile"
          />
        </DeprecatedGlobalHeader>
      </Box>
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedGlobalHeader
          brand={<DeprecatedWorkdayLogoTitle variant={DeprecatedHeaderVariant.Global} />}
          menuToggle={<Avatar onClick={handleMenuClickTest} />}
          leftSlot={<SearchForm isCollapsed={false} onSubmit={handleSearchSubmitTest} />}
          isCollapsed={false}
        >
          <IconButton
            icon={notificationsIcon}
            variant="circle"
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton icon={inboxIcon} variant="circle" title="Inbox" aria-label="Inbox" />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
        </DeprecatedGlobalHeader>
      </Box>
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedGlobalHeader
          leftSlot={<SearchForm isCollapsed={false} onSubmit={handleSearchSubmitTest} />}
          onMenuClick={handleMenuClickTest}
          isCollapsed={false}
        >
          <IconButton
            icon={notificationsIcon}
            variant="circle"
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton icon={inboxIcon} variant="circle" title="Inbox" aria-label="Inbox" />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
        </DeprecatedGlobalHeader>
      </Box>
    </div>
  ))
  .add('Dub Header', () => (
    <div className="story">
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          title="Required"
          leftSlot={
            <SearchForm
              isCollapsed={false}
              rightAlign={true}
              autocompleteItems={[<MenuItem>Hello</MenuItem>]}
              onSubmit={handleSearchSubmitTest}
            />
          }
          isCollapsed={false}
        />
      </Box>
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          title="Icons Only"
          brandUrl="#"
          leftSlot={<SearchForm isCollapsed={false} onSubmit={handleSearchSubmitTest} />}
          isCollapsed={false}
        >
          <IconButton
            variant="circle"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton variant="circle" icon={inboxIcon} title="Inbox" aria-label="Inbox" />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
        </DeprecatedHeader>
      </Box>
      <br />
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          title="Kitchen Sink"
          themeColor={DeprecatedHeader.Theme.Blue}
          brandUrl="#"
          onMenuClick={handleMenuClickTest}
          leftSlot={<SearchWithAutoComplete searchTheme={SearchForm.Theme.Dark} />}
          isCollapsed={false}
          style={{zIndex: 4}}
        >
          {nav}
          <IconButton
            variant="inverse"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
          <PrimaryButton>Download</PrimaryButton>
        </DeprecatedHeader>
      </Box>
      <br />
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Dub}
          title="Ignored when brand prop exists..."
          themeColor={DeprecatedHeader.Theme.White}
          brand={
            <DeprecatedDubLogoTitle
              title="Contained Lockup"
              themeColor={DeprecatedHeader.Theme.Blue}
              bgColor={gradients.blueberry}
            />
          }
          brandUrl="#"
          leftSlot={
            <SearchForm isCollapsed={false} grow={true} onSubmit={handleSearchSubmitTest} />
          }
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="circle"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton variant="circle" icon={inboxIcon} title="Inbox" aria-label="Inbox" />
          <PrimaryButton>Logout</PrimaryButton>
        </DeprecatedHeader>
      </Box>
      <br />
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Dub}
          title="Centered Menu"
          themeColor={DeprecatedHeader.Theme.White}
          centeredNav={true}
          brandUrl="#"
          leftSlot={
            <SearchForm isCollapsed={false} grow={true} onSubmit={handleSearchSubmitTest} />
          }
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="circle"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton variant="circle" icon={inboxIcon} title="Inbox" aria-label="Inbox" />
          <PrimaryButton>Logout</PrimaryButton>
        </DeprecatedHeader>
      </Box>
      <br />
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Dub}
          title="Centered Menu Without Search"
          themeColor={DeprecatedHeader.Theme.White}
          centeredNav={true}
          brandUrl="#"
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="circle"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton variant="circle" icon={inboxIcon} title="Inbox" aria-label="Inbox" />
          <PrimaryButton>Logout</PrimaryButton>
        </DeprecatedHeader>
      </Box>
      <br />
      <Box
        padding="0 0 64px 0"
        background={`linear-gradient(${chroma(colors.blueberry500)
          .alpha(0.8)
          .css()}, ${chroma(colors.blueberry400)
          .alpha(0.8)
          .css()}), url(${bgImg})`}
        style={{backgroundPosition: '0 50%', backgroundSize: 'cover'}}
      >
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Dub}
          title="Transparent"
          themeColor={DeprecatedHeader.Theme.Transparent}
          brandUrl="#"
          leftSlot={
            <SearchForm
              isCollapsed={false}
              grow={true}
              onSubmit={handleSearchSubmitTest}
              searchTheme={SearchForm.Theme.Dark}
            />
          }
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="inverse"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton variant="inverse" icon={inboxIcon} title="Inbox" aria-label="Inbox" />
          <PrimaryButton>Logout</PrimaryButton>
        </DeprecatedHeader>
      </Box>
    </div>
  ))
  .add('Full Header', () => (
    <div className="story">
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader variant={DeprecatedHeader.Variant.Full} isCollapsed={false} />
      </Box>
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Full}
          title="Design"
          themeColor={DeprecatedHeader.Theme.White}
          brandUrl="#"
          isCollapsed={false}
        >
          {nav}
        </DeprecatedHeader>
      </Box>
      <br />
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Full}
          title="Kitchen Sink"
          themeColor={DeprecatedHeader.Theme.Blue}
          brandUrl="#"
          onMenuClick={handleMenuClickTest}
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="inverse"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
          <PrimaryButton>Download</PrimaryButton>
        </DeprecatedHeader>
      </Box>
      <br />
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Full}
          title=""
          themeColor={DeprecatedHeader.Theme.Blue}
          brandUrl="#"
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="inverse"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <Avatar onClick={handleAvatarClickTest} />
        </DeprecatedHeader>
      </Box>
      <br />
      <Box
        padding="0 0 64px 0"
        background={`linear-gradient(${chroma(colors.blueberry500)
          .alpha(0.8)
          .css()}, ${chroma(colors.blueberry400)
          .alpha(0.8)
          .css()}), url(${bgImg})`}
        style={{backgroundPosition: '0 50%', backgroundSize: 'cover'}}
      >
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Full}
          title="Transparent"
          themeColor={DeprecatedHeader.Theme.Transparent}
          brandUrl="#"
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="inverse"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <Avatar onClick={handleAvatarClickTest} altText="Profile" />
        </DeprecatedHeader>
      </Box>
      <br />
      <Box backgroundColor={colors.soap100} padding="m">
        <DeprecatedHeader
          variant={DeprecatedHeader.Variant.Full}
          title=""
          themeColor={DeprecatedHeader.Theme.White}
          centeredNav={true}
          brandUrl="#"
          isCollapsed={false}
        >
          {nav}
          <IconButton
            variant="circle"
            icon={notificationsIcon}
            title="Notifications"
            aria-label="Notifications"
          />
          <IconButton variant="circle" icon={inboxIcon} title="Inbox" aria-label="Inbox" />
          <PrimaryButton>Logout</PrimaryButton>
        </DeprecatedHeader>
      </Box>
    </div>
  ));
