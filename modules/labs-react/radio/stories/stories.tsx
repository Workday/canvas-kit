import React from 'react';

import {RadioGroup, RadioButton} from '@workday/canvas-kit-labs-react/radio';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {ButtonContainer} from '../../../react/button/lib/parts';

export default {
  title: 'Labs/Radio/React',
  component: RadioGroup,
};

export const Default = () => {
  const [value, setValue] = React.useState<string | number>('oyester');
  const handleChange = (value: string | number) => {
    setValue(value);
  };
  return (
    <RadioGroup onChange={handleChange} value={value} name="sea-food">
      <RadioGroup.Button disabled>
        <RadioGroup.Input value="fish" />
        <RadioGroup.Label>Fish</RadioGroup.Label>
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input value="prawn" />
        <RadioGroup.Label>Prawns</RadioGroup.Label>
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input value="lobster" />
        <RadioGroup.Label>Lobster</RadioGroup.Label>
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input value="salmon" />
        <RadioGroup.Label>Salmon</RadioGroup.Label>
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input value="oyester" checked />
        <RadioGroup.Label>Oyester</RadioGroup.Label>
        <RadioGroup.Label>oyee</RadioGroup.Label>
      </RadioGroup.Button>
    </RadioGroup>
  );
};
