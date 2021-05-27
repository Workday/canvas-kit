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
import {getImportRenameMap} from './getImportRenameMap';

const updateJSXTag = (nodePath: ASTPath<JSXElement>, newTag: string) => {
  (nodePath.value.openingElement.name as JSXIdentifier).name = newTag;
  if (nodePath.value.closingElement) {
    (nodePath.value.closingElement.name as JSXIdentifier).name = newTag;
  }
};

const findBtnTag = (elementName: string, node: JSXElement) => {
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

  /**
   * 2. Find `Button`
   *  - If it has variant="primary"
   *    - Swap to `PrimaryButton` and remove variant prop
   *    - Add `PrimaryButton` import if it doesn't exist.
   *  - If not
   *    - Swap to `SecondaryButton` and remove variant prop
   *    - Add `SecondaryButton` import if it doesn't exist
   */
  root
    .find(j.JSXElement, findBtnTag.bind(undefined, importMap.Button))
    .forEach((nodePath: ASTPath<JSXElement>) => {
      const attrs = nodePath.value.openingElement.attributes;
      let isPrimary = false;

      const variantProp = attrs?.find(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
      );
      if (variantProp) {
        isPrimary = ((variantProp as JSXAttribute).value as StringLiteral)?.value === 'primary';
        // remove variant prop
        nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
      }

      const buttonType = isPrimary ? 'PrimaryButton' : 'SecondaryButton';
      // Swap to `PrimaryButton` or `SecondaryButton`
      updateJSXTag(nodePath, buttonType);
      requiredImportSpecifiers.push(buttonType);
    });

  /**
   * 3. Find `HighlightButton`
   *  - Replace with `SecondaryButton`
   *  - Replace import with `SecondaryButton` if it doesn't exist
   */
  root
    .find(j.JSXElement, findBtnTag.bind(undefined, importMap.HighlightButton))
    .forEach(nodePath => {
      updateJSXTag(nodePath, 'SecondaryButton');
      requiredImportSpecifiers.push('SecondaryButton');
    });

  /**
   * 4. Find `OutlineButton`
   *  - Replace with `SecondaryButton`
   *  - If variant is 'inverse', keep it. Otherwise, remove the variant prop
   *  - Replace import with `SecondaryButton` if it doesn't exist
   */
  root.find(j.JSXElement, findBtnTag.bind(undefined, importMap.OutlineButton)).forEach(nodePath => {
    // Swap to `SecondaryButton`
    updateJSXTag(nodePath, 'SecondaryButton');

    const attrs = nodePath.value.openingElement.attributes;

    const variantProp = attrs?.find(
      attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
    );
    if (variantProp && variantProp.type === 'JSXAttribute') {
      if ((variantProp.value as StringLiteral).value !== 'inverse') {
        // remove variant prop
        nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
      }
    }

    requiredImportSpecifiers.push('SecondaryButton');
  });

  /**
   * 5. Find `TextButton`
   *  - Replace with `TertiaryButton`
   *  - If variant="text", remove variant prop
   */
  root.find(j.JSXElement, findBtnTag.bind(undefined, importMap.TextButton)).forEach(nodePath => {
    // Swap to `TertiaryButton`
    updateJSXTag(nodePath, 'TertiaryButton');
    const attrs = nodePath.value.openingElement.attributes;

    const variantProp = attrs?.find(
      attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
    );
    if (variantProp && ((variantProp as JSXAttribute)?.value as StringLiteral)?.value === 'text') {
      // remove variant prop
      nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
    }

    requiredImportSpecifiers.push('TertiaryButton');
  });

  /**
   * 6. Find `DropdownButton`
   *  - Replace `DropdownButton` with `SecondaryButton`
   *  - Remove `variant` prop
   *  - Add `icon="caretDownIcon" iconPosition="right"`
   *  - Add `import {caretDownIcon} from '@workday/canvas-system-icons-web'`
   *  - Replace `DropdownButton` import with `SecondaryButton`
   */
  root
    .find(j.JSXElement, findBtnTag.bind(undefined, importMap.DropdownButton))
    .forEach(nodePath => {
      const attrs = nodePath.value.openingElement.attributes;
      let isPrimary = false;

      const variantProp = attrs?.find(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
      );
      if (variantProp) {
        isPrimary = ((variantProp as JSXAttribute).value as StringLiteral)?.value === 'primary';
        // remove variant prop
        nodePath.value.openingElement.attributes?.splice(attrs?.indexOf(variantProp)!, 1);
      }

      const buttonType = isPrimary ? 'PrimaryButton' : 'SecondaryButton';
      // Swap to `PrimaryButton` or `SecondaryButton`
      updateJSXTag(nodePath, buttonType);

      // Add `icon="caretDownIcon" iconPosition="right"`
      nodePath.value.openingElement.attributes!.push(
        j.jsxAttribute(j.jsxIdentifier('icon'), j.stringLiteral('caretDownIcon'))
      );
      nodePath.value.openingElement.attributes!.push(
        j.jsxAttribute(j.jsxIdentifier('iconPosition'), j.stringLiteral('right'))
      );

      requiredImportSpecifiers.push(buttonType);

      // Add `import {caretDownIcon} from '@workday/canvas-system-icons-web'`
      const lastImport = root.find(j.ImportDeclaration).at(-1);
      if (lastImport) {
        lastImport.insertAfter(
          j.importDeclaration(
            [j.importSpecifier(j.identifier('caretDownIcon'))],
            j.stringLiteral('@workday/canvas-system-icons-web')
          )
        );
      }
    });

  /**
   * Remove old imports: `DropdownButton`, `TextButton`, `OutlineButton`, `HighlightButton`, `Button`.
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
      const specifiersToRemove = [
        'DropdownButton',
        'TextButton',
        'OutlineButton',
        'HighlightButton',
        'Button',
      ];

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
