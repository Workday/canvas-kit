/**
 * This function rewrites all the dependencies that a matches as mono dependencies to the correct
 * versions provided by the `monoDependencies` parameter
 *
 * @param {string} packageContents
 * @param {{name: string, version: string}[]} monoDependencies All dependency strings that are part
 * of the mono repo
 *
 * @returns {string}
 */
function fixPackageJsonVersions(packageContents, monoDependencies) {
  const lines = packageContents.split('\n').map(line => {
    return line.replace(/"(.+)": "\^([0-9\.]+)"/, (substr, ...args) => {
      /** @type {[string, string]} */
      const [dependency] = args;

      const matchedDependency = monoDependencies.find(dep => dep.name === dependency);

      if (matchedDependency) {
        return `"${dependency}": "^${matchedDependency.version}"`;
      }
      return substr;
    });
  });

  return lines.join('\n');
}

export default fixPackageJsonVersions;
