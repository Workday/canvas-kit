import {convertToStaticStates} from '../lib/theming/styled';

describe('changeToStaticStates', () => {
  it('should convert ":hover" to "&.hover"', () => {
    const input = {':hover': {display: 'none'}};
    const expected = {
      '&.hover': {
        display: 'none',
      },
    };
    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should convert ":active" to "&.active"', () => {
    const input = {':active': {display: 'none'}};
    const expected = {
      '&.active': {
        display: 'none',
      },
    };
    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should convert ":focus" to "&.focus"', () => {
    const input = {':focus': {display: 'none'}};
    const expected = {
      '&.focus': {
        display: 'none',
      },
    };
    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should convert "&:hover" to "&.hover"', () => {
    const input = {'&:hover': {display: 'none'}};
    const expected = {
      '&.hover': {
        display: 'none',
      },
    };
    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should convert "&:focus" to "&.focus"', () => {
    const input = {'&:focus': {display: 'none'}};
    const expected = {
      '&.focus': {
        display: 'none',
      },
    };
    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should convert "div:focus" to "div.focus"', () => {
    const input = {'div:focus': {display: 'none'}};
    const expected = {
      'div.focus': {
        display: 'none',
      },
    };
    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should convert nested object', () => {
    const input = {
      div: {
        span: {
          ':hover': {
            display: 'none',
          },
        },
      },
    };
    const expected = {
      div: {
        span: {
          '&.hover': {
            display: 'none',
          },
        },
      },
    };

    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should convert multi-selectors', () => {
    const input = {
      [`:hover, :focus`]: {
        display: 'none',
      },
    };
    const expected = {
      [`&.hover, &.focus`]: {
        display: 'none',
      },
    };

    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should not convert :not or :disabled', () => {
    const input = {
      '&:not(:disabled)': {
        display: 'none',
      },
    };
    const expected = {
      '&:not(:disabled)': {
        display: 'none',
      },
    };

    expect(convertToStaticStates(input)).toEqual(expected);
  });

  it('should handle falsy objects', () => {
    expect(convertToStaticStates(undefined)).toEqual(undefined);
  });

  it('should remove data-whatinput modifiers', () => {
    const input = {
      '[data-whatinput="mouse"], [data-whatinput=keyboard], [data-whatinput="pointer"], [data-whatinput="touch"]': {
        outline: 'none',
      },
    };
    const expected = {
      '[data-whatinput="noop"], [data-whatinput="noop"], [data-whatinput="noop"], [data-whatinput="noop"]': {
        outline: 'none',
      },
    };
    expect(convertToStaticStates(input)).toEqual(expected);
  });
});
