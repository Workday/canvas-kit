import {createElemPropsHook, useLocalRef, useMountLayout} from '@workday/canvas-kit-react/common';

import {useOverflowListModel2} from './useOverflowListModel';

const hiddenStyles = {
  position: 'absolute',
  left: -99999,
} as const;

export const useOverflowListItemMeasure = createElemPropsHook(useOverflowListModel2)(
  (model, ref?: React.Ref<HTMLElement>, elemProps: {'data-id'?: string} = {}) => {
    const {elementRef, localRef} = useLocalRef(ref);
    const name = elemProps['data-id'] || '';

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
