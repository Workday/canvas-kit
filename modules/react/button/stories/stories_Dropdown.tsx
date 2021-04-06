/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {DropdownButton} from '@workday/canvas-kit-react/button';
import README from '../README.md';

storiesOf('Components/Buttons/Button/React/Dropdown', module)
  .addParameters({component: DropdownButton})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <DropdownButton size="large" variant="primary">
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="large" variant="primary">
        Dropdown Button
      </DropdownButton>

      <h3>Medium Primary</h3>
      <DropdownButton size="medium" variant="primary">
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="medium" variant="primary">
        Dropdown Button
      </DropdownButton>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <DropdownButton size="large" variant="secondary">
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="large" variant="secondary">
        Dropdown Button
      </DropdownButton>

      <h3>Medium Secondary</h3>
      <DropdownButton size="medium" variant="secondary">
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="medium" variant="secondary">
        Dropdown Button
      </DropdownButton>
    </div>
  ));
