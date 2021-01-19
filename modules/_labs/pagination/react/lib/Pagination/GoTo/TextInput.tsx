import * as React from 'react';

import TextInput, {TextInputProps} from '@workday/canvas-kit-react-text-input';

export type GoToTextInputProps = TextInputProps;

export const GoToTextInput = ({id, value = '', onChange, ...elemProps}: GoToTextInputProps) => {
  return <TextInput id={id} onChange={onChange} size={1} value={value} width={55} {...elemProps} />;
};
