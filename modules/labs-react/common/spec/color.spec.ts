import {color} from '../lib/utils/color';

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
      background: 'content-box radial-gradient(crimson, skyblue)',
      backgroundColor: 'tomato',
      backgroundImage: 'url("./workday/canvas/coffee.svg");',
      color: 'palevioletred',
    };
    const expected = props;
    const colorStyles = color(props);

    expect(colorStyles).toEqual(expected);
  });

  it('should translate tokens to style values', () => {
    const props = {
      background: 'soap500',
      backgroundColor: 'frenchVanilla100',
      color: 'blackPepper400',
    };
    const expected = {
      background: '#ced3d9',
      backgroundColor: '#ffffff',
      color: '#333333',
    };
    const colorStyles = color(props);

    expect(colorStyles).toEqual(expected);
  });
});
