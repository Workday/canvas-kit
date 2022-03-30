import React from 'react';

import useResizeObserverOriginal from 'use-resize-observer';
import ResizeObserver from 'resize-observer-polyfill';

if (typeof window !== 'undefined' && !(window as any).ResizeObserver) {
  (window as any).ResizeObserver = ResizeObserver;
}

// `useResizeObserver` contains this fix in 8.0.0:
// https://github.com/ZeeCoder/use-resize-observer/commit/bd0f3c8597bac0d853b88cf585256aac1bd4f554
// v8.0.0 requires TS4.2. So we'll manually patch until we're ready for TS4.2+
export const useResizeObserver: typeof useResizeObserverOriginal = (params = {}) => {
  const widthRef = React.useRef<number | undefined>();
  const heightRef = React.useRef<number | undefined>();
  const onResize = params.onResize
    ? (data: {width: number | undefined; height: number | undefined}) => {
        if (widthRef.current !== data.width || heightRef.current !== data.height) {
          widthRef.current = data.width;
          heightRef.current = data.height;
          params.onResize!(data);
        }
      }
    : undefined;
  return useResizeObserverOriginal({...params, onResize});
};

// When the dependency is moved up to v8.0.0, remove the above function and export below instead
// export {useResizeObserver};
