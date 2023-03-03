import * as React from 'react';

import {TextInput, TextInputProps} from '@workday/canvas-kit-react/text-input';
import {createComponent} from '@workday/canvas-kit-react/common';

import {GoToContext} from './useGoToForm';

export type GoToTextInputProps = TextInputProps & {
  'aria-label': string;
  value?: string | number;
};

export const GoToTextInput = createComponent('input')({
  displayName: 'Pagination.GoToTextInput',
  Component(elemProps: GoToTextInputProps, ref, Element) {
    const {inputProps} = React.useContext(GoToContext);

    return <TextInput ref={ref} as={Element} size={1} width={55} {...inputProps} {...elemProps} />;
  },
});
