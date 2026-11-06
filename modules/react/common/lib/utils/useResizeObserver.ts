import {RefCallback} from 'react';
import * as resizeObserver from 'use-resize-observer';

type ObservedSize = {
  width: number | undefined;
  height: number | undefined;
};

// Keep our public declaration independent of the installed dependency's export shape.
type ResizeObserverHook = <T extends Element>(opts?: {
  // RefObject's generic nullability differs between React 17/18 and React 19.
  ref?: {readonly current: T | null} | T | null;
  onResize?: (size: ObservedSize) => void;
  box?: 'border-box' | 'content-box' | 'device-pixel-content-box';
  round?: (n: number) => number;
}) => ObservedSize & {ref: RefCallback<T>};

// Reading through a parameter avoids bundler warnings about exports missing in v9 or v10.
function getUseResizeObserver(module: {
  useResizeObserver?: ResizeObserverHook;
  default?: ResizeObserverHook;
}): ResizeObserverHook {
  return (module.useResizeObserver ?? module.default)!;
}

export const useResizeObserver = getUseResizeObserver(resizeObserver);
