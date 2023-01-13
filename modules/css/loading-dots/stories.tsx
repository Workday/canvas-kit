/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react';
import {storiesOf} from '@storybook/react';
import './index.scss';

const containerStyle = css({
  paddingTop: '12px',
});

storiesOf('CSS/Loading Dots', module)
  .addParameters({ReadmePath: 'css/loading-dots'})
  .add('Loading Dots', () => (
    <div className="story">
      <div css={containerStyle}>
        <div className="wdc-loading-dots">
          <span />
        </div>
      </div>
    </div>
  ));
