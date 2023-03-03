// @ts-check
const path = require('path');
const fs = require('fs');
const {createDocProgram} = require('../docgen/createDocProgram');

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
