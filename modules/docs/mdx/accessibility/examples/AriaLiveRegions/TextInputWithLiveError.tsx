import React from 'react';
import {AriaLiveRegion, changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const hintStyles = createStyles({
  height: system.space.x6,
});
export const TextInputWithLiveError = () => {
  const errMsg = 'Error: First name is required.';
  const [hasError, setHasError] = React.useState('no');
  const inputRef = React.useRef(null);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    setHasError(e.target.value.trim().length === 0 ? 'error' : 'no');
  const handleSubmit = () => hasError && changeFocus(inputRef.current);

  return (
    <>
      <FormField error={hasError === 'error' ? 'error' : undefined} isRequired={true}>
        <FormField.Label>First Name:</FormField.Label>
        <FormField.Input as={TextInput} onBlur={handleBlur} ref={inputRef} />
        <FormField.Hint cs={hintStyles}>
          <AriaLiveRegion>{hasError === 'error' && errMsg}</AriaLiveRegion>
        </FormField.Hint>
      </FormField>
      <PrimaryButton onClick={handleSubmit}>Continue</PrimaryButton>
    </>
  );
};
