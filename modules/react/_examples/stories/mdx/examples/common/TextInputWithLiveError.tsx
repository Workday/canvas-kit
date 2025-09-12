import React, {useState, useRef} from 'react';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {AriaLiveRegion, changeFocus} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const TextInputWithLiveError = () => {
  const errMsg = 'Error: First name is required.';
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef();
  const handleBlur = e => setHasError(e.target.value.trim().length === 0);
  const handleSubmit = () => hasError && changeFocus(inputRef.current);

  return (
    <>
      <FormField error={hasError ? 'error' : undefined} isRequired={true}>
        <FormField.Label>First Name:</FormField.Label>
        <FormField.Field>
          <FormField.Input onBlur={handleBlur} as={TextInput} ref={inputRef} />
          <FormField.Hint>
            <AriaLiveRegion>{hasError && errMsg}</AriaLiveRegion>
          </FormField.Hint>
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleSubmit}>Continue</PrimaryButton>
    </>
  );
};
