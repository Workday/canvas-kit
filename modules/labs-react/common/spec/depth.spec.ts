import {depth, DepthStyleProps} from '../lib/utils/depth';

describe('Depth Style Props Function', () => {
  it('should ignore non-depth props', () => {
    const props = {
      color: 'blackPepper400',
      children: null,
    } as DepthStyleProps;
    const expected = {};
    const depthStyles = depth(props);

    expect(depthStyles).toEqual(expected);
  });

  it('should translate depth token values to styles', () => {
    const props = {
      depth: 4,
    } as DepthStyleProps;
    const expected = {
      border: '1px solid rgba(218, 226, 230, 1)',
      boxShadow: '0px 8px 16px 0 rgba(0, 0, 0, 0.12)',
    };
    const depthStyles = depth(props);

    expect(depthStyles).toEqual(expected);
  });
});
