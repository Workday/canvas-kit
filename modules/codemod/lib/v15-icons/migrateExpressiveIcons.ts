import {API, FileInfo, JSCodeshift} from 'jscodeshift';

const ACCENT_ICONS_PACKAGE = '@workday/canvas-accent-icons-web';
const APPLET_ICONS_PACKAGE = '@workday/canvas-applet-icons-web';
const EXPRESSIVE_ICONS_PACKAGE = '@workday/canvas-expressive-icons-web';
const SYSTEM_ICONS_PACKAGE = '@workday/canvas-system-icons-web';
const ICON_MODULE = '@workday/canvas-kit-react/icon';
const MAIN_REACT_PACKAGE = '@workday/canvas-kit-react';

const OLD_ICON_PACKAGES = [ACCENT_ICONS_PACKAGE, APPLET_ICONS_PACKAGE] as const;
const OLD_COMPONENT_NAMES = ['AccentIcon', 'AppletIcon'] as const;
const NEW_COMPONENT_NAME = 'ExpressiveIcon';

function importsFromPackage(j: JSCodeshift, root: ReturnType<JSCodeshift>, pkg: string): boolean {
  return root.find(j.ImportDeclaration, {source: {value: pkg}}).length > 0;
}

/** True when the file imports actual bindings from the system icons package (not side-effect only). */
function importsSystemIconsWithExports(j: JSCodeshift, root: ReturnType<JSCodeshift>): boolean {
  return root
    .find(j.ImportDeclaration, {source: {value: SYSTEM_ICONS_PACKAGE}})
    .some(path => (path.value.specifiers?.length ?? 0) > 0);
}

function fileUsesMigratableIconImports(j: JSCodeshift, root: ReturnType<JSCodeshift>): boolean {
  return (
    OLD_ICON_PACKAGES.some(pkg => importsFromPackage(j, root, pkg)) ||
    importsSystemIconsWithExports(j, root)
  );
}

function getSpecifierKey(specifier: any): string {
  if (specifier.type === 'ImportDefaultSpecifier') {
    return 'default';
  }
  if (specifier.type === 'ImportNamespaceSpecifier') {
    return '*';
  }
  if (specifier.type === 'ImportSpecifier' && specifier.imported?.type === 'Identifier') {
    return specifier.imported.name;
  }
  return JSON.stringify(specifier);
}

/**
 * Merges multiple import declarations from the same package into a single one,
 * deduplicating specifiers by imported name. Handles the case where both
 * accent and applet icon packages are renamed to the expressive icons package,
 * producing two declarations for the same source.
 */
function mergeImportDeclarations(j: JSCodeshift, root: ReturnType<JSCodeshift>, pkg: string): void {
  const importPaths = root.find(j.ImportDeclaration, {source: {value: pkg}}).paths();
  if (importPaths.length <= 1) {
    return;
  }

  const allSpecifiers: any[] = [];
  const seenKeys = new Set<string>();

  for (const path of importPaths) {
    for (const specifier of path.value.specifiers ?? []) {
      const key = getSpecifierKey(specifier);
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        allSpecifiers.push(specifier);
      }
    }
  }

  importPaths[0].value.specifiers = allSpecifiers;
  for (const path of importPaths.slice(1)) {
    j(path).remove();
  }
}

/**
 * Removes duplicate specifiers within import declarations from a given package.
 * Handles the case where both AccentIcon and AppletIcon are renamed to
 * ExpressiveIcon, or where ExpressiveIcon was already imported before the transform.
 */
function deduplicateSpecifiers(j: JSCodeshift, root: ReturnType<JSCodeshift>, pkg: string): void {
  root.find(j.ImportDeclaration, {source: {value: pkg}}).forEach(nodePath => {
    const seen = new Set<string>();
    nodePath.value.specifiers = (nodePath.value.specifiers ?? []).filter(specifier => {
      const key = getSpecifierKey(specifier);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  });
}

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const root = j(file.source);

  if (!fileUsesMigratableIconImports(j, root)) {
    return file.source;
  }

  // Rename old icon package imports → expressive icons package
  for (const oldPkg of OLD_ICON_PACKAGES) {
    root.find(j.ImportDeclaration, {source: {value: oldPkg}}).forEach(nodePath => {
      if (typeof nodePath.value.source.value === 'string') {
        nodePath.value.source.value = EXPRESSIVE_ICONS_PACKAGE;
      }
    });
  }

  // Gate: merge into one declaration if both packages were imported
  // (both now point to the same expressive icons package)
  mergeImportDeclarations(j, root, EXPRESSIVE_ICONS_PACKAGE);

  // Rename AccentIcon / AppletIcon → ExpressiveIcon in canvas-kit imports
  for (const moduleSource of [ICON_MODULE, MAIN_REACT_PACKAGE]) {
    root.find(j.ImportDeclaration, {source: {value: moduleSource}}).forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.imported.type === 'Identifier' &&
          (OLD_COMPONENT_NAMES as readonly string[]).includes(specifier.imported.name)
        ) {
          const oldName = specifier.imported.name;
          specifier.imported = j.identifier(NEW_COMPONENT_NAME);
          // Preserve user-provided aliases; only rename local when it matched the old imported name
          if (specifier.local?.type === 'Identifier' && specifier.local.name === oldName) {
            specifier.local = j.identifier(NEW_COMPONENT_NAME);
          }
        }
      });
    });
  }

  // Gate: deduplicate ExpressiveIcon specifiers per import declaration.
  // Covers two scenarios:
  //   1. Both AccentIcon and AppletIcon existed in the same import → both renamed, one removed.
  //   2. ExpressiveIcon was already imported → the newly renamed specifier is dropped.
  for (const moduleSource of [ICON_MODULE, MAIN_REACT_PACKAGE]) {
    deduplicateSpecifiers(j, root, moduleSource);
  }

  // Rename JSX element names
  for (const oldName of OLD_COMPONENT_NAMES) {
    root
      .find(j.JSXOpeningElement, {name: {type: 'JSXIdentifier', name: oldName}})
      .forEach(nodePath => {
        nodePath.value.name = j.jsxIdentifier(NEW_COMPONENT_NAME);
      });

    root
      .find(j.JSXClosingElement, {name: {type: 'JSXIdentifier', name: oldName}})
      .forEach(nodePath => {
        nodePath.value.name = j.jsxIdentifier(NEW_COMPONENT_NAME);
      });
  }

  return root.toSource();
}
