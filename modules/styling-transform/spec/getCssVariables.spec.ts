import {getVariablesFromFiles, getFallbackVariable} from '../lib/getCssVariables';

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

describe('getFallbackVariable', () => {
  it('should find the fallback variable of a single variable', () => {
    const variables = getVariablesFromFiles([
      `:root {
        --var-1: red
      }`,
    ]);
    const actual = getFallbackVariable('--var-1', variables);

    expect(actual).toEqual('red');
  });

  it('should recurse a single level to find a value', () => {
    const variables = getVariablesFromFiles([
      `:root {
        --var-1: var(--var-2);
        --var-2: red
      }`,
    ]);
    const actual = getFallbackVariable('--var-1', variables);

    expect(actual).toEqual('red');
  });

  it('should recurse many levels to find a value', () => {
    const variables = getVariablesFromFiles([
      `:root {
        --var-1: var(--var-2);
        --var-2: var(--var-3);
        --var-3: red
      }`,
    ]);
    const actual = getFallbackVariable('--var-1', variables);

    expect(actual).toEqual('red');
  });
});
