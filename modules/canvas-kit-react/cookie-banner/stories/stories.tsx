/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import styled from '@emotion/styled';

import {Button} from '../../../button/react';
import {type} from '../../../core/react';
import CookieBanner from '../index';
import README from '../README.md';

interface Props {
  bannerProps?: any;
}

interface State {
  acceptedCookies: boolean;
}

const Container = styled('div')({
  height: '110vh', // So we can scroll
});

class BannerContainer extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      acceptedCookies: false,
    };
  }

  private onAccept = (e: React.MouseEvent<HTMLButtonElement>): void => {
    action('accept-cookies')(e);
    this.setState({
      acceptedCookies: true,
    });
  };

  private reset = (): void => {
    this.setState({
      acceptedCookies: false,
    });
  };

  public render() {
    const {bannerProps} = this.props;

    return (
      <Container>
        <Button onClick={this.reset}>Reset Banner</Button>
        <CookieBanner
          onAccept={this.onAccept}
          isClosed={this.state.acceptedCookies}
          {...bannerProps}
        />
      </Container>
    );
  }
}

storiesOf('Components/Indicators/Cookie Banner/React', module)
  .addParameters({component: CookieBanner})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <BannerContainer
        bannerProps={{
          onClickSettings: action('click-settings'),
        }}
      />
    </div>
  ))
  .add('With Custom Notice', () => (
    <div className="story">
      <BannerContainer
        bannerProps={{
          onClickSettings: action('click-settings'),
          notice: (
            <React.Fragment>
              {CookieBanner.DefaultNotice} Please review our{' '}
              <a href="https://www.workday.com/en-us/privacy.html" target="__blank" css={type.link}>
                Privacy Policy
              </a>
              .
            </React.Fragment>
          ),
        }}
      />
    </div>
  ))
  .add('With No Settings', () => (
    <div className="story">
      <BannerContainer />
    </div>
  ));
