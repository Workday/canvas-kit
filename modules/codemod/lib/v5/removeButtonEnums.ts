import {
  API,
  FileInfo,
  Options,
  ImportSpecifier,
  MemberExpression,
  TSTypeReference,
  ImportDeclaration,
} from 'jscodeshift';
import {getImportRenameMap} from './getImportRenameMap';

// List of imports that will be removed from an import statement
const importsToRemove = [
  'ButtonVariant',
  'ButtonIconPosition',
  'ButtonSize',
  'ButtonIconSize',
  'OutlineButtonVariant',
  'DropdownButtonVariant',
  'IconButtonVariant',
  'TextButtonVariant',
  'DeprecatedButtonVariant',
  'ButtonIconPosition',
];

// List of enums used in code that will be translated to string literals
// before: <Button variant={ButtonVariant.Primary} />
// after:  <Button variant={"primary"} />
const enumsToMap = {
  'ButtonVariant.Primary': 'primary',
  'ButtonVariant.Secondary': 'secondary',
  'Button.Variant.Primary': 'primary',
  'Button.Variant.Secondary': 'secondary',
  'OutlineButtonVariant.Primary': 'primary',
  'OutlineButtonVariant.Secondary': 'secondary',
  'OutlineButtonVariant.Inverse': 'inverse',
  'OutlineButton.Variant.Primary': 'primary',
  'OutlineButton.Variant.Secondary': 'secondary',
  'OutlineButton.Variant.Inverse': 'inverse',
  'DropdownButtonVariant.Primary': 'primary',
  'DropdownButtonVariant.Secondary': 'secondary',
  'DropdownButton.Variant.Primary': 'primary',
  'DropdownButton.Variant.Secondary': 'secondary',
  'IconButtonVariant.Square': 'square',
  'IconButtonVariant.SquareFilled': 'squareFilled',
  'IconButtonVariant.Plain': 'plain',
  'IconButtonVariant.Circle': 'circle',
  'IconButtonVariant.CircleFilled': 'circleFilled',
  'IconButtonVariant.Inverse': 'inverse',
  'IconButtonVariant.InverseFilled': 'inverseFilled',
  'IconButton.Variant.Square': 'square',
  'IconButton.Variant.SquareFilled': 'squareFilled',
  'IconButton.Variant.Plain': 'plain',
  'IconButton.Variant.Circle': 'circle',
  'IconButton.Variant.CircleFilled': 'circleFilled',
  'IconButton.Variant.Inverse': 'inverse',
  'IconButton.Variant.InverseFilled': 'inverseFilled',
  'TextButtonVariant.Default': 'text',
  'TextButtonVariant.Inverse': 'inverse',
  'TextButton.Variant.Default': 'text',
  'TextButton.Variant.Inverse': 'inverse',
  'Hyperlink.Variant.Default': 'text',
  'Hyperlink.Variant.Inverse': 'inverse',
  'DeprecatedButtonVariant.Primary': 'primary',
  'DeprecatedButtonVariant.Secondary': 'secondary',
  'DeprecatedButtonVariant.Delete': 'delete',
  'deprecated_Button.Variant.Primary': 'primary',
  'deprecated_Button.Variant.Secondary': 'secondary',
  'deprecated_Button.Variant.Delete': 'delete',
  'ButtonIconPosition.Left': 'left',
  'ButtonIconPosition.Right': 'right',
  'TextButton.IconPosition.Left': 'left',
  'TextButton.IconPosition.Right': 'right',
  'ButtonSize.Small': 'small',
  'ButtonSize.Medium': 'medium',
  'ButtonSize.Large': 'large',
  'Button.Size.Small': 'small',
  'Button.Size.Medium': 'medium',
  'Button.Size.Large': 'large',
  'IconButton.Size.Small': 'small',
  'IconButton.Size.Medium': 'medium',
  'IconButton.Size.Large': 'large',
  'DeleteButton.Size.Small': 'small',
  'DeleteButton.Size.Medium': 'medium',
  'DeleteButton.Size.Large': 'large',
  'OutlineButton.Size.Small': 'small',
  'OutlineButton.Size.Medium': 'medium',
  'OutlineButton.Size.Large': 'large',
  'TextButton.Size.Small': 'small',
  'TextButton.Size.Medium': 'medium',
  'HighlightButton.Size.Small': 'small',
  'HighlightButton.Size.Medium': 'medium',
  'HighlightButton.Size.Large': 'large',
  'DropdownButton.Size.Medium': 'medium',
  'DropdownButton.Size.Large': 'large',
  'deprecated_Button.Size.Small': 'small',
  'deprecated_Button.Size.Medium': 'medium',
  'deprecated_Button.Size.Large': 'large',
};

// List of enum types that will be converted to union types of string literals
// before: function foo (variant: ButtonVariant) {}
// after:  function foo (variant: 'primary' | 'secondary') {}
const enumToLiteralUnionMap = {
  ButtonVariant: ['primary', 'secondary'],
  ButtonIconPosition: ['left', 'right'],
  ButtonIconSize: ['small', 'medium', 'large'],
  OutlineButtonVariant: ['primary', 'secondary', 'inverse'],
  DropdownButtonVariant: ['primary', 'secondary'],
  IconButtonVariant: [
    'square',
    'squareFilled',
    'plain',
    'circle',
    'circleFilled',
    'inverse',
    'inverseFilled',
  ],
  TextButtonVariant: ['text', 'inverse'],
  DeprecatedButtonVariant: ['primary', 'secondary', 'delete'],
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/button'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  // Remove Variant imports
  root
    .find(j.ImportSpecifier, (node: ImportSpecifier) => {
      return importsToRemove.includes(node.imported.name);
    })
    .remove();

  const reverseImportMap = Object.keys(importMap).reduce((result, key) => {
    result[importMap[key]] = key;
    return result;
  }, {} as Record<string, string>);

  // The following will replace JSX attributes that match something in `enumsToMap`
  // Example: variant={Button.Variant.Primary} => variant="primary"
  function findEnumReplacement(
    node: MemberExpression,
    candidates = enumsToMap,
    matched = ''
  ): null | string {
    let candidate: keyof typeof candidates;
    // eslint-disable-next-line guard-for-in
    for (candidate in candidates) {
      // base case
      if (
        node.object.type === 'Identifier' &&
        node.property.type === 'Identifier' &&
        `${reverseImportMap[node.object.name]}.${node.property.name}${matched}` === candidate
      ) {
        return enumsToMap[candidate];
      }

      // We didn't match yet, we'll try splitting the candidate string up into a left and right
      // portion and try again
      const parts = candidate.split('.');
      const last = parts.splice(-1, 1).join('');
      if (
        node.property.type === 'Identifier' &&
        node.property.name === last &&
        node.object.type === 'MemberExpression'
      ) {
        // we have a partial match
        return findEnumReplacement(node.object, enumsToMap, `.${last}`);
      }
    }

    return null;
  }

  root
    .find(j.MemberExpression, (node: MemberExpression) => {
      const matched = findEnumReplacement(node);

      return matched !== null;
    })
    .replaceWith(nodePath => {
      const matched = findEnumReplacement(nodePath.value);
      return j.literal(matched);
    });

  // Rewrite `import { beta_Button as Button } from `@workday/canvas-kit-react/button` to
  // `import { Button } from '@workday/canvas-kit-react/button'
  root.find(j.ImportSpecifier, {imported: {name: 'beta_Button'}}).forEach(nodePath => {
    const parent = nodePath.parent.value as ImportDeclaration;
    if (
      parent.source &&
      typeof parent.source.value === 'string' &&
      parent.source.value.includes('@workday/canvas-kit-react')
    ) {
      nodePath.value.imported = j.identifier('Button');
      // if the local name is also `Button`, remove it so the AST won't output `{ Button as Button }`
      if (nodePath.value.local?.name === 'Button') {
        nodePath.value.local = null;
      }
    }
    return nodePath;
  });

  /**
   * Rewrites usages of GenericTypeAnnotations to union types of string literals
   * @example
   * // from
   * interface Foo {
   *   variant?: ButtonVariant
   * }
   * // to
   * interface Foo {
   *   variant:? 'primary' | 'secondary'
   * }
   */
  function findTypeRename(node: TSTypeReference): null | string[] {
    if (node.type === 'TSTypeReference' && node.typeName.type === 'Identifier') {
      let identifier: keyof typeof enumToLiteralUnionMap;
      for (identifier in enumToLiteralUnionMap) {
        if (node.typeName.name === importMap[identifier]) {
          return enumToLiteralUnionMap[identifier];
        }
      }
    }

    return null;
  }

  root.find(j.TSTypeReference, findTypeRename).replaceWith(nodePath => {
    const node = nodePath.value;

    const matches = findTypeRename(node);
    if (matches) {
      return j.tsUnionType(
        matches.map(literal => j.tsLiteralType({type: 'StringLiteral', value: literal}))
      );
    }

    return nodePath.value;
  });

  return root.toSource();
}
