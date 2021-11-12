const {dependencies} = require('../../package.json');

describe('useResizeObserver', () => {
  it('should blow up if `use-resize-observer` is set to anything other than "~7.0.1"', () => {
    // We're using 'use-resize-observer' v7.0.1 which contains a bug that calls `onResize` every
    // render. This bug is fixed in 8.0.0, but 8.0.0 requires Typescript 4.2+. If we upgrade to TS
    // 4.2+, then this dependency can be updated and special code in `useResizeObserver.ts` to fix
    // this bug can be removed. This timebomb test reminds us to do this and explains why all this
    // nonsense exists.
    // see https://github.com/ZeeCoder/use-resize-observer/commit/bd0f3c8597bac0d853b88cf585256aac1bd4f554
    expect(dependencies['use-resize-observer']).toEqual('~7.0.1');
  });
});
