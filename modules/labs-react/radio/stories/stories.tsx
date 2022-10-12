import React from 'react';

import {RadioGroup, RadioButton, useRadioModel} from '@workday/canvas-kit-labs-react/radio';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {ButtonContainer} from '../../../react/button/lib/parts';

export default {
  title: 'Labs/Radio/React',
  component: RadioGroup,
};

export const Default = () => {
  const [value, setValue] = React.useState<string>('oyester');
  const handleChange = (value: string) => {
    setValue(value);
  };
  const model = useRadioModel({name: 'sea-food', value: value, onChange: handleChange});
  return (
    <RadioGroup model={model}>
      <RadioGroup.Button>
        <RadioGroup.Input value="fish" />
        <RadioGroup.Label>Fish</RadioGroup.Label>
        {/* <RadioGroup.Label text="Fish" /> */}
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input disabled value="prawn" />
        <RadioGroup.Label>Prawns</RadioGroup.Label>
        {/* <RadioGroup.Label text="Prawn" /> */}
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input value="lobster" />
        <RadioGroup.Label>Lobster</RadioGroup.Label>
        {/* <RadioGroup.Label text="Lobster" /> */}
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input value="salmon" />
        <RadioGroup.Label>Salmon</RadioGroup.Label>
        {/* <RadioGroup.Label text="Salmon" /> */}
      </RadioGroup.Button>

      <RadioGroup.Button>
        <RadioGroup.Input value="oyester" checked />
        <RadioGroup.Label>Oyester</RadioGroup.Label>
        {/* <RadioGroup.Label text="Oyester" /> */}
      </RadioGroup.Button>
    </RadioGroup>
  );
};
