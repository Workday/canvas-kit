import {pseudo, PseudoStyleProps} from '@workday/canvas-kit-react/layout';

describe('Pseudo Style Props Function', () => {
  it('should ignore non-pseudo props', () => {
    const props = {
      color: 'red',
      _hover: {
        color: 'blue',
        textDecoration: 'underline',
      },
    } as PseudoStyleProps;

    const expected = {
      '&:hover': {
        color: 'blue',
        textDecoration: 'underline',
      },
    };
    const pseudoStyles = pseudo(props);

    expect(pseudoStyles).toEqual(expected);
  });

  it('should handle generic props', () => {
    const props = {
      _hover: {
        color: 'blue',
        textDecoration: 'underline',
      },
      _focus: {
        outline: 'blue',
      },
    } as PseudoStyleProps;
    const expected = {
      '&:hover': {
        color: 'blue',
        textDecoration: 'underline',
      },
      '&:focus': {
        outline: 'blue',
      },
    };
    const pseudoStyles = pseudo(props);

    expect(pseudoStyles).toEqual(expected);
  });

  it('should translate tokens to style values', () => {
    const props = {
      _active: {
        backgroundColor: 'blueberry400',
        depth: 2,
        padding: 'm',
      },
    } as PseudoStyleProps;
    const expected = {
      '&:active': {
        backgroundColor: '#0875e1',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2), 0px 4px 16px rgba(0, 0, 0, 0.16)',
        padding: '24px',
      },
    };
    const pseudoStyles = pseudo(props);

    expect(pseudoStyles).toEqual(expected);
  });
});
