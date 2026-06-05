import {CORNER_SHAPE, withCornerShape} from '../lib/cornerShape';

describe('withCornerShape', () => {
  it('should return borderRadius followed by cornerShape', () => {
    const result = withCornerShape('8px');

    expect(result).toEqual({
      borderRadius: '8px',
      cornerShape: CORNER_SHAPE,
    });
  });

  it('should support numeric borderRadius values', () => {
    const result = withCornerShape(16);

    expect(result).toEqual({
      borderRadius: 16,
      cornerShape: CORNER_SHAPE,
    });
  });
});
