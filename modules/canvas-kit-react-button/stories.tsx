/// <reference path="../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {Button} from './index';
import README from './README.md';
import {css} from 'emotion';

const buttonContainer = {
  display: 'flex',
  alignItems: 'center',
  '& button + button': {
    marginLeft: 10,
  },
};

storiesOf('Canvas Kit/Button', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">Canvas Buttons</h1>
      <Button
        buttonType={Button.Types.Primary}
        onClick={() => {
          window.alert('Primary Button selected');
        }}
      >
        Primary Button
      </Button>
      <Button>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete}>Delete Button</Button>
      <br />
      <Button buttonType={Button.Types.Primary} buttonSize={Button.Sizes.Medium}>
        Primary Button
      </Button>
      <Button buttonSize={Button.Sizes.Medium}>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete} buttonSize={Button.Sizes.Medium}>
        Delete Button
      </Button>
      <br />
      <Button buttonSize={Button.Sizes.Small}>Secondary Button</Button>
      <br />
      <Button buttonType={Button.Types.Primary} disabled={true}>
        Primary Button
      </Button>
      <Button disabled={true}>Secondary Button</Button>
      <Button buttonType={Button.Types.Delete} disabled={true}>
        Delete Button
      </Button>
      <br />
      <h1 className="section-label">Growing Button</h1>
      <div className={css(buttonContainer)}>
        <Button
          buttonType={Button.Types.Primary}
          grow={true}
          onClick={() => {
            window.alert('Growing Primary Button selected');
          }}
        >
          Growing Primary Button
        </Button>
        <Button
          buttonType={Button.Types.Secondary}
          grow={true}
          onClick={() => {
            window.alert('Growing Secondary Button selected');
          }}
        >
          Growing Secondary Button
        </Button>
      </div>
    </div>
  ));
