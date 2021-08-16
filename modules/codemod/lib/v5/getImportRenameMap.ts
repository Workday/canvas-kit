import {Collection, ImportDeclaration, JSCodeshift, CallExpression} from 'jscodeshift';

export function getImportRenameMap(j: JSCodeshift, root: Collection<any>, packageName = '') {
  let containsCanvasImports = false;

  // build import name remapping - in case someone renamed imports...
  // i.e. `import { IconButton as StyledIconButton } ...`
  const importMap: Record<string, string> = {};
  const styledMap: Record<string, string> = {};
  root.find(j.ImportDeclaration, (node: ImportDeclaration) => {
    // imports our module
    const value = node.source.value;
    if (
      typeof value === 'string' &&
      (value === '@workday/canvas-kit-react' || value === packageName)
    ) {
      containsCanvasImports = true;
      (node.specifiers || []).forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          if (!specifier.local || specifier.local.name === specifier.imported.name) {
            importMap[specifier.imported.name] = specifier.imported.name;
          } else {
            importMap[specifier.imported.name] = specifier.local.name;
          }
        }
      });
    }
  });

  root
    .find(j.CallExpression, (node: CallExpression) => {
      if (
        node.callee.type === 'Identifier' &&
        node.callee.name === 'styled' &&
        node.arguments[0].type === 'Identifier'
      ) {
        return true;
      }
      return false;
    })
    .forEach(nodePath => {
      // const StyledName = styled(OriginalName)({})
      // const StyledName = styled(OriginalName)`` // Tagged template
      if (
        (nodePath.parent.value.type === 'CallExpression' ||
          nodePath.parent.value.type === 'TaggedTemplateExpression') &&
        nodePath.parent.parent.value.type === 'VariableDeclarator' &&
        nodePath.parent.parent.value.id.type === 'Identifier'
      ) {
        const styledName = nodePath.parent.parent.value.id.name;

        if (nodePath.value.arguments[0].type === 'Identifier') {
          styledMap[nodePath.value.arguments[0].name] = styledName;
        }
      }
    });

  return {containsCanvasImports, importMap, styledMap};
}
