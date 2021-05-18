const fs = require('fs');
const path = require('path');

/**
 * Add export * from './<MODULE_NAME>' to modules/react/index.ts so that consumers can use.
 */
module.exports = (componentName, prerelease) => {
  const sortExports = lines => {
    const exportsAsObj = lines
      // Ignore last line in file :)
      .filter(line => line.length > 0)
      .reduce((acc, line) => {
        // Split out module name and slice off trailing '; part
        const modName = line.split('./')[1].slice(0, -2);
        acc[modName] = line;
        return acc;
      }, {});
    const sorted = Object.keys(exportsAsObj)
      .sort()
      .reduce((acc, key) => {
        acc.push(exportsAsObj[key]);
        return acc;
      }, []);
    sorted.push(''); // Will result in EOF line
    return sorted;
  };

  const indexPath = path.join(
    process.cwd(),
    `modules/${(prerelease && prerelease + '-') || ''}react/index.ts`
  );
  const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

  // Add our module's export statement then sort
  const exportStatement = `export * from './${componentName}';`;
  lines.push(exportStatement);
  const sortedExports = sortExports(lines);

  fs.writeFileSync(indexPath, sortedExports.join('\n'), 'utf8');
};
