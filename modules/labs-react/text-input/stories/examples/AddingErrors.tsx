import React from 'react';
import {TextInput, useTextInputModel} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';

export const AddingErrors = () => {
  const [value, setValue] = React.useState('');
  const [hint, setHint] = React.useState('');

  const model = useTextInputModel();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stringLength = event.target.value.length;
    if (stringLength !== 3) {
      model.events.addError();
      const hintStart = 'Word length must be';
      setHint(stringLength < 3 ? `${hintStart} greater than 2` : `${hintStart} less than 4`);
    } else {
      model.events.removeError();
      setHint('');
    }
    setValue(event.target.value);
  };

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextInput model={model}>
        <TextInput.Label>A three letter word</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} />
        <TextInput.Hint paddingTop={space.xxs}>{hint}</TextInput.Hint>
      </TextInput>
    </VStack>
  );
};
