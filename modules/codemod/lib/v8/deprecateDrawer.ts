import {API, FileInfo, Identifier, ImportDeclaration, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-labs-react';
const drawerPackage = '@workday/canvas-kit-labs-react/drawer';

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasDrawerImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // If there's an import from the drawer package, set the import boolean check to true
    if (value === drawerPackage) {
      hasDrawerImports = true;
      return false;
    }
    // If there's an import from the main package, check to see if Drawer or DrawerProps are among the named imports
    // e.g. import {Drawer} from '@workday/canvas-kit-react';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          const specifierName = specifier.imported.name;
          if (
            specifierName === 'Drawer' ||
            specifierName === 'DrawerProps' ||
            specifierName === 'DrawerHeaderProps' ||
            specifierName === 'DrawerHeader'
          ) {
            hasDrawerImports = true;
          }
        }
      });
    }
    return false;
  });

  // Failsafe to skip transforms unless a Drawer import is detected
  if (!hasDrawerImports) {
    return root.toSource();
  }

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes('@workday/canvas-kit-labs-react')},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          //  `import {Drawer}` becomes `import {DeprecatedDrawer}`
          if (specifier.imported.name === 'Drawer') {
            specifier.imported.name = 'DeprecatedDrawer';
          }
          //  `import {DrawerProps}` becomes `import {DeprecatedDrawerProps}`
          if (specifier.imported.name === 'DrawerProps') {
            specifier.imported.name = 'DeprecatedDrawerProps';
          }
          //  `import {DrawerHeader}` becomes `import {DeprecatedDrawerHeader}`
          if (specifier.imported.name === 'DrawerHeader') {
            specifier.imported.name = 'DeprecatedDrawerHeader';
          }
          //  `import {DrawerHeaderProps}` becomes `import {DeprecatedDrawerHeaderProps}`
          if (specifier.imported.name === 'DrawerHeaderProps') {
            specifier.imported.name = 'DeprecatedDrawerHeaderProps';
          }
        }
        return specifier;
      });
    });

  // Transform DrawerProps type references
  // e.g. `type CustomProps = DrawerProps;` becomes `type CustomProps = DeprecatedDrawerProps;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'DrawerProps'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'DeprecatedDrawerProps';
    });

  // Transform DrawerHeaderProps type references
  // e.g. `type CustomProps = DrawerHeaderProps;` becomes `type CustomProps = DeprecatedDrawerHeaderProps;`
  root
    .find(j.TSTypeReference, {typeName: {type: 'Identifier', name: 'DrawerHeaderProps'}})
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = 'DeprecatedDrawerHeaderProps';
    });

  // Transform DrawerProps type interface declaration references
  // e.g. `interface CustomProps extends DrawerProps` becomes `interface CustomProps extends DeprecatedDrawerProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending DrawerProps, transform the extension name to DeprecatedDrawerProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        typeExtension.expression.name === 'DrawerProps'
      ) {
        typeExtension.expression.name = 'DeprecatedDrawerProps';
      }
    });
  });

  // Transform DrawerHeaderProps type interface declaration references
  // e.g. `interface CustomProps extends DrawerHeaderProps` becomes `interface CustomProps extends DeprecatedDrawerHeaderProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending DrawerHeaderProps, transform the extension name to DeprecatedDrawerHeaderProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        typeExtension.expression.name === 'DrawerHeaderProps'
      ) {
        typeExtension.expression.name = 'DeprecatedDrawerHeaderProps';
      }
    });
  });

  // Transform Drawer JSXElements
  // e.g. `<Drawer>` becomes `<DeprecatedDrawer>`
  root.find(j.JSXIdentifier, {name: 'Drawer'}).forEach(nodePath => {
    nodePath.node.name = 'DeprecatedDrawer';
  });

  // Transform Drawer JSXElements
  // e.g. `<DrawerHeader>` becomes `<DeprecatedDrawerHeader>`
  root.find(j.JSXIdentifier, {name: 'DrawerHeader'}).forEach(nodePath => {
    nodePath.node.name = 'DeprecatedDrawerHeader';
  });

  return root.toSource();
}
