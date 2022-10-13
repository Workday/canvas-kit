import {background, BackgroundStyleProps} from '@workday/canvas-kit-react/layout';

describe('Background Style Props Function', () => {
  it('should ignore non-background props', () => {
    const props = {
      background: 'blue',
      color: '#ffffff',
    } as BackgroundStyleProps;

    const expected = {
      background: 'blue',
    };
    const backgroundStyles = background(props);

    expect(backgroundStyles).toEqual(expected);
  });

  it('should handle generic props', () => {
    const props = {
      background: 'blue',
      backgroundAttachment: 'initial',
      backgroundColor: 'violet',
      backgroundImage: 'initial',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    } as BackgroundStyleProps;
    const expected = props;
    const backgroundStyles = background(props);

    expect(backgroundStyles).toEqual(expected);
  });

  it('should translate tokens to style values', () => {
    const props = {
      background: 'blueberry500',
      backgroundColor: 'cinnamon500',
    } as BackgroundStyleProps;
    const expected = {
      background: '#005cb9',
      backgroundColor: '#de2e21',
    };
    const backgroundStyles = background(props);

    expect(backgroundStyles).toEqual(expected);
  });
});
