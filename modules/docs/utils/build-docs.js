// @ts-check
const path = require('path');
const fs = require('fs');
const {createDocProgram} = require('../docgen/createDocProgram');

let {parser} = createDocProgram();

const docs = parser.program.getRootFileNames().flatMap(fileName => {
  return parser.getExportedSymbols(fileName);
});

const docsFilePath = path.join(__dirname, '../dist/es6/lib/docs.js');
const docsStr = JSON.stringify(docs, null, '  ');
const contents = fs
  .readFileSync(docsFilePath)
  .toString()
  .replace('/* DOCS_REPLACED_BY_BUILD */', docsStr.substring(1, docsStr.length - 1)); // remove the square bracket on the ends
fs.writeFileSync(docsFilePath, contents);
