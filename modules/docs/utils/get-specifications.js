const glob = require('glob');
const path = require('path');
const fs = require('fs');

const parseSpecFilePath = path.join(__dirname, '../dist/es6/utils/parseSpecFile.js');

async function getSpecifications() {
  let parseSpecFile;
  if (fs.existsSync(parseSpecFilePath)) {
    const module = require(parseSpecFilePath);
    parseSpecFile = module.parseSpecFile;
  } else {
    // Fallback: load the TypeScript file directly (tsx handles this)
    const module = require('./parseSpecFile');
    parseSpecFile = module.parseSpecFile;
  }

  // Find all Cypress component spec files
  const specFiles = glob.sync('cypress/component/**/*.spec.tsx', {
    cwd: path.join(__dirname, '../../..'),
    absolute: true,
  });

  // Parse each spec file
  const specifications = [];
  for (const file of specFiles) {
    try {
      const parsed = await parseSpecFile(file);
      if (parsed) {
        specifications.push(parsed);
      }
    } catch (error) {
      console.warn(`Failed to parse spec file ${file}:`, error.message);
    }
  }

  return specifications;
}

module.exports = getSpecifications;
