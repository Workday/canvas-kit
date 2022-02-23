import {ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

export type TextInputHintProps = ExtractProps<typeof FormField.Hint, never>;

export const TextInputHint = FormField.Hint;
