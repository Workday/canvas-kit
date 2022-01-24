/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import './index.scss';

const containerStyle = css({
  paddingTop: '12px',
});

storiesOf('Components/Indicators/Loading Animation/CSS', module)
  .addParameters({ReadmePath: 'css/loading-animation'})
  .add('Loading Dots', () => (
    <div className="story">
      <div css={containerStyle}>
        <div className="wdc-loading-dots">
          <span />
        </div>
      </div>
    </div>
  ));
