import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {type, space} from '@workday/canvas-kit-react/tokens';
import {LabelText, Text} from '@workday/canvas-kit-react/text';
import {useFormFieldLabel, useFormFieldModel} from './hooks';
import {createStyles} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {brand} from '@workday/canvas-tokens-web';

export interface FormFieldLabelProps extends ExtractProps<typeof LabelText, never> {
  /**
   * The text of the label.
   */
  children: React.ReactNode;
}

const labelStyles = createStyles({
  fontWeight: type.properties.fontWeights.medium,
  minWidth: '180px',
});

const asteriskStyles = createStyles({
  marginInlineStart: space.xxxs,
  fontSize: type.properties.fontSizes[20],
  fontWeight: type.properties.fontWeights.regular,
  textDecoration: 'unset',
  color: brand.error.base,
});

export const FormFieldLabel = createSubcomponent(LabelText)({
  displayName: 'FormField.Label',
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldLabel,
})<FormFieldLabelProps>(({children, ...elemProps}, Element, model) => {
  return (
    <LabelText as={Element} {...mergeStyles(elemProps, [labelStyles])}>
      {children}
      {model.state.isRequired && (
        <Text cs={asteriskStyles} aria-hidden="true">
          *
        </Text>
      )}
    </LabelText>
  );
});
