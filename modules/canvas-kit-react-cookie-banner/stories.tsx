/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {action} from '@storybook/addon-actions';
import styled, {css} from 'react-emotion';
import {Button} from '@workday/canvas-kit-react-button';
import {type} from '@workday/canvas-kit-react-core';

import CookieBanner from './index'; // tslint:disable-line:import-name
import README from './README.md';

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

storiesOf('Canvas Kit/Cookie Banner', module)
  .addDecorator(withReadme(README))
  .add('Full', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner</h1>
      <BannerContainer
        bannerProps={{
          onClickSettings: action('click-settings'),
        }}
      />
    </div>
  ))
  .add('Privacy Policy URL', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner with custom notice</h1>
      <BannerContainer
        bannerProps={{
          onClickSettings: action('click-settings'),
          notice: (
            <React.Fragment>
              {CookieBanner.DefaultNotice} Please review our{' '}
              <a
                href="https://www.workday.com/en-us/privacy.html"
                target="__blank"
                className={css(type.link)}
              >
                Privacy Policy
              </a>
              .
            </React.Fragment>
          ),
        }}
      />
    </div>
  ))
  .add('Simple', () => (
    <div className="story">
      <h1 className="section-label">Cookie Banner with no settings</h1>
      <BannerContainer />
    </div>
  ));
