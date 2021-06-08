import {API, ASTPath, FileInfo, ImportDeclaration, ImportSpecifier} from 'jscodeshift';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // find react/tokens package import declarations
  const tokenImport = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/tokens'},
  });

  // find react/common package import declarations
  const commonImport = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/common'},
  });

  function transformTypeImports(nodePath: ASTPath<ImportDeclaration>, specifier: ImportSpecifier) {
    if (specifier.imported.name === 'type') {
      // If there are import declarations from react/tokens,
      // push this specifier into those node specifiers.
      // This prevents possible duplicate import declarations.
      if (tokenImport.paths().length) {
        tokenImport.forEach(tokenImportPath => {
          tokenImportPath.value.specifiers?.push(specifier);
        });
        // otherwise, create a new import declaration
      } else {
        // `insertBefore` ensures the import order multiple specifiers from labs-react/tokens
        // are split into new imports. `insertAfter` would reverse the order, which isn't incorrect,
        // but probably not what you'd intuitively expect.
        nodePath.insertBefore(
          j.importDeclaration([specifier], j.stringLiteral('@workday/canvas-kit-react/tokens'))
        );
      }
    }
  }

  function transformStaticStateImports(
    nodePath: ASTPath<ImportDeclaration>,
    specifier: ImportSpecifier
  ) {
    if (specifier.imported.name === 'StaticStates') {
      // If there are import declarations from react/common,
      // push this specifier into those node specifiers.
      // This prevents possible duplicate import declarations.
      if (commonImport.paths().length) {
        commonImport.forEach(tokenImportPath => {
          tokenImportPath.value.specifiers?.push(specifier);
        });
        // otherwise, create a new import declaration
      } else {
        nodePath.insertBefore(
          j.importDeclaration([specifier], j.stringLiteral('@workday/canvas-kit-react/common'))
        );
      }
    }
  }

  // Transform labs/tokens imports
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-labs-react/tokens'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          // Update type import node to use tokens package as the source
          transformTypeImports(nodePath, specifier);
          // Update StaticStates import node to use common package as the source
          transformStaticStateImports(nodePath, specifier);
        }
      });
      return nodePath;
    });

  // Transform preview/tokens imports
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-preview-react/tokens'}})
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          // Update type import node to use tokens package as the source
          transformTypeImports(nodePath, specifier);
          // Update StaticStates import node to use common package as the source
          transformStaticStateImports(nodePath, specifier);
        }
      });
      return nodePath;
    });

  // Finish the transform by removing all react-labs/tokens and react-preview/tokens import declarations
  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-labs-react/tokens'}})
    .remove();

  root
    .find(j.ImportDeclaration, {source: {value: '@workday/canvas-kit-preview-react/tokens'}})
    .remove();

  return root.toSource();
}
