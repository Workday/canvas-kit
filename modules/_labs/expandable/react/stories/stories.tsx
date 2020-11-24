/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Expandable from '../index';
import README from '../README.md';

import {Checkbox} from '@workday/canvas-kit-react-checkbox';

storiesOf('Labs|Expandable/React', module)
  .addParameters({component: Expandable})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Expandable header="Expandable Container" style={{width: '400px'}}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </div>
      </Expandable>
    </div>
  ))
  .add('With Custom Header', () => {
    const Header = (
      <div>
        <h3 style={{margin: '4px'}}>Filtered Results (45)</h3>
        <p style={{color: 'gray', margin: '4px'}}>Hiring Source</p>
      </div>
    );
    return (
      <div className="story">
        <Expandable header={Header} style={{width: '400px'}}>
          <Checkbox label="Internal (20)" />
          <Checkbox label="Recruiter (12)" />
          <Checkbox label="Corporate Website (11)" />
          <Checkbox label="University Website (3)" />
        </Expandable>
      </div>
    );
  });
