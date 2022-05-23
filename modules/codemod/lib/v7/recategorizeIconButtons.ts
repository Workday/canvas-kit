import {
  API,
  FileInfo,
  Options,
  StringLiteral,
  JSXIdentifier,
  JSXAttribute,
  ASTPath,
  JSXElement,
} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';
import chalk from 'chalk';

const updateJSXTag = (nodePath: ASTPath<JSXElement>, newTag: string) => {
  const {name: componentName} = nodePath.value.openingElement.name as JSXIdentifier;
  if (componentName === 'IconButton') {
    (nodePath.value.openingElement.name as JSXIdentifier).name = newTag;
    if (nodePath.value.closingElement) {
      (nodePath.value.closingElement.name as JSXIdentifier).name = newTag;
    }
  }
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const requiredImportSpecifiers: string[] = [];

  /**
   * 1. Find button imports
   */
  const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/button'
  );
  if (!containsCanvasImports) {
    return file.source;
  }

  let buttonType = 'TertiaryButton'; //default button if no variant is specified

  // Button Mapping
  // circle -> tertiary
  // circle-filled -> secondary
  // inverse -> tertiary inverse
  // inverse-filled -> secondary inverse
  // plain/square -> not supported
  // square-filled -> not supported

  /**
   * 2. Find `IconButton`
   *  - If it has no variant, it means it's "circle" which is the default
   *    - Swap to `TertiaryButton`
   *    - Add `TertiaryButton` import if it doesn't exist.
   *  - If not
   *    - check the variant of the IconButton
   *    - Swap it out for the appropriate mapping
   */
  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.IconButton ||
          value.openingElement.name.name === styledMap.IconButton)
    )
    .forEach(nodePath => {
      const attrs = nodePath.value.openingElement.attributes;

      const variantProp = attrs?.find(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
      ) as JSXAttribute | undefined;
      // Default IconButton variant is `circle`
      if (variantProp) {
        const valueBody = variantProp.value;
        if (
          valueBody?.type === 'JSXExpressionContainer' &&
          valueBody.expression.type === 'StringLiteral'
        ) {
          variantProp.value = valueBody.expression;
        }

        const variantPropValue = (variantProp.value as StringLiteral).value;

        if (variantPropValue) {
          (variantProp.value as StringLiteral).value = variantPropValue.replace('Filled', '');

          buttonType = /filled/gi.test(variantPropValue) ? 'SecondaryButton' : 'TertiaryButton';

          if (!variantPropValue.includes('inverse')) {
            nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
          }
        } else {
          console.warn(
            chalk.bold.red('** CANNOT UPDATE EXPRESSION FOR ICON BUTTON VARIANT. **') +
              '\nYou will need to manually update this file to fix this warning.' +
              '\nFile Name: ' +
              chalk.blue(file.path) +
              '\nConsult Upgrade Guide Section for v7: "Removal of Icon Button"'
          );
        }
      }

      updateJSXTag(nodePath, buttonType);
      requiredImportSpecifiers.push(buttonType);
    });

  if (requiredImportSpecifiers.length === 0) {
    return file.source;
  }

  // Find all instances of IconButton within a style function
  // const StyledIconButton = styled(IconButton) gets renamed to
  // const StyledIconButton = styled(CorrectButtonMapping)
  root.find(j.VariableDeclarator).forEach(nodePath => {
    if (
      nodePath.value.init?.type === 'CallExpression' &&
      nodePath.value.init.callee.type === 'CallExpression' &&
      nodePath.value.init.callee.callee.type === 'Identifier' &&
      nodePath.value.init.callee.callee.name === 'styled' &&
      nodePath.value.init.callee.arguments[0].type === 'Identifier' &&
      nodePath.value.init.callee.arguments[0].name === importMap.IconButton
    ) {
      nodePath.value.init.callee.arguments[0].name = buttonType;
      requiredImportSpecifiers.push(buttonType);
    }
  });

  /**
   * Remove old imports: `IconButton`
   * Add new required imports
   */
  const buttonImports = root.find(j.ImportDeclaration, {
    source: {
      value: (value: string) =>
        value === '@workday/canvas-kit-react' || value === '@workday/canvas-kit-react/button',
    },
  });

  if (!buttonImports.length) {
    // Add new specifiers to a new import
    const allImports = root.find(j.ImportDeclaration);

    const lastImport = allImports.at(allImports.length);
    if (lastImport) {
      lastImport.insertAfter(
        j.importDeclaration(
          requiredImportSpecifiers.map(specifier => j.importSpecifier(j.identifier(specifier))),
          j.stringLiteral('@workday/canvas-kit-react/button')
        )
      );
    }
  } else {
    buttonImports.forEach(({node}) => {
      const specifiersToRemove = ['IconButton'];

      // Remove old specifiers
      if (
        typeof node.source.value === 'string' &&
        node.source.value.includes('@workday/canvas-kit-react')
      ) {
        node.specifiers?.forEach(specifier => {
          if (
            specifier.type === 'ImportSpecifier' &&
            specifiersToRemove.includes(specifier.imported.name)
          ) {
            // delete specifier
            node.specifiers?.splice(node.specifiers?.indexOf(specifier)!, 1);
          }
        });
      }

      //  Add new specifiers to existing import
      requiredImportSpecifiers.forEach(specifier => {
        if (
          !node.specifiers?.find(
            existing => existing.type === 'ImportSpecifier' && existing.imported.name === specifier
          )
        ) {
          node.specifiers?.push(j.importSpecifier(j.identifier(specifier)));
        }
      });
    });
  }

  return root.toSource();
}
