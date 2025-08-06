import React from 'react';
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
      // cannot change this until we drop support for React <19. The old workaround was `inert: ''`
      // which works in React <19, but in React 19, the empty string is considered `false` and the
      // attribute is not added to the DOM. If we try to coerce a `'true'`, the attribute will be
      // added in both React 18 and 19, but dev mode will throw a warning.
      //
      // - React 18: `inert: true` => no `inert` attribute
      // - React 18: `inert: 'true'` => `inert="true"` in the DOM
      // - React 19: `inert: true` => `inert` in the DOM
      // - React 19: `inert: 'true'` => `inert` in the DOM
      //
      // The only way to remove the dev warning in React 19, but have the same functionality in all
      // versions of React, we must detect React 19 and set the attribute accordingly in either
      // case. Do not remove this wonky code until we drop support for React <19.
      // https://github.com/facebook/react/issues/17157
      //
      // @ts-ignore
      inert: React.use ? hidden : hidden ? '' : undefined,
    };
  }
);
