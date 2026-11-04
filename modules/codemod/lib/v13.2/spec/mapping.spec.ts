import {system} from '@workday/canvas-tokens-web';

import {mapping} from '../mapping';

// resolve looks up a `system.*` path, as written by the codemod, in the published tokens.
const resolve = (path: string) =>
  path
    .split('.')
    .slice(1)
    .reduce<any>((tokens, key) => tokens?.[key], system);

describe('Typography mapping', () => {
  it('should map font weights to existing system tokens', () => {
    const missing = Object.values(mapping.type.keys.fontWeights.values)
      .map(weight => `system.fontWeight.${weight}`)
      .filter(path => resolve(path) === undefined);

    expect(missing).toEqual([]);
  });

  it('should map type levels to existing system tokens', () => {
    const missing = Object.values(mapping.type.keys.levels.values)
      .flatMap(sizes => Object.values(sizes))
      .flatMap(level => Object.values(level))
      .filter(path => resolve(path) === undefined);

    expect(missing).toEqual([]);
  });
});
