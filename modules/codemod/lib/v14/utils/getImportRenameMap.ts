import {Collection, JSCodeshift, CallExpression} from 'jscodeshift';

export function getImportRenameMap(
  j: JSCodeshift,
  root: Collection<any>,
  mainPackage = '@workday/canvas-kit-react',
  packageName = ''
) {
  let containsCanvasImports = false;

  // build import name remapping - in case someone renamed imports...
  // i.e. `import { IconButton as StyledIconButton } ...`
  const importMap: Record<string, string> = {};
  const styledMap: Record<string, string> = {};
  root.find(j.ImportDeclaration, node => {
    // imports our module
    const value = node.source.value;
    if (
      typeof value === 'string' &&
      (value === mainPackage || value.startsWith(mainPackage) || value === packageName)
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
    return false;
  });

  root
    .find(
      j.CallExpression,
      (node: CallExpression) =>
        node.callee.type === 'Identifier' &&
        node.callee.name === 'styled' &&
        node.arguments[0].type === 'Identifier'
    )
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
