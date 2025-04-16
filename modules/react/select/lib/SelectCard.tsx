import {Combobox} from '@workday/canvas-kit-react/combobox';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {useSelectCard} from './hooks/useSelectCard';
import {useSelectModel} from './hooks/useSelectModel';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {menuCardStencil} from '@workday/canvas-kit-react/menu';

export const selectCardStencil = createStencil({
  base: {
    [menuCardStencil.vars.maxHeight]: px2rem(300),
  },
});

export const SelectCard = createSubcomponent('div')({
  modelHook: useSelectModel,
  elemPropsHook: useSelectCard,
})<ExtractProps<typeof Combobox.Menu.Card>>(({children, ...elemProps}, Element) => {
  return (
    <Combobox.Menu.Card as={Element} {...handleCsProp(elemProps, selectCardStencil())}>
      {children}
    </Combobox.Menu.Card>
  );
});
