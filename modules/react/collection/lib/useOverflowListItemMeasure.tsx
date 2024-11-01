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
        model.events.addItemSize({
          id: name,
          width:
            localRef.current.offsetWidth +
            parseFloat(styles.marginLeft) +
            parseFloat(styles.marginRight),
          height:
            localRef.current.offsetWidth +
            parseFloat(styles.marginTop) +
            parseFloat(styles.marginBottom),
        });
        // if (model.state.orientation === 'horizontal') {
        //   model.events.addItemWidth({
        //     id: name,
        //     width:
        //       localRef.current.offsetWidth +
        //       parseFloat(styles.marginLeft) +
        //       parseFloat(styles.marginRight),
        //   });
        // } else {
        //   console.log('in here');
        //   model.events.addItemHeight({
        //     id: name,
        //     height:
        //       localRef.current.offsetWidth +
        //       parseFloat(styles.marginTop) +
        //       parseFloat(styles.marginBottom),
        //   });
        // }
      }

      return () => {
        model.events.removeItemSize({id: name});
        // if (model.state.orientation === 'horizontal') {
        //   model.events.removeItemWidth({id: name});
        // } else {
        //   console.log('remove item height', name);
        //   model.events.removeItemHeight({id: name});
        // }
      };
    });

    const hidden = model.state.hiddenIds.includes(name);

    return {
      ref: elementRef,
      'aria-hidden': hidden || undefined,

      style: hidden ? hiddenStyles : {},
      inert: hidden ? '' : undefined,
    };
  }
);
