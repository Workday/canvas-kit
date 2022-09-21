import {API, FileInfo, Identifier, ImportDeclaration, Options} from 'jscodeshift';

const mainPackage = '@workday/canvas-kit-preview-react';
const drawerPackage = '@workday/canvas-kit-preview-react/menu';
const allImportNames = ['Menu', 'MenuProps', 'MenuState', 'MenuItem', 'MenuItemProps'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  let hasMenuImports = false;

  // This toggles the failsafe that prevents us from accidentally transforming something unintentionally.
  root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
    const value = nodePath.source.value;
    // If there's an import from the drawer package, set the import boolean check to true
    if (value === drawerPackage) {
      hasMenuImports = true;
      return false;
    }
    // If there's an import from the main package, check to see if Menu or MenuProps are among the named imports
    // e.g. import {Menu} from '@workday/canvas-kit-preview-react';
    if (value === mainPackage) {
      (nodePath.specifiers || []).forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          if (allImportNames.includes(specifier.imported.name)) {
            hasMenuImports = true;
          }
        }
      });
    }
    return false;
  });

  // Failsafe to skip transforms unless a Menu import is detected
  if (!hasMenuImports) {
    return root.toSource();
  }

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value.includes(mainPackage)},
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          //  Adds Deprecated part to a import name for Menu, MenuProps, MenuState, MenuItem, MenuItemProps
          if (allImportNames.includes(specifier.imported.name)) {
            specifier.imported.name = `Deprecated${specifier.imported.name}`;
          }
        }
        return specifier;
      });
    });

  // Add Deprecated in types using menu interfaces
  const typeNames = ['MenuProps', 'MenuState', 'MenuItemProps'];
  root
    .find(j.TSTypeReference, {
      typeName: {type: 'Identifier', name: (name: string) => typeNames.includes(name)},
    })
    .forEach(nodePath => {
      const identifier = nodePath.value.typeName as Identifier;
      identifier.name = `Deprecated${identifier.name}`;
    });

  // Add Deprecated to all interface names
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending menu interfaces it should add Deprecated to them
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        typeNames.includes(typeExtension.expression.name)
      ) {
        typeExtension.expression.name = `Deprecated${typeExtension.expression.name}`;
      }
    });
  });

  // Transform Menu and MenuItem JSXElements
  // e.g. `<Menu>` becomes `<DeprecatedMenu>`
  // e.g. `<MenuItem>` becomes `<DeprecatedMenuItem>`
  root
    .find(j.JSXIdentifier, {name: (name: string) => name === 'Menu' || name === 'MenuItem'})
    .forEach(nodePath => {
      nodePath.node.name = `Deprecated${nodePath.node.name}`;
    });

  return root.toSource();
}
