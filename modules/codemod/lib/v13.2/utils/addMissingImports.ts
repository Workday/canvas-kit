import {ImportSpecifier} from 'jscodeshift';

export const addMissingImports = ({j, root}: any, {importPath, specifiers, localName}: any) => {
  const [existingImport] = root
    .find(j.ImportDeclaration, {
      source: {
        value: (value: string) => value.includes(importPath),
      },
    })
    .nodes();

  if (existingImport) {
    specifiers.forEach((specifier: string) => {
      if (
        !existingImport.specifiers?.some(
          (existingSpecifier: ImportSpecifier) =>
            existingSpecifier.type === 'ImportSpecifier' &&
            existingSpecifier.imported.name === specifier
        )
      ) {
        existingImport.specifiers.push(
          j.importSpecifier(j.identifier(specifier), j.identifier(localName || specifier))
        );

        existingImport.specifiers.sort((a: any, b: any) => {
          return a.imported.name.toString().localeCompare(b.imported.name.toString());
        });
      }
    });

    return;
  }

  const newImport = j.importDeclaration(
    specifiers.map((specifier: string) =>
      j.importSpecifier(j.identifier(specifier), j.identifier(localName || specifier))
    ),
    j.stringLiteral(importPath)
  );

  const firstImport = root.find(j.ImportDeclaration).paths()[0];
  if (firstImport) {
    firstImport.insertAfter(newImport);
  } else {
    root.get().node.program.body.unshift(newImport);
  }
};
