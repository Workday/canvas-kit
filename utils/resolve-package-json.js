import semver from 'semver';

function resolvePackageJson(/** @type {string} */ input) {
  const conflictRegex = /<<<<<<< .+\n([\s\S]*?)\n?=======\n([\s\S]*?)\n?>>>>>>> .+\n/;

  return input.replace(new RegExp(conflictRegex, 'gm'), (substring, ...args) => {
    /** @type {[string, string]} */
    const [current, incoming] = args;

    let final = '';

    const currentLines = current.split('\n');
    const incomingLines = incoming.split('\n');

    const currentVersions = currentLines.map(getPropertyAndValues).filter(v => v);
    const incomingVersions = incomingLines.map(getPropertyAndValues).filter(v => v);

    const currentProperties = currentVersions.map(p => p.property);
    const incomingProperties = incomingVersions.map(p => p.property);

    const totalProperties = [...new Set([...currentProperties, ...incomingProperties])];

    totalProperties.forEach(property => {
      if (currentProperties.includes(property) && !incomingProperties.includes(property)) {
        // only in current. Assume dependency was removed. If this is incorrect, a manual PR will be
        // created and it will be resolved in a way that the dependency is in both branches and
        // we'll only hit this case the first time it happens
        // Do nothing
      } else if (!currentProperties.includes(property) && incomingProperties.includes(property)) {
        // only in incoming
        const line = incomingLines.find(l => l.includes(`"${property}"`));

        final += line + '\n';
      } else {
        const currentVersion = currentVersions.find(v => v.property === property).value;
        const incomingVersion = incomingVersions.find(v => v.property === property).value;

        if (
          semver.gt(currentVersion.replace(/[\^\~]/, ''), incomingVersion.replace(/[\^\~]/, ''))
        ) {
          const line = currentLines.find(l => l.includes(`"${property}"`));

          final += line + '\n';
        } else {
          const line = incomingLines.find(l => l.includes(`"${property}"`));

          final += line + '\n';
        }
      }
    });

    return final;
  });

  function getPropertyAndValues(/** @type {string} */ line) {
    const match = line.match(/"(.+)": "(.+)"/);
    if (match) {
      const [_, property, value] = match;
      return {property, value};
    }
  }
}

export default resolvePackageJson;
