import {
  API,
  FileInfo,
  // ImportDefaultSpecifier,
  // ImportNamespaceSpecifier,
  // ImportSpecifier,
  // JSCodeshift,
} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  j(file.source)
    .find(j.ImportDeclaration)
    .forEach(_import => {
      console.log(_import);
    });
}
