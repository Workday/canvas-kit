import {memoizedFocusRing} from '../lib/styles/focusRing';

describe('memoizedFocusRing', () => {
  test('returns same object (reference equality)', () => {
    const args = {
      width: 3,
      separation: 1,
      animate: true,
      inset: 'outer',
      innerColor: '#333333',
      outerColor: '#666666',
    } as const;
    const received0 = memoizedFocusRing(args);
    const received1 = memoizedFocusRing(args);
    (memoizedFocusRing.cache as Map<
      string,
      [number, number, string, string, boolean, boolean]
    >).clear();
    const received2 = memoizedFocusRing(args);

    expect(received0).toBe(received1);
    expect(received0).toEqual(received2);
    expect(received0).not.toBe(received2);
  });
});
