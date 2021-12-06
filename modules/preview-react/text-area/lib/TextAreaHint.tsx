import {ExtractProps} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';

export type TextAreaHintProps = ExtractProps<typeof FormField.Hint, never>;

export const TextAreaHint = FormField.Hint;
