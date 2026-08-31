import {API, FileInfo, JSCodeshift} from 'jscodeshift';

const ACCENT_ICONS_PACKAGE = '@workday/canvas-accent-icons-web';
const EXPRESSIVE_ICONS_PACKAGE = '@workday/canvas-expressive-icons-web';
const SYSTEM_ICONS_PACKAGE = '@workday/canvas-system-icons-web';
const ICON_MODULE = '@workday/canvas-kit-react/icon';
const MAIN_REACT_PACKAGE = '@workday/canvas-kit-react';

function importsAccentIconsPackage(j: JSCodeshift, root: ReturnType<JSCodeshift>) {
  return (
    root.find(j.ImportDeclaration, {
      source: {value: ACCENT_ICONS_PACKAGE},
    }).length > 0
  );
}

/** True when the file imports actual bindings from the system icons package (not side-effect only). */
function importsSystemIconsWithExports(j: JSCodeshift, root: ReturnType<JSCodeshift>) {
  return root
    .find(j.ImportDeclaration, {
      source: {value: SYSTEM_ICONS_PACKAGE},
    })
    .some(path => (path.value.specifiers?.length ?? 0) > 0);
}

function fileUsesMigratableIconImports(j: JSCodeshift, root: ReturnType<JSCodeshift>) {
  if (importsAccentIconsPackage(j, root)) {
    return true;
  }
  return importsSystemIconsWithExports(j, root);
}

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  if (!fileUsesMigratableIconImports(j, root)) {
    return file.source;
  }

  root
    .find(j.ImportDeclaration, {
      source: {value: ACCENT_ICONS_PACKAGE},
    })
    .forEach(nodePath => {
      if (typeof nodePath.value.source.value === 'string') {
        nodePath.value.source.value = EXPRESSIVE_ICONS_PACKAGE;
      }
    });

  for (const moduleSource of [ICON_MODULE, MAIN_REACT_PACKAGE]) {
    root
      .find(j.ImportDeclaration, {
        source: {value: moduleSource},
      })
      .forEach(nodePath => {
        nodePath.value.specifiers?.forEach(specifier => {
          if (
            specifier.type === 'ImportSpecifier' &&
            specifier.imported.type === 'Identifier' &&
            specifier.imported.name === 'AccentIcon'
          ) {
            specifier.imported = j.identifier('ExpressiveIcon');
            if (specifier.local?.type === 'Identifier' && specifier.local.name === 'AccentIcon') {
              specifier.local = j.identifier('ExpressiveIcon');
            }
          }
        });
      });
  }

  root
    .find(j.JSXOpeningElement, {
      name: {type: 'JSXIdentifier', name: 'AccentIcon'},
    })
    .forEach(nodePath => {
      nodePath.value.name = j.jsxIdentifier('ExpressiveIcon');
    });

  root
    .find(j.JSXClosingElement, {
      name: {type: 'JSXIdentifier', name: 'AccentIcon'},
    })
    .forEach(nodePath => {
      nodePath.value.name = j.jsxIdentifier('ExpressiveIcon');
    });

  return root.toSource();
}
