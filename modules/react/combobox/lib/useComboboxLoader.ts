import React from 'react';

import {useListLoader} from '@workday/canvas-kit-react/collection';
import {useComboboxModel} from './useComboboxModel';

const useDebounce = () => {
  const debounceTimer = React.useRef(-1);

  React.useEffect(() => {
    return () => {
      // We want to clear any timeout on unload. We disable the ESLint rule because this is actually
      // what we want

      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearTimeout(debounceTimer.current);
    };
  }, []);

  return (fn: (...args: any[]) => any, wait: number) => {
    clearTimeout(debounceTimer.current);

    debounceTimer.current = (setTimeout(fn, wait) as any) as number; // We don't actually care what the real return type of setTimeout is. It is a number in the browser and something else in Node
  };
};

/**
* Creates a `Combobox` data loader and a model. The `Combobox` loader extends the {@link useListLoader}
 * and connects a {@link ComboboxInput Combobox.Input} to the filter of the data loader. A simple loader using
 * [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) could look like the
 * following:
 *
 * ```ts
 * const {model, loader} = useComboboxLoader(
 *   {
 *     total: 0,
 *     pageSize: 20,
 *     async load({pageNumber, pageSize, filter}) {
 *       // `filter` will be a `string`
 *       return fetch(`/myUrl?filter=${filter}`)
 *         .then(response => response.json())
 *         .then(response => {
 *           return {total: response.total, items: response.items};
 *         });
 *     },
 *   },
 *   useComboboxModel
 * );
 * ```
 */
export const useComboboxLoader: typeof useListLoader = (config, modelHook) => {
  const debounce = useDebounce();
  const list = useListLoader(
    {
      shouldLoad(params, state) {
        return (
          (config.shouldLoad ? config.shouldLoad(params, state) : true) &&
          state.visibility !== 'hidden'
        );
      },
      ...(modelHook.mergeConfig(config, {
        onChange(event) {
          const value = event.currentTarget.value;
          debounce(() => list.loader.updateFilter(value), 150);
        },
      } as typeof useComboboxModel.TConfig) as typeof config),
    },
    modelHook
  );

  return list;
};
