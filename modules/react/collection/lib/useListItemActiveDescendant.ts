import React from 'react';
import {createElemPropsHook, useLocalRef} from '@workday/canvas-kit-react/common';

import {useListModel} from './useListModel';

export const useListItemActiveDescendant = createElemPropsHook(useListModel)(
  (model, ref?: React.Ref<HTMLInputElement>, elemProps) => {
    const {localRef, elementRef} = useLocalRef(ref);
    React.useEffect(() => {
      if (model.state.cursorId === elemProps['data-id']) {
        console.log('useEffect scroll');
        if (model.state.isVirtualized) {
          const item = model.navigation.getItem(model.state.cursorId, model);
          model.state.UNSTABLE_virtual.scrollToIndex(item.index);
        } else {
          const listboxId = localRef.current?.getAttribute('aria-controls');
          if (listboxId) {
            const menuItem = document.querySelector(
              `[id="${listboxId}"] [data-id="${model.state.cursorId}"]`
            );
            if (menuItem) {
              menuItem.scrollIntoView({block: 'nearest'});
            }
          }
        }
      }

      // we only want to run this effect if the cursor changes and not any other time
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model.state.cursorId]);

    return {ref: elementRef};
  }
);
