import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorPreview} from '@workday/canvas-kit-react/color-picker';
import {type} from '@workday/canvas-kit-react/tokens';

export const RefForwarding = () => {
  const [width, setWidth] = React.useState(null);
  const ref = React.useRef(null);

  const handleClick = () => {
    setWidth(ref.current.offsetWidth);
  };

  return (
    <>
      <FormField label="Background Color">
        <ColorPreview ref={ref} value="#00ffcc" />
      </FormField>
      <p style={type.levels.subtext.large}>Width of Color Preview: {width}</p>
      <PrimaryButton onClick={handleClick}>Calculate Width of Color Preview</PrimaryButton>
    </>
  );
};
