import {color} from '@workday/canvas-kit-react/layout';

describe('Color Style Props Function', () => {
  it('should ignore non-color props', () => {
    const props = {
      borderRadius: 's',
      children: null,
      color: 'black',
    };

    const expected = {color: 'black'};
    const colorStyles = color(props);

    expect(colorStyles).toEqual(expected);
  });

  it('should handle generic props (string)', () => {
    const props = {
      backgroundColor: 'tomato',
      color: 'palevioletred',
      opacity: 0.6,
    };
    const expected = props;
    const colorStyles = color(props);

    expect(colorStyles).toEqual(expected);
  });

  it('should translate tokens to style values', () => {
    const props = {
      backgroundColor: 'frenchVanilla100',
      color: 'blackPepper400',
    };
    const expected = {
      backgroundColor: '#ffffff',
      color: '#333333',
    };
    const colorStyles = color(props);

    expect(colorStyles).toEqual(expected);
  });
});
