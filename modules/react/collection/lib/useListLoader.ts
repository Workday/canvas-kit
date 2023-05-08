import React from 'react';

import {useListModel} from './useListModel';

export interface LoadReturn<T> {
  items: T[];
  total?: number;
}

export interface LoadParams {
  pageNumber: number;
  pageSize: number;
  filter: CollectionLoader['filter'];
  sorter: CollectionLoader['sorter'];
}
export interface AsyncCollectionConfig<T> {
  pageSize: number;
  total: number;
  load(params: LoadParams): LoadReturn<T> | Promise<LoadReturn<T>>;
}

export interface CollectionLoader {
  filter: string | Record<string, string>;
  updateFilter(value: string): void;
  sorter: string | Record<string, string>;
  updateSorter(value: string): void;
  isLoading: boolean;
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

type Updater<T> = {total?: number; updater: (items: T[]) => T[]};

function load<T>(
  params: {
    pageNumber: number;
    pageSize: number;
    filter: CollectionLoader['filter'];
    sorter: CollectionLoader['sorter'];
  },
  loadCb: AsyncCollectionConfig<T>['load'],
  loadingCache: Record<number, boolean>
): Promise<Updater<T>> {
  if (loadingCache[params.pageNumber]) {
    return Promise.resolve({updater: items => items});
  }
  loadingCache[params.pageNumber] = true;

  return Promise.resolve(loadCb(params)).then(({items, total}) => {
    loadingCache[params.pageNumber] = false;
    return {total, updater: updateItems(items, (params.pageNumber - 1) * params.pageSize)};
  });
}

export function getPageNumber(index: number, pageSize: number) {
  if (index <= 0) {
    return 1;
  }

  return Math.ceil((index + 1) / pageSize);
}

function clamp(input: number, min: number, max: number) {
  return Math.max(Math.min(input, max), min);
}

/**
 *
 * @param start The start index of the virtual window
 * @param end The end index of the virtual window
 * @param pageSize Expected load page size
 * @param items Sparse array of all loaded items
 * @param overScan How many items ahead we want to look ahead to trigger loading. Unloaded items
 * that are this many items outside the current start and end numbers will trigger a loading of
 * a page
 */
export function getPagesToLoad<T>(
  start: number,
  end: number,
  pageSize: number,
  items: T[],
  overScan = 3
): number[] {
  const pagesToLoad: number[] = [];

  const lookBehindIndex = clamp(start - overScan, 0, items.length - 1);
  if (start >= 0 && !items[lookBehindIndex]) {
    const pageNumber = getPageNumber(lookBehindIndex, pageSize);
    pagesToLoad.push(pageNumber);
  }

  const lookaheadIndex = clamp(end + overScan - 1, 0, items.length - 1);
  if (end < items.length - 1 && !items[lookaheadIndex]) {
    const pageNumber = getPageNumber(lookaheadIndex, pageSize);
    if (!pagesToLoad.includes(pageNumber)) {
      pagesToLoad.push(pageNumber);
    }
  }

  return pagesToLoad;
}

const resetItems = (total: number) => Array(total).fill(undefined);

/**
 * Create a data loader and a model. The model should be passed to a collection component. The
 * loader can be used to manipulate filters, sorters, and clear cache.
 *
 * A simple loader using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 * could look like the following:
 *
 * ```ts
 * const {model, loader} = useListLoader(
 *   {
 *     total: 1000,
 *     pageSize: 20,
 *     async load({pageNumber, pageSize}) {
 *       return fetch('/myUrl')
 *         .then(response => response.json())
 *         .then(response => {
 *           return {total: response.total, items: response.items};
 *         });
 *     },
 *   },
 *   useListModel
 * );
 * ```
 *
 * @param config Config that contains the loader config and the model config
 * @param modelHook A model hook that describes which model should be returned.
 */
export function useListLoader<
  T,
  // I cannot get Typescript to accept models that extend from `useListModel` to be considered valid
  M extends ((...args: any[]) => any) & Omit<typeof useListModel, 'TConfig' | 'Context'>
>(
  config: AsyncCollectionConfig<T> & typeof useListModel.TConfig,
  modelHook: M
): {model: ReturnType<M>; loader: CollectionLoader} {
  const [total, setTotal] = React.useState(config.total);
  const [items, setItems] = React.useState<T[]>(() => {
    return resetItems(config.total);
  });

  // keep track of pages that are currently loading
  const loadingRef = React.useRef<Record<number, boolean>>({});

  const [filter, setFilter] = React.useState<CollectionLoader['filter']>('');
  const [sorter, setSorter] = React.useState<CollectionLoader['sorter']>('');

  const updateItems = React.useCallback(
    ({updater, total: newTotal}: Updater<T>) => {
      if (newTotal !== undefined && total !== newTotal) {
        setTotal(newTotal);
        setItems(() => {
          const items = resetItems(newTotal);
          return updater(items);
        });
        return;
      }
      setItems(updater);
    },
    [total]
  );

  const updateFilter = (filter: CollectionLoader['filter']) => {
    loadingRef.current = {};
    setFilter(filter);
    const params = {
      pageNumber: 1,
      pageSize: config.pageSize,
      filter,
      sorter,
    };
    load(params, loadRef.current, loadingRef.current).then(updateItems);
  };

  const updateSorter = (sorter: CollectionLoader['sorter']) => {
    loadingRef.current = {};
    setSorter(sorter);
    load(
      {
        pageNumber: 1,
        pageSize: config.pageSize,
        filter,
        sorter,
      },
      loadRef.current,
      loadingRef.current
    ).then(updateItems);
  };

  // Our `useEffect` functions use `config.load`, but we don't want to rerun the effects if the user
  // sends a different load function every render
  const loadRef = React.useRef(config.load);
  loadRef.current = config.load;

  const itemsRef = React.useRef(items);
  itemsRef.current = items;
  const requestAnimationFrameRef = React.useRef(0);

  const shouldLoadIndex = (
    navigationMethod: Exclude<keyof ReturnType<typeof useListModel>['navigation'], 'getItem'>,
    eventKey: keyof ReturnType<typeof useListModel>['events']
  ) => {
    return (data: any) => {
      const index = model.navigation[navigationMethod](model.state.cursorIndexRef.current, model);
      if (!items[index]) {
        load(
          {
            pageNumber: Math.floor(index / config.pageSize) + 1,
            pageSize: config.pageSize,
            filter,
            sorter,
          },
          loadRef.current,
          loadingRef.current
        )
          .then(updateItems)
          .then(() => {
            cancelAnimationFrame(requestAnimationFrameRef.current);
            requestAnimationFrameRef.current = requestAnimationFrame(() => {
              model.events[eventKey](data as any);
            });
          });
        return false;
      }
      return true;
    };
  };

  const model = modelHook(
    modelHook.mergeConfig(config, {
      items,
      shouldGoToNext: shouldLoadIndex('getNext', 'goToNext'),
      shouldGoToPrevious: shouldLoadIndex('getPrevious', 'goToPrevious'),
      shouldGoToLast: shouldLoadIndex('getLast', 'goToLast'),
      shouldGoToFirst: shouldLoadIndex('getFirst', 'goToFirst'),
      shouldGoToNextPage: shouldLoadIndex('getNextPage', 'goToNextPage'),
      shouldGoToPreviousPage: shouldLoadIndex('getPreviousPage', 'goToPreviousPage'),
    })
  ) as ReturnType<typeof useListModel>;

  const {virtualItems} = model.state.UNSTABLE_virtual;

  // Our only signal to trigger loading is if our virtual indexes are too close to boundaries.
  React.useEffect(() => {
    if (!virtualItems.length) {
      return;
    }

    const firstItem = virtualItems[0];
    const lastItem = virtualItems[virtualItems.length - 1];

    const pagesToLoad = getPagesToLoad(
      firstItem.index,
      lastItem.index,
      config.pageSize,
      itemsRef.current,
      loadingBuffer
    );

    pagesToLoad.forEach(pageNumber => {
      load(
        {pageNumber, pageSize: config.pageSize, filter, sorter},
        loadRef.current,
        loadingRef.current
      ).then(updateItems);
    });

    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
    };
  }, [virtualItems, config.pageSize, filter, sorter, updateItems]);

  // Typescript won't allow me to say the included model extends `useListModel` for some reason, so
  // we have no way to type check it. Without the constraint, Typescript doesn't know how type it
  // properly, so we have an `as any`.
  return {
    model: model as any,
    loader: {
      filter,
      updateFilter,
      sorter,
      updateSorter,
      // we reduce the ref instead of a state variable because the loader mutates this ref and
      // triggers state changes when loading is finished.
      isLoading: Object.values(loadingRef.current).reduce(
        (loading, result) => loading || result,
        false
      ),
    },
  };
}
