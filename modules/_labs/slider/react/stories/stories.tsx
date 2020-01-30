/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {ControlledComponentWrapper} from '../../../../../utils/storybook';

import {SliderProps} from '../lib/Slider';
import FormField from '../../../../form-field/react/index';
import README from '../README.md';
import Slider from '../index';

const sliderProps: SliderProps = {
  max: 100,
  min: 0,
  step: 1,
  showTextInput: true,
};

storiesOf('Labs|Slider/React', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FormField label="Label">
      <ControlledComponentWrapper initialValue={50}>
        <Slider {...sliderProps} />
      </ControlledComponentWrapper>
    </FormField>
  ));
