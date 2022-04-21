import {
  ImportSpecifier,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  Collection,
  API,
} from 'jscodeshift';

export type ImportSpecifierArray = (
  | ImportSpecifier
  | ImportNamespaceSpecifier
  | ImportDefaultSpecifier
)[];

/**
 * Returns a filtered array of ImportSpecifiers
 * You can filter all ImportSpecifiers or additionally filter by providing an array of import names.
 * @example
 * root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
 *    const importSpecifiers = nodePath.specifiers || [];
 *    // specific named imports we're looking for
 *   const importNames = ['PageHeader', 'PageHeaderProps']
 *   const pageHeaderImports = filterImportSpecifiers(importSpecifiers, importNames);
 *   ...
 * }
 */
export function filterImportSpecifiers(
  importSpecifiers: ImportSpecifierArray,
  importNames?: string[]
) {
  const filteredSpecifiers = [] as ImportSpecifier[];

  importSpecifiers.forEach(specifier => {
    if (specifier.type === 'ImportSpecifier') {
      if (importNames && importNames.includes(specifier.imported.name)) {
        filteredSpecifiers.push(specifier);
      } else {
        filteredSpecifiers.push(specifier);
      }
    }
  });

  return filteredSpecifiers;
}

export type RenameMap = {
  [key: string]: string;
};

/**
 * Returns a filtered array of ImportDefaultSpecifiers
 * You can filter all ImportDefaultSpecifiers or additionally filter by providing an array of import names.
 * @example
 * root.find(j.ImportDeclaration, (nodePath: ImportDeclaration) => {
 *   const importSpecifiers = nodePath.specifiers || [];
 *   // specific default imports we're looking for
 *   const importNames = ['PageHeader']
 *   const pageHeaderImports = filterImportDefaultSpecifiers(importSpecifiers, importNames);
 *   ...
 * }
 */
export function filterImportDefaultSpecifiers(
  importSpecifiers: ImportSpecifierArray,
  importNames?: string[]
) {
  const filteredSpecifiers = [] as ImportDefaultSpecifier[];

  importSpecifiers.forEach(specifier => {
    if (specifier.type === 'ImportDefaultSpecifier') {
      const localName = specifier.local?.name || '';
      if (importNames && importNames.includes(localName)) {
        filteredSpecifiers.push(specifier);
      } else {
        filteredSpecifiers.push(specifier);
      }
    }
  });
  return filteredSpecifiers;
}

/**
 * Renames import default specifiers for a given rename map
 * @example
 * const renameMap = { 'PageHeader': 'DeprecatedPageHeader' };
 * const pageHeaderImports = filterImportDefaultSpecifiers(importSpecifiers, importNames);
 * renameImportSpecifiers(pageHeaderSpecifiers, renameMap);
 */
export function renameImportDefaultSpecifiers(
  importSpecifiers: ImportDefaultSpecifier[],
  renameMap: RenameMap
) {
  importSpecifiers.forEach(specifier => {
    const specifierName = specifier.local?.name;
    if (specifier.local && specifierName && specifierName in renameMap) {
      specifier.local.name = renameMap[specifierName];
    }
  });
  return importSpecifiers;
}

/**
 * Search for import statements for a package and specific import specifiers. This
 * is useful for codemods to skip files that don't contain import specifiers that
 * require codemoding.
 *
 * @example
 * const hasImports = hasImportSpecifiers(
 *   api,
 *   root,
 *   '@workday/canvas-kit-react/cookie-banner',
 *   ['CookieBanner', 'CookieBannerProps']
 * )
 *
 * if (!hasImports) {
 *   return file.source
 * }
 */
export function hasImportSpecifiers(
  api: API,
  root: Collection<any>,
  packageName: string | string[],
  specifiers: string[]
) {
  const j = api.jscodeshift;

  return !!root.find(j.ImportDeclaration, nodePath => {
    const value = nodePath.source.value;
    // package name was found
    if (
      typeof packageName === 'string'
        ? value === packageName
        : packageName.includes(value as string)
    ) {
      return true;
    }

    // Extract the main package(s) from the import, and test specifiers against that package
    const mainPackage = (typeof packageName === 'string' ? [packageName] : packageName).map(s =>
      s
        .split('/')
        .slice(0, -1)
        .join('/')
    );
    if (mainPackage.includes(value as string)) {
      return !!(nodePath.specifiers || []).find(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          const specifierName = specifier.imported.name;
          return specifiers.includes(specifierName);
        }
        return false;
      });
    }

    return false;
  });
}

export function renameImports(
  api: API,
  root: Collection<any>,
  packageName: string,
  specifierMap: Record<string, string>,
  discoveredImportSpecifiers: Record<string, boolean> = {}
): Collection<any> {
  const j = api.jscodeshift;

  if (!hasImportSpecifiers(api, root, packageName, Object.keys(specifierMap))) {
    return root;
  }

  const mainPackage = packageName
    .split('/')
    .slice(0, -1)
    .join('/');

  // Transform import statements
  // e.g. import { CookieBanner, CookieBannerProps } from '@workday/canvas-kit-react';
  // becomes import { DeprecatedCookieBanner, DeprecatedCookieBannerProps } from '@workday/canvas-kit-react';

  // Find imports from main packages
  // ex. '@workday/canvas-kit-labs-react'
  root.find(j.ImportDeclaration, {source: {value: mainPackage}}).forEach(nodePath => {
    nodePath.value.specifiers?.forEach(specifier => {
      if (specifier.type === 'ImportSpecifier') {
        if (Object.keys(specifierMap).includes(specifier.imported.name)) {
          if (!specifier.local || specifier.local.name === specifier.imported.name) {
            discoveredImportSpecifiers[specifier.imported.name] = true;
          }

          specifier.imported.name = specifierMap[specifier.imported.name];
        }
      }
    });
  });

  // Find imports from component specific packages
  // ex. '@workday/canvas-kit-labs-react/header'
  root.find(j.ImportDeclaration, {source: {value: packageName}}).forEach(nodePath => {
    nodePath.value.specifiers?.forEach(specifier => {
      // Transforms default imports
      if (specifier.type === 'ImportDefaultSpecifier') {
        if (specifier.local && Object.keys(specifierMap).includes(specifier.local.name)) {
          discoveredImportSpecifiers[specifier.local.name] = true;

          specifier.local.name = specifierMap[specifier.local.name];
        }
      }

      // Transform named exports
      if (specifier.type === 'ImportSpecifier') {
        if (Object.keys(specifierMap).includes(specifier.imported.name)) {
          if (!specifier.local || specifier.local.name === specifier.imported.name) {
            discoveredImportSpecifiers[specifier.imported.name] = true;
          }

          specifier.imported.name = specifierMap[specifier.imported.name];
        }
      }
    });
  });

  // Transform type references
  // e.g. `type CustomProps = CookieBannerProps;` becomes `type CustomProps = DeprecatedCookieBannerProps;`
  root.find(j.TSTypeReference, {typeName: {type: 'Identifier'}}).forEach(nodePath => {
    if (
      nodePath.value.typeName.type === 'Identifier' &&
      Object.keys(specifierMap).includes(nodePath.value.typeName.name)
    ) {
      nodePath.value.typeName.name = specifierMap[nodePath.value.typeName.name];
    }
  });

  // Transform type interface declaration references
  // e.g. `interface CustomProps extends CookieBannerProps` becomes `interface CustomProps extends DeprecatedCookieBannerProps`
  root.find(j.TSInterfaceDeclaration).forEach(nodePath => {
    // If the interface is extending CookieBannerProps, transform the extension name to DeprecatedCookieBannerProps
    nodePath.node.extends?.forEach(typeExtension => {
      if (
        typeExtension.expression.type === 'Identifier' &&
        Object.keys(specifierMap).includes(typeExtension.expression.name)
      ) {
        typeExtension.expression.name = specifierMap[typeExtension.expression.name];
      }
    });
  });

  // Transform JSXElements
  // e.g. `<CookieBanner>` becomes `<DeprecatedCookieBanner>`
  root.find(j.JSXIdentifier).forEach(nodePath => {
    if (
      Object.keys(specifierMap).includes(nodePath.value.name) &&
      discoveredImportSpecifiers[nodePath.value.name]
    ) {
      nodePath.node.name = specifierMap[nodePath.value.name];
    }
  });

  // Transform MemberExpressions
  // e.g. `CookieBanner.DefaultNotice` becomes `DeprecatedCookieBanner.DefaultNotice`
  root.find(j.MemberExpression, {object: {type: 'Identifier'}}).forEach(nodePath => {
    if (
      nodePath.value.object.type === 'Identifier' &&
      Object.keys(specifierMap).includes(nodePath.value.object.name) &&
      discoveredImportSpecifiers[nodePath.value.object.name]
    ) {
      nodePath.value.object.name = specifierMap[nodePath.value.object.name];
    }
  });

  return root;
}
