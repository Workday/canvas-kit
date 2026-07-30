import {API, FileInfo, Options} from 'jscodeshift';

import deprecatedIcons from '@workday/canvas-system-icons-web/dist/metadata/system.deprecated.metadata.json';

import {getImportRenameMap} from './utils/getImportRenameMap';

const iconPackage = '@workday/canvas-system-icons-web';

const toCamelCase = (str: string) =>
  str
    .split('-')
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');

// `wd-icon-clipboard-user.svg` -> `clipboard-user`
// `academicAppointmentTitleIcon` -> `clipboardUserIcon`
const migrations = deprecatedIcons.reduce(
  (acc, icon) => {
    const oldIcon = toCamelCase(icon.name) + 'Icon';
    // `wd-icon-clipboard-user.svg` -> `clipboardUserIcon`
    const newIcon = icon.fallback
      ? toCamelCase(icon.fallback.replace(/^wd-icon-|\.svg$/g, '')) + 'Icon'
      : oldIcon;

    if (oldIcon !== newIcon) {
      acc[oldIcon] = newIcon;
    }

    return acc;
  },
  {} as Record<string, string>
);

// a fallback can itself be deprecated, so follow the chain until we land on a supported icon
Object.keys(migrations).forEach(oldIcon => {
  const seen = new Set([oldIcon]);

  while (migrations[migrations[oldIcon]] && !seen.has(migrations[oldIcon])) {
    seen.add(migrations[oldIcon]);
    migrations[oldIcon] = migrations[migrations[oldIcon]];
  }
});

export default function transformer(file: FileInfo, api: API, _options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports} = getImportRenameMap(j, root, iconPackage);

  // exit if the icon package isn't imported
  if (!containsCanvasImports) {
    return file.source;
  }

  const namespaceImportNames = new Set<string>();
  // usages reference the local name, so renames are keyed off of it, i.e. `academicIcon` ->
  // `clipboardIcon` when the deprecated icon's fallback is already imported as `clipboardIcon`
  const usageRenameMap: Record<string, string> = {};

  root
    .find(j.ImportDeclaration, {
      source: {
        value: (value: string) => value === iconPackage,
      },
    })
    .forEach(nodePath => {
      if (nodePath.value.specifiers && nodePath.value.specifiers.length) {
        // collect namespace imports, i.e. `import * as systemIcons from ...`, so we can rename the
        // icons accessed off of them later
        nodePath.value.specifiers.forEach(currentSpecifier => {
          if (currentSpecifier.type === 'ImportNamespaceSpecifier' && currentSpecifier.local) {
            namespaceImportNames.add(currentSpecifier.local.name);
          }
        });

        // the local name each imported icon is available under, so we can point usages of a
        // deprecated icon at an existing import of its fallback instead of importing it twice
        const localNamesByImport: Record<string, string> = {};

        nodePath.value.specifiers.forEach(currentSpecifier => {
          if (
            currentSpecifier.type === 'ImportSpecifier' &&
            !migrations[currentSpecifier.imported.name]
          ) {
            localNamesByImport[currentSpecifier.imported.name] =
              currentSpecifier.local?.name || currentSpecifier.imported.name;
          }
        });

        nodePath.value.specifiers = nodePath.value.specifiers.filter(currentSpecifier => {
          if (currentSpecifier.type !== 'ImportSpecifier') {
            return true;
          }

          const renamed = migrations[currentSpecifier.imported.name];

          if (!renamed) {
            return true;
          }

          const localName = currentSpecifier.local?.name || currentSpecifier.imported.name;
          const existingLocalName = localNamesByImport[renamed];

          // the fallback is already imported, so drop this specifier and send its usages to the
          // existing local name
          if (existingLocalName) {
            if (existingLocalName !== localName) {
              usageRenameMap[localName] = existingLocalName;
            }

            return false;
          }

          // if imported with an alias, retain the alias as the local so usages don't have to change
          const alias =
            localName !== currentSpecifier.imported.name ? currentSpecifier.local : null;

          if (!alias) {
            usageRenameMap[localName] = renamed;
          }

          localNamesByImport[renamed] = alias ? localName : renamed;
          currentSpecifier.imported = j.identifier(renamed);
          currentSpecifier.local = alias || j.identifier(renamed);

          return true;
        });
      }
    });

  // rename usages of icons imported by name
  root
    .find(j.Identifier, {name: (name: string) => name in usageRenameMap})
    .replaceWith(nodePath => j.identifier(usageRenameMap[nodePath.value.name]));

  // rename usages of icons accessed off a namespace import, i.e. `systemIcons.academicAppointmentTitleIcon`
  root
    .find(j.MemberExpression, {
      computed: false,
      object: {type: 'Identifier'},
      property: {type: 'Identifier'},
    })
    .replaceWith(nodePath => {
      const {object, property} = nodePath.value;

      if (
        object.type === 'Identifier' &&
        property.type === 'Identifier' &&
        namespaceImportNames.has(object.name) &&
        migrations[property.name]
      ) {
        return j.memberExpression(object, j.identifier(migrations[property.name]), false);
      }

      return nodePath.value;
    });

  return root.toSource({objectCurlySpacing: false});
}
