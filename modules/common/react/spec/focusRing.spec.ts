import focusRing, {memoizedFocusRing} from '../lib/styles/focusRing';

describe('focusRing', () => {
  test('returns default animation and box shadow', () => {
    const received = focusRing();

    expect(received).toMatchSnapshot();
  });

  test('returns no animation', () => {
    const received = focusRing(undefined, undefined, false);

    expect(received).toMatchSnapshot();
  });

  test('return correct animation and boxShadow', () => {
    const received = focusRing(3, 1, true, false, '#333333', '#666666');

    expect(received).toMatchSnapshot();
  });

  test('returns correct animation and inset box shadow', () => {
    const received = focusRing(3, 1, true, true, '#333333', '#666666');

    expect(received).toMatchSnapshot();
  });
});

describe('memoizedFocusRing', () => {
  test('returns same object (reference equality)', () => {
    const args = {
      ringWidth: 3,
      separationWidth: 1,
      animate: true,
      inset: true,
      innerShadowColor: '#333333',
      outerShadowColor: '#666666',
    };
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
