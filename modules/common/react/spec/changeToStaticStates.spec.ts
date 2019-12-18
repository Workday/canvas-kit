import {changeStyleToStaticStates} from '../lib/utils/changeToStaticStates';

describe('changeToStaticStates', () => {
  it('should convert ":hover" to "&.hover"', () => {
    const input = {':hover': {display: 'none'}};
    const expected = {
      '&.hover': {
        display: 'none',
      },
    };
    expect(changeStyleToStaticStates(true, input)).toEqual(expected);
  });
  it('should convert ":active" to "&.active"', () => {
    const input = {':active': {display: 'none'}};
    const expected = {
      '&.active': {
        display: 'none',
      },
    };
    expect(changeStyleToStaticStates(true, input)).toEqual(expected);
  });
  it('should convert ":focus" to "&.focus"', () => {
    const input = {':focus': {display: 'none'}};
    const expected = {
      '&.focus': {
        display: 'none',
      },
    };
    expect(changeStyleToStaticStates(true, input)).toEqual(expected);
  });
  it('should convert "div:focus" to "div.focus"', () => {
    const input = {'div:focus': {display: 'none'}};
    const expected = {
      'div.focus': {
        display: 'none',
      },
    };
    expect(changeStyleToStaticStates(true, input)).toEqual(expected);
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

    expect(changeStyleToStaticStates(true, input)).toEqual(expected);
  });
});
