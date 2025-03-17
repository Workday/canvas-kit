import {px2rem} from '../lib/px2rem';

describe('px2rem', () => {
  it('should ', () => {
    const pxValue = 4;
    const expected = px2rem(pxValue);

    expect(expected).toBe('0.25rem');
  });

  it('should support alternate base', () => {
    const pxValue = 16;
    const baseValue = 10;
    const expected = px2rem(pxValue, baseValue);

    expect(expected).toBe('1.6rem');
  });
});
