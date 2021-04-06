import {Collection, ImportDeclaration, JSCodeshift} from 'jscodeshift';

export function getImportRenameMap(j: JSCodeshift, root: Collection<any>, packageName = '') {
  let containsCanvasImports = false;

  // build import name remapping - in case someone renamed imports...
  // i.e. `import { IconButton as StyledIconButton } ...`
  const importMap: Record<string, string> = {};
  root.find(j.ImportDeclaration, (node: ImportDeclaration) => {
    // imports our module
    const value = node.source.value;
    if (
      typeof value === 'string' &&
      (value === '@workday/canvas-kit-react' || value === packageName)
    ) {
      containsCanvasImports = true;
      (node.specifiers || []).forEach(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.local &&
          specifier.imported.name !== specifier.local.name
        ) {
          importMap[specifier.local.name] = specifier.imported.name;
        }
      });
    }
  });

  return {containsCanvasImports, importMap};
}
