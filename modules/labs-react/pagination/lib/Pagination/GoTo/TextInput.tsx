import * as React from 'react';

import {TextInput, TextInputProps} from '@workday/canvas-kit-react/text-input';

export type GoToTextInputProps = TextInputProps & {
  'aria-label': string;
};

export const GoToTextInput = ({
  'aria-label': ariaLabel,
  value = '',
  ...elemProps
}: GoToTextInputProps) => {
  return <TextInput aria-label={ariaLabel} size={1} value={value} width={55} {...elemProps} />;
};
