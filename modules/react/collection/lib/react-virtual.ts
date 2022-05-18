// retype interfaces
// delete when `react-virtual` accepts this PR: https://github.com/TanStack/react-virtual/pull/277

import {useVirtual as useVirtualReactVirtual, defaultRangeExtractor} from 'react-virtual';

type ScrollAlignment = 'start' | 'center' | 'end' | 'auto';

export interface ScrollToOptions {
  align: ScrollAlignment;
}

export interface ScrollToOffsetOptions extends ScrollToOptions {}
export interface ScrollToIndexOptions extends ScrollToOptions {}

type Key = number | string;

export type VirtualItem = {
  key: Key;
  index: number;
  start: number;
  end: number;
  size: number;
  measureRef: (el: HTMLElement | null) => void;
};

export interface Range {
  start: number;
  end: number;
  overscan: number;
  size: number;
}

interface Rect {
  width: number;
  height: number;
}

export interface Options<T> {
  size: number;
  parentRef: React.RefObject<T>;
  estimateSize?: (index: number) => number;
  overscan?: number;
  horizontal?: boolean;
  scrollToFn?: (offset: number, defaultScrollToFn?: (offset: number) => void) => void;
  paddingStart?: number;
  paddingEnd?: number;
  useObserver?: (ref: React.RefObject<T>, initialRect?: Rect) => Rect;
  initialRect?: Rect;
  keyExtractor?: (index: number) => Key;
  onScrollElement?: React.RefObject<HTMLElement>;
  scrollOffsetFn?: (event?: Event) => number;
  rangeExtractor?: (range: Range) => number[];
}

const useVirtual = useVirtualReactVirtual as <T>(
  options: Options<T>
) => {
  virtualItems: VirtualItem[];
  totalSize: number;
  scrollToOffset: (index: number, options?: ScrollToOffsetOptions) => void;
  scrollToIndex: (index: number, options?: ScrollToIndexOptions) => void;
  measure: () => void;
};

export {defaultRangeExtractor, useVirtual};
