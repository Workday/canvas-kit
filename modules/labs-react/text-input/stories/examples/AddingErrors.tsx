import React from 'react';
import {TextInput, useTextInputModel} from '@workday/canvas-kit-labs-react/text-input';
import {VStack} from '@workday/canvas-kit-labs-react/layout';
import {space} from '@workday/canvas-kit-react/tokens';

export const AddingErrors = () => {
  const [value, setValue] = React.useState('');
  const [showHint, setShowHint] = React.useState(false);

  const model = useTextInputModel();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 2) {
      model.events.addError();
      setShowHint(true);
    } else {
      model.events.removeError();
      setShowHint(false);
    }
    setValue(event.target.value);
  };

  return (
    <VStack spacing="xxxs" alignItems="flex-start">
      <TextInput model={model}>
        <TextInput.Label>A three letter word</TextInput.Label>
        <TextInput.Field onChange={handleChange} value={value} />
        {showHint && (
          <TextInput.Hint paddingTop={space.xxs}>Word length must be greater than 2</TextInput.Hint>
        )}
      </TextInput>
    </VStack>
  );
};
