import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {TextInput} from '@workday/canvas-kit-react/text-input';

import {useComboboxInput} from './hooks/useComboboxInput';
import {useComboboxModel} from './hooks/useComboboxModel';

export const ComboboxInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxInput,
})<ExtractProps<typeof TextInput, never>>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
