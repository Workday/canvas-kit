import {Collection, API} from 'jscodeshift';

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
