const fs = require('fs');
const path = require('path');
const os = require('os');

const cwd = process.cwd();

module.exports = (componentName, target) => {
  addModuleAsDependencyByType(componentName, target);
  if (target === 'react') {
    addExportToReactIndex(componentName);
  } else if (target === 'css') {
    addImportToSassIndex(componentName);
  }
};

/**
 * Add the module as a dependency in modules/_canvas-kit-<TYPE>/package.json.
 */
const addModuleAsDependencyByType = (componentName, type) => {
  const packagePath = path.join(cwd, `modules/_canvas-kit-${type}/package.json`);
  const packageContents = fs.readFileSync(packagePath);
  const json = JSON.parse(packageContents);

  // Add module, sort dependencies, then write back out
  json.dependencies[`@workday/canvas-kit-${type}-${componentName}`] = `0.0.0`;
  let ordered = {};
  Object.keys(json.dependencies)
    .sort()
    .forEach(key => {
      ordered[key] = json.dependencies[key];
    });
  json.dependencies = ordered;
  let jsonStr = JSON.stringify(json, null, 2) + os.EOL;
  fs.writeFileSync(packagePath, jsonStr, 'utf8');
};

/**
 * Add export * from '@workday/canvas-kit-react-<MODULE_NAME>' to
 * modules/_canvas-kit-react/index.ts so that consumers can use.
 */
const addExportToReactIndex = componentName => {
  const sortExports = lines => {
    const exportsAsObj = lines
      .filter(line => !line.includes("from '@workday/canvas-kit-react-core'"))
      // Ignore last line in file :)
      .filter(line => line.length > 0)
      .reduce((acc, line) => {
        // Split out module name and slice off trailing '; part
        const modName = line.split('canvas-kit-react-')[1].slice(0, -2);
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

  const indexPath = path.join(cwd, 'modules/_canvas-kit-react/index.ts');
  const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

  // Add our module's export statement then sort
  const exportStatement = `export * from '@workday/canvas-kit-react-${componentName}';`;
  lines.push(exportStatement);
  const sortedExports = sortExports(lines);

  // Place our canvas kit export at the top
  sortedExports.unshift("export {default as canvas} from '@workday/canvas-kit-react-core';");
  fs.writeFileSync(indexPath, sortedExports.join('\n'), 'utf8');
};

const addImportToSassIndex = componentName => {
  const sortImports = lines => {
    const importsAsObj = lines
      .filter(line => !line.includes('$wdc-system-icons-path'))
      .filter(line => line.length > 0)
      .reduce((acc, line) => {
        // Split out module name and slice off trailing /index.scss';
        const modName = line.split('canvas-kit-css-')[1].split("/index.scss';")[0];
        acc[modName] = line;
        return acc;
      }, {});
    const sorted = Object.keys(importsAsObj)
      .sort()
      .reduce((acc, key) => {
        acc.push(importsAsObj[key]);
        return acc;
      }, []);
    sorted.push(''); // Will result in EOF line
    return sorted;
  };

  const indexPath = path.join(cwd, 'modules/_canvas-kit-css/index.scss');
  const lines = fs.readFileSync(indexPath, 'utf8').split('\n');

  // Add our module's import statement then sort
  const importStatement = `@import '~@workday/canvas-kit-css-${componentName}/index.scss';`;
  lines.push(importStatement);
  const sortedImports = sortImports(lines);

  // Place our system icons path at the top
  sortedImports.unshift(
    "$wdc-system-icons-path: '../../node_modules/@workday/canvas-system-icons-web/dist/svg' !default;\n"
  );
  fs.writeFileSync(indexPath, sortedImports.join('\n'), 'utf8');
};
