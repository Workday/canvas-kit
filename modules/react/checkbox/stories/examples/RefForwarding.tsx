import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {changeFocus} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'flex-start',
  flexDirection: 'column',
});

export const RefForwarding = () => {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    changeFocus(ref.current);
  };

  return (
    <Flex cs={containerStyles}>
      <Checkbox
        checked={checked}
        label="I agree to the terms"
        onChange={handleChange}
        ref={ref}
        required
      />
      <PrimaryButton onClick={handleClick}>Submit</PrimaryButton>
    </Flex>
  );
};
