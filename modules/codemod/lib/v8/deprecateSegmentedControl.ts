import {API, FileInfo, Identifier, ImportDeclaration, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-react';
const drawerPackage = '@workday/canvas-kit-react/segmented-control';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasSegmentedControlImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // If there's an import from the drawer package, set the import boolean check to true
    if (value === drawerPackage) {
      hasSegmentedControlImports = true;
      return false;
    }
    // If there's an import from the main package, check to see if SegmentedControl or SegmentedControlProps are among the named imports
    // e.g. import {SegmentedControl} from '@workday/canvas-kit-react';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          (specifier.imported.name === 'SegmentedControl' ||
            specifier.imported.name === 'SegmentedControlProps')
        ) {
          hasSegmentedControlImports = true;
        }
      });
    }
    return false;
  });

  // Failsafe to skip transforms unless a SegmentedControl import is detected
  if (!hasSegmentedControlImports) {
    return root.toSource();
  }

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes(mainPackage)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          const specifierName = specifier.imported.name;
          // make the following
          // `import {SegmentedControl}` becomes `import {DeprecatedSegmentedControl}`
          // `import {SegmentedControlProps}` becomes `import {DeprecatedSegmentedControlProps}`
          if (specifierName === 'SegmentedControl' || 'SegmentedControlProps') {
            specifier.imported.name = `Deprecated${specifierName}`;
          }
        }
        return specifier;
      });
    });

  // Transform SegmentedControlProps type references
  // e.g. `type CustomProps = SegmentedControlProps;` becomes `type CustomProps = DeprecatedSegmentedControlProps;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'SegmentedControlProps'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'DeprecatedSegmentedControlProps';
    });

  // Transform SegmentedControlProps type interface declaration references
  // e.g. `interface CustomProps extends SegmentedControlProps` becomes `interface CustomProps extends DeprecatedSegmentedControlProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending SegmentedControlProps, transform the extension name to DeprecatedSegmentedControlProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        typeExtension.expression.name === 'SegmentedControlProps'
      ) {
        typeExtension.expression.name = 'DeprecatedSegmentedControlProps';
      }
    });
  });

  // Transform SegmentedControl JSXElements
  // e.g. `<SegmentedControl>` becomes `<DeprecatedSegmentedControl>`
  root.find(j.JSXIdentifier, {name: 'SegmentedControl'}).forEach(nodePath => {
    nodePath.node.name = 'DeprecatedSegmentedControl';
  });

  return root.toSource();
}
