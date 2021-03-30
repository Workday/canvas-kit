import {
  API,
  FileInfo,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  ImportSpecifier,
  // ImportDefaultSpecifier,
  // ImportNamespaceSpecifier,
  // ImportSpecifier,
  // JSCodeshift,
} from 'jscodeshift';

import {sourceMap} from './maps';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration)
    .forEach(_import => {
      const source = _import.value.source.value;
      // Move on if source isn't canvas-kit core
      if (
        typeof source !== 'string' ||
        (source !== '@workday/canvas-kit-react' && !Object.keys(sourceMap).includes(source))
      ) {
        return;
      }

      const newImportSpecifiers = _import.value.specifiers?.map(specifier => {
        // handle "import { spacing }"
        if (specifier.type === 'ImportSpecifier' && specifier.imported.name === 'spacing') {
          const newSpecifier = {
            ...specifier,
            imported: {
              ...specifier.imported,
              name: 'space',
            },
            local: {
              ...specifier.local,
              name: 'space',
            },
          } as ImportSpecifier;
          return newSpecifier;
        }
        // handle "import { spacingNumbers }"
        if (specifier.type === 'ImportSpecifier' && specifier.imported.name === 'spacingNumbers') {
          const newSpecifier = {
            ...specifier,
            imported: {
              ...specifier.imported,
              name: 'spaceNumbers',
            },
            local: {
              ...specifier.local,
              name: 'spaceNumbers',
            },
          } as ImportSpecifier;
          return newSpecifier;
        }
        return specifier;
      });

      const newImport = j.importDeclaration(newImportSpecifiers, j.stringLiteral(source), 'value');

      return j(_import).replaceWith(newImport);
    })
    .toSource();
}
