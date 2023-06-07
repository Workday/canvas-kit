import {createElemPropsHook, useLocalRef, useMountLayout} from '@workday/canvas-kit-react/common';

import {useOverflowListModel} from './useOverflowListModel';

const hiddenStyles = {
  position: 'absolute',
  left: -99999,
} as const;

/**
 * This elemProps hook measures a list item and reports it to an `OverflowListModel`. This is used
 * in overflow detection.
 *
 * ```ts
 * const useMyItem = composeHooks(
 *   useOverflowListItemMeasure,
 *   useListRegisterItem,
 * )
 * ```
 */
export const useOverflowListItemMeasure = createElemPropsHook(useOverflowListModel)(
  (model, ref, elemProps: {'data-id'?: string} = {}) => {
    const {elementRef, localRef} = useLocalRef(ref as React.Ref<HTMLElement>);
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
