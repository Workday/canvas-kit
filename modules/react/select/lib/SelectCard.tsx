import React from 'react';

import {Combobox} from '@workday/canvas-kit-react/combobox';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {useSelectCard} from './hooks/useSelectCard';
import {useSelectModel} from './hooks/useSelectModel';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';

const selectCardStyles = createStyles({
  maxHeight: px2rem(300),
});

export const SelectCard = createSubcomponent('div')({
  modelHook: useSelectModel,
  elemPropsHook: useSelectCard,
})<ExtractProps<typeof Combobox.Menu.Card>>(({children, ...elemProps}, Element) => {
  return (
    <Combobox.Menu.Card as={Element} {...mergeStyles(elemProps, selectCardStyles)}>
      {children}
    </Combobox.Menu.Card>
  );
});
