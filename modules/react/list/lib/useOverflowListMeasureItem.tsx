import {createHook, useLocalRef, useMountLayout} from '@workday/canvas-kit-react/common';

import {OverflowListModel} from './useOverflowListModel';

const hiddenStyles = {
  position: 'absolute',
  left: -99999,
} as const;

export const useOverflowListMeasureItem = createHook(
  (model: OverflowListModel, ref?: React.Ref<HTMLElement>, elemProps: {name?: string} = {}) => {
    const {elementRef, localRef} = useLocalRef(ref);
    const name = elemProps.name || '';

    useMountLayout(() => {
      if (localRef.current) {
        const styles = getComputedStyle(localRef.current);
        model.events.addItemWidth({
          id: name,
          width:
            localRef.current.offsetWidth +
            parseFloat(styles.marginLeft) +
            parseFloat(styles.marginRight),
        });
      }

      return () => {
        model.events.removeItemWidth({id: name});
      };
    });

    const hidden = model.state.hiddenIds.includes(name);

    return {
      ref: elementRef,
      'aria-hidden': hidden || undefined,
      style: hidden ? hiddenStyles : {},
    };
  }
);
