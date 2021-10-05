import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {FormField, FormFieldProps} from '@workday/canvas-kit-react/form-field';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import * as React from 'react';

import {ColorPickerModelContext} from './ColorPicker';

export interface CustomColorFormProps {
  children: React.ReactNode;
  label: FormFieldProps['label'];
}

const StyledForm = styled('form')<StyledType>({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export default createComponent('form')({
  displayName: 'CustomColorForm',
  Component: ({children, label, ...elemProps}: CustomColorFormProps, ref, Element) => {
    const {state, events} = React.useContext(ColorPickerModelContext);
    return (
      <StyledForm
        onSubmit={event => {
          event.preventDefault();
          events.setColor({color: `#${state.customColor}`});
        }}
        ref={ref}
        as={Element}
        {...elemProps}
      >
        <FormField label={label}>
          <HStack spacing="s">{children}</HStack>
        </FormField>
      </StyledForm>
    );
  },
});
