import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import {IconButton, Button} from '@workday/canvas-kit-react-button';
import {xIcon} from '@workday/canvas-system-icons-web';
import {css} from 'emotion';
import './index.scss';

const containerStyle = css({
  '> *': {
    margin: '20px !important',

    '&:first-child': {
      marginLeft: 0,
    },
  },
});

storiesOf('CSS/Popup', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <div className={containerStyle + ' wdc-type'}>
        <div className="wdc-popup wdc-popup-top-center wdc-depth-2">
          <div className="wdc-popup-close">
            <IconButton
              buttonType={IconButton.Types.Plain}
              onClick={() => console.warn('close clicked')}
              icon={xIcon}
              title="Close"
              aria-label="Close"
            />
          </div>
          <h3 className="wdc-popup-title">Total Salary & Allowances</h3>
          <div>
            Start Date: 01/01/2000
            <p>Total Salary & Allowances: $78,798.88</p>
          </div>
          <Button
            style={{marginRight: '16px'}}
            onClick={() => console.warn('Submit Clicked')}
            buttonType={Button.Types.Delete}
          >
            Delete
          </Button>
          <Button
            onClick={() => console.warn('Cancel Clicked')}
            buttonType={Button.Types.Secondary}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  ));
