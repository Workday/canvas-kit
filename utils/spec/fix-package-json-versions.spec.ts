import {stripIndent} from 'common-tags';

import fixPackageJsonVersions from '../fix-package-json-versions';

describe('updatePackageJson', () => {
  it('should replace a matched dependency with the provided version', () => {
    const input = stripIndent`
    {
      "@workday/canvas-kit-styling": "^10.3.3",
    }`;

    const expected = stripIndent`
    {
      "@workday/canvas-kit-styling": "^10.3.9",
    }`;

    expect(
      fixPackageJsonVersions(input, [{name: '@workday/canvas-kit-styling', version: '10.3.9'}])
    ).toEqual(expected);
  });

  it('should do anything to non-matched dependencies', () => {
    const input = stripIndent`
    {
      "react": "^18.1.0",
    }`;

    const expected = stripIndent`
    {
      "react": "^18.1.0",
    }`;

    expect(
      fixPackageJsonVersions(input, [{name: '@workday/canvas-kit-styling', version: '10.3.9'}])
    ).toEqual(expected);
  });
});
