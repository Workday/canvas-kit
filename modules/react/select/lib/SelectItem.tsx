import {Combobox} from '@workday/canvas-kit-react/combobox';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';

import {useSelectModel} from './hooks/useSelectModel';

export const SelectItem = createSubcomponent('li')({
  modelHook: useSelectModel,
  subComponents: {
    Icon: Combobox.Menu.Item.Icon,
  },
})<ExtractProps<typeof Combobox.Menu.Item>>(({children, ...elemProps}, Element, _model) => {
  return (
    <Combobox.Menu.Item as={Element} {...elemProps}>
      {children}
    </Combobox.Menu.Item>
  );
});
