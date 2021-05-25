import {API, FileInfo} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // Rename spacing imports
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-react/tokens'}})
    .forEach(importDeclaration => {
      const specifiers = importDeclaration.value.specifiers;

      // If `InputProvider` is the only import, change source to `/common`
      if (specifiers?.length === 1) {
        const specifier = specifiers[0];
        if (specifier.type === 'ImportSpecifier' && specifier.imported.name === 'InputProvider') {
          importDeclaration.value.source.value = '@workday/canvas-kit-react/common';
          return;
        }
      }

      // If `InputProvider` is not the only import, delete `InputProvider` specifier and create a new import declaration
      specifiers?.forEach((specifier, index) => {
        // Only iterate over named import statements
        if (specifier.type === 'ImportSpecifier' && specifier.imported.name === 'InputProvider') {
          importDeclaration.value.specifiers?.splice(specifiers?.indexOf(specifier), 1);

          importDeclaration.insertAfter(
            j.importDeclaration(
              [j.importSpecifier(j.identifier('InputProvider'))],
              j.stringLiteral('@workday/canvas-kit-react/common')
            )
          );
        }
        return specifier;
      });
    });

  return root.toSource();
}
