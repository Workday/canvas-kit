import React from 'react';
import {AriaLiveRegion, changeFocus} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const TextInputWithLiveError = () => {
  const errMsg = 'Error: First name is required.';
  const [hasError, setHasError] = React.useState('no');
  const inputRef = React.useRef();
  const handleBlur = e => setHasError(e.target.value.trim().length === 0 ? 'error' : 'no');
  const handleSubmit = () => hasError && changeFocus(inputRef.current);

  return (
    <>
      <FormField error={hasError} isRequired={true}>
        <FormField.Label>First Name:</FormField.Label>
        <FormField.Input as={TextInput} onBlur={handleBlur} ref={inputRef} />
        <FormField.Hint height="m">
          <AriaLiveRegion>{hasError === 'error' && errMsg}</AriaLiveRegion>
        </FormField.Hint>
      </FormField>
      <PrimaryButton onClick={handleSubmit}>Continue</PrimaryButton>
    </>
  );
};
