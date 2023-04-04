import React from 'react';

import {Combobox, useComboboxModel} from '@workday/canvas-kit-react/combobox';
import {useListModel} from '@workday/canvas-kit-react/collection';
import {ModelExtras, useMount} from '@workday/canvas-kit-react/common';

type ListConfig = typeof useListModel.TConfig;

interface ArrayLike<T> {
  length: number;
  slice: Array<T>['slice'];
  filter: Array<T>['filter'];
  find: Array<T>['find'];
  concat: Array<T>['concat'];
  map: Array<T>['map'];
  [index: number]: T;
}

// class DynamicArray<T> extends Array<T> {
//   private items[]
// }

interface LoadReturn<T> {
  items: T[];
}
interface AsyncCollectionConfig<T> extends ListConfig {
  pageSize: number;
  total: number;
  load(pageNumber: number, pageSize: number): LoadReturn<T> | Promise<LoadReturn<T>>;
}

/**
 * A loading buffer is how many items we want to look at ahead of the current virtual window. A
 * higher amount can load too many pages initially. A lower number can cause items to not be loaded
 * yet when scrolling. This will probably become a floating number later based on scrolling speed.
 * Ideally the faster the user scrolls, this number will be higher or "predict" where to focus loading
 * so the user doesn't see unloaded items. But if the user is scrolling too fast, we may simply delay
 * data loading. That logic would be based on timers. For now, we'll just hardcode.
 */
const loadingBuffer = 3;

function updateItems<T>(newItems: T[], startIndex = 0) {
  return function itemStateUpdater(items: T[]) {
    // replace existing indexes with data from external service
    newItems.forEach((item, index) => {
      items[index + startIndex] = item;
    });
    const returnedItems = items.concat([]);
    return returnedItems; // return a new reference
  };
}

function useAsyncCollection<T, M extends ((...args) => any) & ModelExtras<any, any, any, any, any>>(
  config: AsyncCollectionConfig<T>,
  modelHook: M = useListModel as any
): M extends typeof useListModel ? ReturnType<typeof useListModel> : ReturnType<typeof modelHook> {
  const [items, setItems] = React.useState<T[]>(() => {
    return Array(config.total).fill(undefined);
  });
  const loadingRef = React.useRef<Record<number, boolean>>({});

  function load<T>(
    pageNumber: number,
    pageSize: number,
    loadCb: AsyncCollectionConfig<T>['load'],
    loadingCache: Record<number, boolean>
  ) {
    if (loadingCache[pageNumber]) {
      return Promise.resolve(items => items as T[]);
    }
    loadingCache[pageNumber] = true;
    return Promise.resolve(loadCb(pageNumber, pageSize)).then(({items}) => {
      loadingCache[pageNumber] = false;
      return updateItems(items, (pageNumber - 1) * pageSize);
    });
  }

  // Our `useEffect` functions use `config.load`, but we don't want to rerun the effects if the user
  // sends a different load function every render
  const loadRef = React.useRef(config.load);
  loadRef.current = config.load;

  const itemsRef = React.useRef(items);
  itemsRef.current = items;
  const requestAnimationFrameRef = React.useRef(0);

  const shouldLoadIndex = <T extends any>(index: number, fn: (data: T) => void) => {
    return (data: T) => {
      if (!items[index]) {
        load(
          Math.floor(index / config.pageSize) + 1,
          config.pageSize,
          loadRef.current,
          loadingRef.current
        )
          .then(setItems)
          .then(() => {
            cancelAnimationFrame(requestAnimationFrameRef.current);
            requestAnimationFrameRef.current = requestAnimationFrame(() => fn(data));
          });
        return false;
      }
      return true;
    };
  };

  const model = modelHook(
    (modelHook as typeof useListModel).mergeConfig(config, {
      items,
      shouldGoToNext: shouldLoadIndex(1, () => model.events.goToNext()),
      shouldGoToLast: shouldLoadIndex(items.length - 1, () => model.events.goToLast()),
      shouldGoToFirst: shouldLoadIndex(0, () => model.events.goToLast()),
    })
  ) as ReturnType<typeof useListModel>;

  const {virtualItems} = model.state.UNSTABLE_virtual;

  React.useEffect(() => {
    if (!virtualItems.length) {
      return;
    }

    const firstItem = virtualItems[0];
    const lastItem = virtualItems.reverse()[0];

    // detect too close to unloaded end
    if (
      lastItem.index < config.total - 1 &&
      !itemsRef.current[Math.min(lastItem.index + loadingBuffer, items.length)]
    ) {
      const pageNumber = Math.floor((lastItem.index + loadingBuffer + 1) / config.pageSize) + 1;
      load(pageNumber, config.pageSize, loadRef.current, loadingRef.current).then(setItems);
    }

    if (firstItem.index >= 0 && !itemsRef.current[Math.max(firstItem.index + loadingBuffer, 0)]) {
      const pageNumber = Math.floor((firstItem.index - loadingBuffer + 1) / config.pageSize) + 1;
      load(pageNumber, config.pageSize, loadRef.current, loadingRef.current).then(setItems);
    }

    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
    };
  }, [virtualItems, config.total, config.pageSize, items.length]);

  useMount(() => {
    load(1, config.pageSize, loadRef.current, loadingRef.current).then(setItems);
  });

  return model as any;
}

export const Autocomplete = () => {
  const autocomplete = useAsyncCollection(
    {
      getId: item => item as string,
      getTextValue: item => item as string,
      shouldVirtualize: true,
      total: 1000,
      pageSize: 20,
      async load(pageNumber, pageSize) {
        console.log('loading', pageNumber);
        // return Promise.resolve({
        //   items: Array(pageSize)
        //     .fill(true)
        //     .map((_, index) => `Option ${(pageNumber - 1) * pageSize + index + 1}`),
        // });
        return new Promise<{items: string[]}>(resolve => {
          setTimeout(() => {
            resolve({
              items: Array(pageSize)
                .fill(true)
                .map((_, index) => `Option ${(pageNumber - 1) * pageSize + index + 1}`),
            });
          }, 500);
        });
      },
    },
    useComboboxModel
  );

  return (
    <Combobox model={autocomplete}>
      <Combobox.Target />
      <Combobox.Menu.Popper>
        <Combobox.Menu.Card>
          <Combobox.Menu.List maxHeight={200}>
            {item => <Combobox.Menu.Item data-id={item}>{item}</Combobox.Menu.Item>}
          </Combobox.Menu.List>
        </Combobox.Menu.Card>
      </Combobox.Menu.Popper>
    </Combobox>
  );
};
