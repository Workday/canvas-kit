import {getVariablesFromFiles} from '../../lib/utils/getCssVariables';

describe('getVariablesFromFiles', () => {
  it('should get a variable from a single file', () => {
    const actual = getVariablesFromFiles([
      `:root {
        --var-1: red
      }`,
    ]);

    expect(actual).toEqual({
      '--var-1': 'red',
    });
  });

  it('should get variables from multiple files', () => {
    const actual = getVariablesFromFiles([
      `:root {
        --var-1: red
      }`,
      `:root {
        --var-2: blue
      }`,
    ]);

    expect(actual).toEqual({
      '--var-1': 'red',
      '--var-2': 'blue',
    });
  });
});
