import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';
import {AriaLiveRegion, AccessibleHide} from '@workday/canvas-kit-react/common';

const MAX_CHARACTERS = 200;
const DEBOUNCE_DELAY = 2000; // 2 seconds after user stops typing

export const CommentBoxWithCharLimit = () => {
  const [value, setValue] = React.useState('');
  const [liveUpdateStr, setLiveUpdateStr] = React.useState('');
  const hintTextStr = `${value.length} of ${MAX_CHARACTERS} characters`;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    setLiveUpdateStr('');
  };

  React.useEffect(() => {
    // Immediately announce when limit is reached (bypass debounce)
    if (value.length === MAX_CHARACTERS) {
      setLiveUpdateStr(`Character limit reached. ${value.length} of ${MAX_CHARACTERS} characters`);
      return;
    }

    // Otherwise, debounce the updates
    const timer = setTimeout(() => {
      setLiveUpdateStr(hintTextStr);
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(timer);
  }, [hintTextStr]);

  return (
    <FormField>
      <FormField.Label>Comments</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextArea}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          maxLength={MAX_CHARACTERS}
        />
        <FormField.Hint>{hintTextStr}</FormField.Hint>
        <AriaLiveRegion as={AccessibleHide}>{liveUpdateStr}</AriaLiveRegion>
      </FormField.Field>
    </FormField>
  );
};
