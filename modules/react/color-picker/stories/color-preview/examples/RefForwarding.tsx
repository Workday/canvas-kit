import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {ColorPreview} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Subtext} from '@workday/canvas-kit-react/text';

export const RefForwarding = () => {
  const [width, setWidth] = React.useState(null);
  const ref = React.useRef(null);

  const handleClick = () => {
    setWidth(ref.current.offsetWidth);
  };

  return (
    <>
      <FormField>
        <FormField.Label>Background Color</FormField.Label>
        <FormField.Field>
          <FormField.Input as={ColorPreview} ref={ref} value="#00ffcc" />
        </FormField.Field>
      </FormField>
      <Subtext size="large">Width of Color Preview: {width}</Subtext>
      <PrimaryButton onClick={handleClick}>Calculate Width of Color Preview</PrimaryButton>
    </>
  );
};
