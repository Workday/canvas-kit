import {ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

export type TextInputLabelProps = ExtractProps<typeof FormField.Label, never>;

export const TextInputLabel = FormField.Label;
