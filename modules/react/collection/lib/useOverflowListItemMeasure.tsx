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
            localRef.current.offsetHeight +
            parseFloat(styles.marginTop) +
            parseFloat(styles.marginBottom),
        });
      }

      return () => {
        model.events.removeItemSize({id: name});
      };
    });

    const hidden = model.state.hiddenIds.includes(name);

    return {
      ref: elementRef,
      'aria-hidden': hidden || undefined,

      style: hidden ? hiddenStyles : {},

      // `inert` is not directly supported in React < 19 which means the prop is forwarded directly
      // as an HTML attribute. React 19 adds support for this prop officially as a `boolean |
      // undefined`. React <19 will ignore `true`, so we need to make it the string `'true'`. We
      // cannot change this until we drop support for React <19.
      //
      // - React 18: `inert: true` => no `inert` attribute
      // - React 18: `inert: 'true'` => `inert="true"` in the DOM
      // - React 19: `inert: true` => `inert` in the DOM
      // - React 19: `inert: 'true'` => `inert` in the DOM
      //
      // There is a difference between `inert` in both versions, where React 18 will add the
      // `'true'` and React 19 will not. This shouldn't cause issues unless someone has a
      // `[inert=true]` CSS selector which will not match the React 19 behavior. For this reason, we
      // cannot use `'false'` and must use `undefined` as the falsey case. This should ensure
      // correct behavior in all versions of React.
      inert: hidden ? 'true' : undefined,
    };
  }
);
