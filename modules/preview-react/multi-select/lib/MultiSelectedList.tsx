import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {ListBox} from '@workday/canvas-kit-react/collection';

import {useMultiSelectModel} from './useMultiSelectModel';
import {MultiSelectedItem, MultiSelectedItemProps} from './MultiSelectedItem';

export interface MultiSelectedListProps
  extends MultiSelectedItemProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Disabled is forwarded to the MultiSelectedItem component to make sure each item is also
   * disabled.
   */
  disabled?: boolean;
}

export const MultiSelectedList = createSubcomponent('div')({
  modelHook: useMultiSelectModel,
})<MultiSelectedListProps>(
  ({'aria-labelledby': ariaLabelledBy, disabled, removeLabel}, Element, model) => {
    return model.selected.state.items.length ? (
      <>
        <div data-part="separator" />
        <ListBox
          model={model.selected}
          as={Element}
          role="listbox"
          aria-orientation="horizontal"
          aria-labelledby={ariaLabelledBy}
        >
          {item => (
            <MultiSelectedItem disabled={disabled} removeLabel={removeLabel}>
              {item.textValue}
            </MultiSelectedItem>
          )}
        </ListBox>
      </>
    ) : null;
  }
);
