import {other, OtherStyleProps} from '@workday/canvas-kit-react/layout';

describe('Other Style Props Function', () => {
  it('should ignore non-other props', () => {
    const props = {
      boxSizing: 'border-box',
      color: 'blue',
    } as OtherStyleProps;

    const expected = {
      boxSizing: 'border-box',
    };
    const otherStyles = other(props);

    expect(otherStyles).toEqual(expected);
  });

  it('should handle generic props', () => {
    const props = {
      animation: 'alternate',
      boxSizing: 'border-box',
      pointerEvents: 'none',
    } as OtherStyleProps;
    const expected = props;
    const otherStyles = other(props);

    expect(otherStyles).toEqual(expected);
  });
});
