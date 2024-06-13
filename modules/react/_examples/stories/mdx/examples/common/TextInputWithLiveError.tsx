import React, {useState, useRef} from 'react';
import {TextInput} from '@workday/canvas-kit-preview-react/text-input';
import {AriaLiveRegion, changeFocus} from '@workday/canvas-kit-react/common';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const TextInputWithLiveError = () => {
  const errMsg = 'Error: First name is required.';
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef();
  const handleBlur = e => setHasError(e.target.value.trim().length === 0);
  const handleSubmit = () => hasError && changeFocus(inputRef.current);

  return (
    <>
      <TextInput orientation="vertical" hasError={hasError} isRequired={true}>
        <TextInput.Label>First Name:</TextInput.Label>
        <TextInput.Field onBlur={handleBlur} ref={inputRef} />
        <TextInput.Hint height={'16px'}>
          <AriaLiveRegion>{hasError && errMsg}</AriaLiveRegion>
        </TextInput.Hint>
      </TextInput>
      <PrimaryButton onClick={handleSubmit}>Continue</PrimaryButton>
    </>
  );
};
