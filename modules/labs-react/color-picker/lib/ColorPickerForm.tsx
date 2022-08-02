import styled from '@emotion/styled';
import {createSubcomponent, StyledType} from '@workday/canvas-kit-react/common';
import {FormField, FormFieldProps} from '@workday/canvas-kit-react/form-field';
import {HStack} from '@workday/canvas-kit-react/layout';
import * as React from 'react';
import {useColorPickerModel} from './useColorPickerModel';
import {formatValue} from './ColorPickerInput';

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

export default createSubcomponent('form')({
  displayName: 'CustomColorForm',
  modelHook: useColorPickerModel,
})<CustomColorFormProps>(({children, label, ...elemProps}, Element, model) => {
  return (
    <StyledForm
      onSubmit={event => {
        event.preventDefault();
        model.events.select({id: `#${formatValue(model.state.customColor)}`});
      }}
      as={Element}
      {...elemProps}
    >
      <FormField label={label}>
        <HStack spacing="s">{children}</HStack>
      </FormField>
    </StyledForm>
  );
});
