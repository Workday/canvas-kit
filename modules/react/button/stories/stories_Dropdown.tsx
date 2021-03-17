/// <reference path="../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {DropdownButton} from '../index';
import README from '../README.md';

storiesOf('Components/Buttons/Button/React/Dropdown', module)
  .addParameters({component: DropdownButton})
  .addDecorator(withReadme(README))
  .add('Primary', () => (
    <div className="story">
      <h3>Large Primary</h3>
      <DropdownButton size="large" variant={DropdownButton.Variant.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="large" variant={DropdownButton.Variant.Primary}>
        Dropdown Button
      </DropdownButton>

      <h3>Medium Primary</h3>
      <DropdownButton size="medium" variant={DropdownButton.Variant.Primary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="medium" variant={DropdownButton.Variant.Primary}>
        Dropdown Button
      </DropdownButton>
    </div>
  ))
  .add('Secondary', () => (
    <div className="story">
      <h3>Large Secondary</h3>
      <DropdownButton size="large" variant={DropdownButton.Variant.Secondary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="large" variant={DropdownButton.Variant.Secondary}>
        Dropdown Button
      </DropdownButton>

      <h3>Medium Secondary</h3>
      <DropdownButton size="medium" variant={DropdownButton.Variant.Secondary}>
        Dropdown Button
      </DropdownButton>
      <DropdownButton disabled={true} size="medium" variant={DropdownButton.Variant.Secondary}>
        Dropdown Button
      </DropdownButton>
    </div>
  ));
