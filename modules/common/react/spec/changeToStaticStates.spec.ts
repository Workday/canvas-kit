import {changeStyleToStaticStates} from '../lib/utils/changeToStaticStates';

describe('changeToStaticStates', () => {
  it('should convert :hover to .hover', () => {
    const input = {':hover': {display: 'none'}};
    const expected = {
      '&.hover': {
        display: 'none',
      },
    };
    expect(changeStyleToStaticStates(true, input)).toEqual(expected);
  });
});
