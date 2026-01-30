import glob from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import the TypeScript parseSpecFile function
// First check if the transpiled version exists in dist
const parseSpecFilePath = path.join(__dirname, '../dist/es6/utils/parseSpecFile.js');

let parseSpecFile;
if (fs.existsSync(parseSpecFilePath)) {
  const module = await import(parseSpecFilePath);
  parseSpecFile = module.parseSpecFile;
} else {
  // Fallback: load the TypeScript file directly
  const module = await import('./parseSpecFile');
  parseSpecFile = module.parseSpecFile;
}

async function getSpecifications() {
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

export default getSpecifications;
