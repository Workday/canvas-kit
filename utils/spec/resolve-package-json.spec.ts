import {stripIndent} from 'common-tags';

import resolvePackageJson from '../resolve-package-json';

describe('updatePackageJson', () => {
  it('should update version strings to the latest', () => {
    const input = stripIndent`
    {
    <<<<<<< merge/prerelease/minor-into-prerelease/major
      "version": "10.3.3",
    =======
      "version": "10.2.5",
    >>>>>>> prerelease/major
    }`;

    const expected = stripIndent`
    {
      "version": "10.3.3",
    }`;

    expect(resolvePackageJson(input)).toEqual(expected);
  });

  it('should remove versions from current if they are not in incoming', () => {
    const input = stripIndent`
      {
      <<<<<<< merge/prerelease/minor-into-prerelease/major
        "version": "10.3.3",
      =======
      >>>>>>> prerelease/major
      }`;

    const expected = stripIndent`
        {
        }`;

    expect(resolvePackageJson(input)).toEqual(expected);
  });

  it('should add versions from current if they are not in incoming', () => {
    const input = stripIndent`
      {
      <<<<<<< merge/prerelease/minor-into-prerelease/major
      =======
        "version": "10.3.3",
      >>>>>>> prerelease/major
      }`;

    const expected = stripIndent`
      {
        "version": "10.3.3",
      }`;

    expect(resolvePackageJson(input)).toEqual(expected);
  });

  it('should handle multiple conflicts', () => {
    const input = stripIndent`
      {
        "name": "@workday/canvas-kit-styling-transform",
      <<<<<<< merge/prerelease/minor-into-prerelease/major
        "version": "10.3.3",
      =======
        "version": "10.2.5",
      >>>>>>> prerelease/major
        "dependencies": {
          "@emotion/serialize": "^1.0.2",
      <<<<<<< merge/prerelease/minor-into-prerelease/major
          "@workday/canvas-kit-styling": "^10.3.3",
      =======
          "@workday/canvas-kit-styling": "^10.3.2",
          "@workday/canvas-tokens-web": "^1.0.2",
      >>>>>>> prerelease/major
          "stylis": "4.0.13",
          "typescript": "4.2"
        },
        "devDependencies": {
          "common-tags": "^1.8.0"
        }
      }`;

    const expected = stripIndent`
      {
        "name": "@workday/canvas-kit-styling-transform",
        "version": "10.3.3",
        "dependencies": {
          "@emotion/serialize": "^1.0.2",
          "@workday/canvas-kit-styling": "^10.3.3",
          "@workday/canvas-tokens-web": "^1.0.2",
          "stylis": "4.0.13",
          "typescript": "4.2"
        },
        "devDependencies": {
          "common-tags": "^1.8.0"
        }
      }`;

    expect(resolvePackageJson(input)).toEqual(expected);
  });

  it('should handle multiple conflicts in the same group', () => {
    const input = stripIndent`
      {
        "dependencies": {
          "@emotion/serialize": "^1.0.2",
      <<<<<<< merge/prerelease/minor-into-prerelease/major
          "@workday/canvas-kit-styling": "^10.3.1",
          "@workday/canvas-tokens-web": "^1.0.0",
      =======
          "@workday/canvas-kit-styling": "^10.3.3",
          "@workday/canvas-tokens-web": "^1.0.2",
      >>>>>>> prerelease/major
          "stylis": "4.0.13",
          "typescript": "4.2"
        },
        "devDependencies": {
          "common-tags": "^1.8.0"
        }
      }`;

    const expected = stripIndent`
      {
        "dependencies": {
          "@emotion/serialize": "^1.0.2",
          "@workday/canvas-kit-styling": "^10.3.3",
          "@workday/canvas-tokens-web": "^1.0.2",
          "stylis": "4.0.13",
          "typescript": "4.2"
        },
        "devDependencies": {
          "common-tags": "^1.8.0"
        }
      }`;

    expect(resolvePackageJson(input)).toEqual(expected);
  });
});
