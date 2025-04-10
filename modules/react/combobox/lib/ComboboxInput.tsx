import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';

import {useComboboxModel} from './hooks/useComboboxModel';
import {useComboboxInput} from './hooks/useComboboxInput';

export const ComboboxInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxInput,
})<ExtractProps<typeof TextInput, never>>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
