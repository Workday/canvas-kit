import {ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-labs-react/form-field';

export type TextAreaLabelProps = ExtractProps<typeof FormField.Label, never>;

export const TextAreaLabel = FormField.Label;
