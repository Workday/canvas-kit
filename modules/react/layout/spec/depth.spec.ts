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
      boxShadow: '0 0.25rem 1rem rgba(31, 38, 46, 0.12), 0 0.5rem 2rem rgba(31, 38, 46, 0.08)',
    };
    const depthStyles = depth(props);

    expect(depthStyles).toEqual(expected);
  });
});
