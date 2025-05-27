// Type definitions and re-exports for @tanstack/react-virtual
// This provides a compatibility layer for Canvas Kit's collection module

import React, {RefObject} from 'react';
import {
  useVirtualizer,
  defaultRangeExtractor,
  type VirtualItem as TanStackVirtualItem,
  type VirtualizerOptions,
  type Virtualizer,
  type Range as TanStackRange,
} from '@tanstack/react-virtual';

// Scroll alignment type
type ScrollAlignment = 'start' | 'center' | 'end' | 'auto';

// Scroll options interfaces
export interface ScrollToOptions {
  align?: ScrollAlignment;
  behavior?: ScrollBehavior;
}

export interface ScrollToOffsetOptions extends ScrollToOptions {}
export interface ScrollToIndexOptions extends ScrollToOptions {}

// Key type for items
type Key = number | string;

// Canvas Kit compatible VirtualItem interface
export type VirtualItem = {
  key: Key;
  index: number;
  start: number;
  end: number;
  size: number;
  measureRef: (el: HTMLElement | null) => void;
};

// Range interface for custom range extractors
export interface Range {
  start: number;
  end: number;
  overscan: number;
  size: number;
}

// Rect interface for observer
interface Rect {
  width: number;
  height: number;
}

// Canvas Kit compatible options interface - supporting both new and old APIs
export interface Options<T extends Element | Window = Element> {
  // New TanStack API options
  count?: number;
  getScrollElement?: () => T | null;

  // Legacy react-virtual v2 options (for backward compatibility)
  size?: number;
  parentRef?: RefObject<T>;

  // Common options
  estimateSize?: (index: number) => number;
  overscan?: number;
  horizontal?: boolean;
  scrollToFn?: (
    offset: number,
    options: {
      adjustments?: number;
      behavior?: ScrollBehavior;
    },
    instance: Virtualizer<T, Element>
  ) => void;
  paddingStart?: number;
  paddingEnd?: number;
  keyExtractor?: (index: number) => Key;
  rangeExtractor?: (range: Range) => number[];

  // Other legacy options for full compatibility
  useObserver?: (ref: RefObject<T>, initialRect?: Rect) => Rect;
  initialRect?: Rect;
  onScrollElement?: RefObject<HTMLElement>;
  scrollOffsetFn?: (event?: Event) => number;
}

// Canvas Kit compatible return type
export interface UseVirtualResult {
  virtualItems: VirtualItem[];
  totalSize: number;
  scrollToOffset: (offset: number, options?: ScrollToOffsetOptions) => void;
  scrollToIndex: (index: number, options?: ScrollToIndexOptions) => void;
  measure: () => void;
}

// Helper to convert TanStack Range to Canvas Kit Range
const convertRangeForCanvasKit = (tanStackRange: TanStackRange): Range => ({
  start: tanStackRange.startIndex,
  end: tanStackRange.endIndex,
  overscan: tanStackRange.overscan,
  size: tanStackRange.count,
});

// Helper to convert Canvas Kit range extractor to TanStack format
const adaptRangeExtractor = (canvasKitExtractor: (range: Range) => number[]) => {
  return (tanStackRange: TanStackRange) => {
    const canvasKitRange = convertRangeForCanvasKit(tanStackRange);
    return canvasKitExtractor(canvasKitRange);
  };
};

// Compatibility wrapper for the useVirtual hook
const useVirtual = <T extends Element = HTMLDivElement>(options: Options<T>): UseVirtualResult => {
  // Handle backward compatibility for parentRef -> getScrollElement
  const getScrollElement = React.useMemo(() => {
    if (options.getScrollElement) {
      return options.getScrollElement;
    }
    if (options.parentRef) {
      return () => options.parentRef?.current || null;
    }
    // Fallback if neither is provided
    return () => null;
  }, [options.getScrollElement, options.parentRef]);

  // Handle backward compatibility for size -> count
  const count = options.count ?? options.size ?? 0;

  // Adapt range extractor if provided
  const rangeExtractor = options.rangeExtractor
    ? adaptRangeExtractor(options.rangeExtractor)
    : undefined;

  // Handle legacy useObserver option by creating custom observeElementRect
  const observeElementRect = options.useObserver
    ? (instance: Virtualizer<T, Element>, cb: (rect: Rect) => void) => {
        // Use the custom observer provided by the user
        const rect = options.useObserver!(
          options.parentRef || {current: null},
          options.initialRect
        );
        cb(rect);
        // Return cleanup function (if needed)
        // eslint-disable-next-line no-empty-function
        return () => {};
      }
    : undefined;

  // Handle legacy onScrollElement and scrollOffsetFn by creating custom observeElementOffset
  const observeElementOffset =
    options.onScrollElement || options.scrollOffsetFn
      ? (instance: Virtualizer<T, Element>, cb: (offset: number, isScrolling: boolean) => void) => {
          const scrollElement = options.onScrollElement?.current || getScrollElement();
          if (!scrollElement) {
            return;
          }

          const handleScroll = (event?: Event) => {
            const offset = options.scrollOffsetFn
              ? options.scrollOffsetFn(event)
              : scrollElement.scrollTop || scrollElement.scrollLeft || 0;

            // Call the TanStack callback with the offset
            cb(offset, false); // We don't have isScrolling info from old API
          };

          // Add scroll listener
          scrollElement.addEventListener('scroll', handleScroll);

          // Return cleanup function
          return () => {
            scrollElement.removeEventListener('scroll', handleScroll);
          };
        }
      : undefined;

  // Create TanStack virtualizer options with required defaults
  const virtualizerOptions = {
    count,
    getScrollElement,
    estimateSize: options.estimateSize || (() => 50), // Required by TanStack
    overscan: options.overscan,
    horizontal: options.horizontal,
    scrollPaddingStart: options.paddingStart,
    scrollPaddingEnd: options.paddingEnd,
    rangeExtractor,
    getItemKey: options.keyExtractor,
    // Only include scrollToFn if provided by user
    ...(options.scrollToFn && {scrollToFn: options.scrollToFn}),
    // Only include observeElementRect if we have a custom observer
    ...(observeElementRect && {observeElementRect}),
    // Only include observeElementOffset if we have custom scroll handling
    ...(observeElementOffset && {observeElementOffset}),
    initialRect: options.initialRect, // Pass through initial rect
  } as VirtualizerOptions<T, Element>;

  const virtualizer = useVirtualizer(virtualizerOptions);

  // Transform TanStack virtual items to Canvas Kit format
  const virtualItems: VirtualItem[] = virtualizer
    .getVirtualItems()
    .map((item: TanStackVirtualItem) => ({
      key: options.keyExtractor ? options.keyExtractor(item.index) : item.index,
      index: item.index,
      start: item.start,
      end: item.end,
      size: item.size,
      measureRef: (el: HTMLElement | null) => {
        if (el) {
          virtualizer.measureElement(el);
        }
      },
    }));

  return {
    virtualItems,
    totalSize: virtualizer.getTotalSize(),
    scrollToOffset: (offset: number, scrollOptions?: ScrollToOffsetOptions) => {
      virtualizer.scrollToOffset(offset, {
        align: scrollOptions?.align,
        behavior: scrollOptions?.behavior,
      });
    },
    scrollToIndex: (index: number, scrollOptions?: ScrollToIndexOptions) => {
      virtualizer.scrollToIndex(index, {
        align: scrollOptions?.align,
        behavior: scrollOptions?.behavior,
      });
    },
    measure: () => {
      virtualizer.measure();
    },
  };
};

// Re-export for compatibility
export {defaultRangeExtractor, useVirtual};

// Also export the new TanStack hook for direct usage if needed
export {useVirtualizer};

// Export TanStack types for advanced usage
export type {VirtualizerOptions, Virtualizer, TanStackVirtualItem, TanStackRange};
