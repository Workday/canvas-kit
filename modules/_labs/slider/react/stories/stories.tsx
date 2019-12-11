/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import Slider from '../index';
import {SliderProps} from '../lib/Slider';
import README from '../README.md';

const sliderProps: SliderProps = {
  max: 100,
  min: 0,
  step: 1,
  startValue: 27,
  useInputRange: true,
};

storiesOf('Labs/Slider', module)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Slider {...sliderProps} />
    </div>
  ));
