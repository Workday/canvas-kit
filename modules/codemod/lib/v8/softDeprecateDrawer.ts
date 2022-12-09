import {API, FileInfo, Identifier, ImportDeclaration, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-labs-react';
const drawerPackage = '@workday/canvas-kit-labs-react/drawer';
const drawerImportNames = [
  'Drawer',
  'DrawerProps',
  'DrawerHeaderProps',
  'DrawerHeader',
  'DrawerDirection',
];

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
    // e.g. import {Drawer} from '@workday/canvas-kit-labs-react';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          drawerImportNames.includes(specifier.imported.name)
        ) {
          hasDrawerImports = true;
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
      source: {value: (value: string) => value.includes(mainPackage)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          //  `import {Drawer}` becomes `import {DeprecatedDrawer}`
          //  `import {DrawerProps}` becomes `import {DeprecatedDrawerProps}`
          //  `import {DrawerHeader}` becomes `import {DeprecatedDrawerHeader}`
          //  `import {DrawerHeaderProps}` becomes `import {DeprecatedDrawerHeaderProps}`
          if (drawerImportNames.includes(specifier.imported.name)) {
            specifier.imported.name = `Deprecated${specifier.imported.name}`;
          }
        }
        return specifier;
      });
    });

  // Transform DrawerProps type references
  // e.g. `type CustomProps = DrawerProps;` becomes `type CustomProps = DeprecatedDrawerProps;`
  // Transform DrawerHeaderProps type references
  // e.g. `type CustomProps = DrawerHeaderProps;` becomes `type CustomProps = DeprecatedDrawerHeaderProps;`
  const typeNames = ['DrawerProps', 'DrawerHeaderProps'];
  root
    .find(j.TSTypeReference, {
      typeName: {
        type: 'Identifier',
        name: (value: string) => typeNames.includes(value),
      },
    })
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = `Deprecated${identifier.name}`;
    });

  // Transform DrawerProps type interface declaration references
  // e.g. `interface CustomProps extends DrawerProps` becomes `interface CustomProps extends DeprecatedDrawerProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending DrawerProps, transform the extension name to DeprecatedDrawerProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (typeExtension.expression.type === 'Identifier') {
        const typeExtensionName = typeExtension.expression.name;
        if (
          typeExtension.expression.type === 'Identifier' &&
          typeNames.includes(typeExtensionName)
        ) {
          typeExtension.expression.name = `Deprecated${typeExtensionName}`;
        }
      }
    });
  });

  // Transform `<DrawerDirection>` to `<DeprecatedDrawerDirection>`
  root.find(j.Identifier, {name: 'DrawerDirection'}).forEach(nodePath => {
    nodePath.value.name = 'DeprecatedDrawerDirection';
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
