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
