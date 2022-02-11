import React from 'react';
import {TextArea} from '@workday/canvas-kit-preview-react/text-area';
import {space} from '@workday/canvas-kit-react/tokens';

export const Error = () => {
  const [value, setValue] = React.useState('four');
  const [hint, setHint] = React.useState('');
  const [hasError, setHasError] = React.useState(false);

  const validateInput = (value: string) => {
    const stringLength = value.length;
    if (stringLength !== 3) {
      setHasError(true);
      const hintStart = 'Word length must be';
      setHint(stringLength < 3 ? `${hintStart} greater than 2` : `${hintStart} less than 4`);
    } else {
      setHasError(false);
      setHint('');
    }
  };

  React.useEffect(() => {
    validateInput(value);
    // Only run on load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    validateInput(event.target.value);
    setValue(event.target.value);
  };

  return (
    <TextArea hasError={hasError} orientation="vertical">
      <TextArea.Label>A three letter word</TextArea.Label>
      <TextArea.Field onChange={handleChange} value={value} />
      <TextArea.Hint paddingTop={space.xxs}>{hint}</TextArea.Hint>
    </TextArea>
  );
};
