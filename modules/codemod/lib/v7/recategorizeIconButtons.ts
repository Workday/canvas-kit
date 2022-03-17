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

const updateJSXTag = (nodePath: ASTPath<JSXElement>, newTag: string) => {
  (nodePath.value.openingElement.name as JSXIdentifier).name = newTag;
  if (nodePath.value.closingElement) {
    (nodePath.value.closingElement.name as JSXIdentifier).name = newTag;
  }
};

const findIconBtnTag = (elementName: string, node: JSXElement) => {
  if (elementName && (node.openingElement.name as JSXIdentifier).name === elementName) {
    return true;
  }
  return false;
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const requiredImportSpecifiers: string[] = [];

  /**
   * 1. Find button imports
   */
  const {containsCanvasImports, importMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/button'
  );
  if (!containsCanvasImports) {
    return file.source;
  }

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
    .find(j.JSXElement, findIconBtnTag.bind(undefined, importMap.IconButton))
    .forEach((nodePath: ASTPath<JSXElement>) => {
      const attrs = nodePath.value.openingElement.attributes;

      const variantProp = attrs?.find(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
      );
      // Default IconButton variant is `circle`
      if (!variantProp) {
        updateJSXTag(nodePath, 'TertiaryButton');
        requiredImportSpecifiers.push('TertiaryButton');
      } else {
        const isCircleVariant =
          ((variantProp as JSXAttribute).value as StringLiteral)?.value === 'circle';
        const isCircleFilledVariant =
          ((variantProp as JSXAttribute).value as StringLiteral)?.value === 'circleFilled';
        const isInverseVariant =
          ((variantProp as JSXAttribute).value as StringLiteral)?.value === 'inverse';
        const isInverseFilledVariant =
          ((variantProp as JSXAttribute).value as StringLiteral)?.value === 'inverseFilled';

        if (isCircleVariant) {
          nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
          updateJSXTag(nodePath, 'TertiaryButton');
          requiredImportSpecifiers.push('TertiaryButton');
        } else if (isCircleFilledVariant) {
          nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
          updateJSXTag(nodePath, 'SecondaryButton');
          requiredImportSpecifiers.push('SecondaryButton');
        } else if (isInverseVariant) {
          updateJSXTag(nodePath, 'TertiaryButton');
          requiredImportSpecifiers.push('TertiaryButton');
        } else if (isInverseFilledVariant) {
          updateJSXTag(nodePath, 'SecondaryButton');
          requiredImportSpecifiers.push('SecondaryButton');
        } else {
          nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
          updateJSXTag(nodePath, 'TertiaryButton');
          requiredImportSpecifiers.push('TertiaryButton');
        }
      }
    });

  /**
   * Remove old imports: `IconButton`
   * Add new required imports
   */
  const buttonImports = root.find(j.ImportDeclaration, {
    source: {value: '@workday/canvas-kit-react/button'},
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
        node.source.value === '@workday/canvas-kit-react/button'
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
