import {Combobox} from '@workday/canvas-kit-react/combobox';
import {useSelectModel} from './hooks/useSelectModel';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {handleCsProp} from '@workday/canvas-kit-styling';

export const SelectItem = createSubcomponent('li')({
  modelHook: useSelectModel,
  subComponents: {
    Icon: Combobox.Menu.Item.Icon,
  },
})<ExtractProps<typeof Combobox.Menu.Item>>(({children, ...elemProps}, Element, _model) => {
  return (
    <Combobox.Menu.Item as={Element} {...handleCsProp(elemProps)}>
      {children}
    </Combobox.Menu.Item>
  );
});
