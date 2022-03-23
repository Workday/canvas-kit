import {DepthStyleProps} from '@workday/canvas-kit-react/layout';
import {depth} from '../lib/utils/depth';

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
      boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2), 0px 8px 32px rgba(0, 0, 0, 0.16)',
    };
    const depthStyles = depth(props);

    expect(depthStyles).toEqual(expected);
  });
});
