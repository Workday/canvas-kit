#!/usr/bin/env node
'use strict';

const sass = require('node-sass');
const path = require('path');
const postcss = require('postcss');
const fs = require('fs');
const cssstats = require('cssstats');
const mkdirp = require('mkdirp');

const cwd = process.cwd();
const packageJsonFile = path.join(cwd, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
const moduleVersion = packageJson.version;
const fullModuleName = packageJson.name;
const moduleName = fullModuleName.substr(fullModuleName.indexOf('/') + 1);
const sourceFile = path.join(cwd, process.argv[2]);
const outputDir = path.join(cwd, 'dist');
const outputFile = path.join(outputDir, moduleName + '.css');
const outputFileMin = path.join(outputDir, moduleName + '.min.css');
const outputStats = path.join(outputDir, 'stats.json');
const postcssConfig = require('../.postcss.json');
const nodeModules = path.resolve(__dirname, '../node_modules');

// Make the build directory if it doesn't exist
mkdirp(outputDir);

const postcssPlugins = Object.keys(postcssConfig.build).map(plugin => {
  const name = plugin;
  const options = postcssConfig.build[plugin];

  if (name === 'postcss-banner') {
    const banner = options.banner;
    const meta = {name: moduleName, version: moduleVersion};
    options.banner = `Workday Canvas - ${meta.name} v${meta.version}\n${banner}`;
  }

  return require(name)(options);
});

/* Node sass doesn't handle ~ imports by default.
 * I tried node-sass-tilde-importer, but it had some undesireable behavior */
const tildeImporter = (url, prev, done) => {
  if (url[0] === '~') {
    url = path.resolve(nodeModules, url.substr(1));
  }

  return {file: url};
};

const sassOptions = {
  file: sourceFile,
  includePaths: [nodeModules],
  importer: tildeImporter,
};

const outputs = [
  {
    sassOptions: {
      ...sassOptions,
      outputStyle: 'expanded',
    },
    outputFile: outputFile,
  },
  {
    sassOptions: {
      ...sassOptions,
      outputStyle: 'compressed',
    },
    outputFile: outputFileMin,
    stats: true,
  },
];

for (const output of outputs) {
  const sassOutput = sass.renderSync(output.sassOptions);
  const css = sassOutput.css.toString();

  postcss(postcssPlugins)
    .process(css, {
      from: sourceFile,
      to: output.outputFile,
    })
    .then(result => {
      fs.writeFileSync(output.outputFile, result.css);

      if (output.stats) {
        const stats = cssstats(result.css);
        fs.writeFileSync(outputStats, JSON.stringify(stats, null, 2));
      }
    });
}
