import {getFallbackVariable} from '../../lib/utils/getFallbackVariable';

describe('getFallbackVariable', () => {
  it('should find the fallback variable of a single variable', () => {
    const variables = {
      '--var-1': 'red',
    };
    const actual = getFallbackVariable('--var-1', variables);

    expect(actual).toEqual('red');
  });

  it('should recurse a single level to find a value', () => {
    const variables = {
      '--var-1': 'var(--var-2)',
      '--var-2': 'red',
    };
    const actual = getFallbackVariable('--var-1', variables);

    expect(actual).toEqual('red');
  });

  it('should recurse many levels to find a value', () => {
    const variables = {
      '--var-1': 'var(--var-2)',
      '--var-2': 'var(--var-3)',
      '--var-3': 'red',
    };
    const actual = getFallbackVariable('--var-1', variables);

    expect(actual).toEqual('red');
  });
});
