import * as React from 'react';

import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {createComponent} from '@workday/canvas-kit-react/common';
import {TextInput, TextInputProps} from '@workday/canvas-kit-react/text-input';

import {GoToContext} from './useGoToForm';

export type GoToTextInputProps = TextInputProps & {
  'aria-label': string;
  value?: string | number;
};

export const paginationGoToTextInputStencil = createStencil({
  base: {
    minWidth: px2rem(55),
    width: px2rem(55),
  },
});

export const GoToTextInput = createComponent('input')({
  displayName: 'Pagination.GoToTextInput',
  Component(elemProps: GoToTextInputProps, ref, Element) {
    const {inputProps} = React.useContext(GoToContext);

    return (
      <TextInput
        ref={ref}
        as={Element}
        size={1}
        {...handleCsProp({...inputProps, ...elemProps}, paginationGoToTextInputStencil())}
      />
    );
  },
});
