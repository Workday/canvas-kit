// @ts-check
const path = require('path');
const fs = require('fs');
const {createDocProgram} = require('../docgen/createDocProgram');
const glob = require('glob');

let {parser} = createDocProgram();

let docs = parser.program.getRootFileNames().flatMap(fileName => {
  return parser.getExportedSymbols(fileName);
});

docs = docs.map(doc => {
  /**
   * Post process to get rid of `Props` duplicates from components. For example, a component has a
   * `props` array that is duplicate information.
   *
   * ```tsx
   * export interface MyComponentProps {
   *   a: string
   * }
   *
   * export const MyComponent = (props: MyComponentProps) => {
   *   return <div />
   * }
   * ```
   *
   * In this example, both `MyComponent` and `MyComponentProps` contain the same information, often
   * with a duplication with a lot of props. We're going to create aliases for all instances of
   * `*Props`
   */
  if (doc.type.kind === 'object' && /^[A-Z][A-Za-z_]+Props$/.test(doc.name)) {
    const aliasName = doc.name.replace('Props', '');
    const aliasedDoc = docs.find(d => d.name === aliasName && d.fileName === doc.fileName); // assume same file name

    // If we found an aliasedDoc
    if (aliasedDoc && ['component', 'enhancedComponent'].includes(aliasedDoc.type.kind)) {
      doc.type = {
        kind: 'alias',
        name: aliasName,
      };
    }
  }

  return doc;
});

const docsFilePath = path.join(__dirname, '../dist/es6/lib/docs.js');
const docsStr = JSON.stringify(docs, null, '  ');
const contents = fs
  .readFileSync(docsFilePath)
  .toString()
  .replace('/* DOCS_REPLACED_BY_BUILD */', docsStr.substring(1, docsStr.length - 1)); // remove the square bracket on the ends
fs.writeFileSync(docsFilePath, contents);

/**
 * The following ensures that the stackblitz files are copied to the dist folder and that the current version is included.
 */
// Source and destination base paths
const sourceBase = path.join(__dirname, '../lib/stackblitzFiles');
const destBase = path.join(__dirname, '../dist/es6/lib/stackblitzFiles');
const rootPackageJsonPath = path.join(__dirname, '..', 'package.json');
const searchPath = path.join(__dirname, '../dist/es6/lib/stackblitzFiles/packageJSONFile*.{ts,js}');
const rootPackageJson = JSON.parse(fs.readFileSync(rootPackageJsonPath, 'utf8'));
const version = rootPackageJson.version || '0.0.0';

// Ensure the destination directory exists
if (!fs.existsSync(destBase)) {
  fs.mkdirSync(destBase, {recursive: true});
}

glob(`${sourceBase}/**`, {dot: true}, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }

  if (!files || files.length === 0) {
    console.log('No files found in:', sourceBase);
    return;
  }

  files
    .filter(file => !fs.lstatSync(file).isDirectory()) // Filter out directories
    .filter(
      file => !file.includes(`${path.sep}types${path.sep}`) && !file.endsWith(`${path.sep}types`)
    ) // Ignore 'types' subfolder
    .forEach(file => {
      const relativePath = path.relative(sourceBase, file); // Preserve structure
      const destPath = path.join(destBase, relativePath); // Full destination file path

      // Optional: Read the file content (if you still want it for logging or other purposes)
      const content = fs.readFileSync(file).toString();
      // console.log(`Content of ${file}:`, content); // Example usage

      // Copy the file to the destination
      fs.copyFile(file, destPath, err => {
        if (err) {
          console.error(`Error copying ${file} to ${destPath}:`, err);
        } else {
          console.log(`Copied ${file} to ${destPath}`);
        }
      });
    });

  glob(searchPath, (err, files) => {
    if (err) {
      console.error('Error finding files:', err);
      return;
    }
    if (!files.length) {
      console.error(
        'No package.json files found in ./dist/es6/lib/stackblitzFiles/packageJSONFile.ts'
      );
      return;
    }

    console.log(files);

    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const updatedContent = content
        .replace(/\${version}/g, version)
        .replace(`import {version} from '../../../../lerna.json';`, '')
        .replace(`import { version } from '../../../../lerna.json';`, '');

      fs.writeFileSync(file, updatedContent, 'utf8');
      console.log(`Updated ${file} with version ${version}`);
    });
  });
});
