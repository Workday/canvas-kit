import * as React from 'react';

import {TextInput, TextInputProps} from '@workday/canvas-kit-react/text-input';
import {createComponent} from '../../../../common';

export type GoToTextInputProps = TextInputProps & {
  'aria-label': string;
  value?: string | number;
};

export const GoToTextInput = createComponent('input')({
  displayName: 'Pagination.GoToTextInput',
  Component(elemProps: GoToTextInputProps) {
    return <TextInput size={1} value="" width={55} {...elemProps} />;
  },
});
