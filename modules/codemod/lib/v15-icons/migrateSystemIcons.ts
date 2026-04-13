import {API, FileInfo} from 'jscodeshift';

import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';
import {systemIconMigration} from './utils/migration';

const compareIconNames = (camelCase: string, snakeCase: string) => {
  return (
    camelCase.replace(/Icon$/g, '').toLowerCase() === snakeCase.replace(/-/g, '').toLowerCase()
  );
};

const toCamelCase = (snakeCase: string) => {
  return (
    snakeCase
      .split('-')
      .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
      .join('') + 'Icon'
  );
};

const packages = ['@workday/canvas-system-icons-web'];

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, packages, [])) {
    return file.source;
  }

  const {importMap} = getImportRenameMap(j, root, '@workday/canvas-system-icons-web');
  const namespaceImportNames = new Set<string>();

  root
    .find(j.ImportDeclaration, {
      source: {
        value: '@workday/canvas-system-icons-web',
      },
    })
    .forEach(nodePath => {
      nodePath.value.specifiers?.forEach(specifier => {
        if (
          specifier.type === 'ImportNamespaceSpecifier' &&
          specifier.local?.type === 'Identifier'
        ) {
          namespaceImportNames.add(specifier.local.name);
        }
      });
      nodePath.value.specifiers = nodePath.value.specifiers?.map(specifier => {
        if (specifier.type === 'ImportSpecifier') {
          const migration = systemIconMigration.find(migration =>
            compareIconNames(specifier.imported.name, migration.deprecated)
          );

          if (migration) {
            const newLocal =
              specifier.local?.name !== specifier.imported.name ? specifier.local : null;
            return j.importSpecifier(j.identifier(toCamelCase(migration.fallback)), newLocal);
          }
        }

        return specifier;
      });
    });

  root
    .find(j.Identifier, {
      name: (name: string) => {
        return !!(name in importMap || Object.values(importMap).includes(name));
      },
    })
    .replaceWith(nodePath => {
      const migration = systemIconMigration.find(migration =>
        compareIconNames(nodePath.value.name, migration.deprecated)
      );

      if (migration) {
        return j.identifier(toCamelCase(migration.fallback));
      }

      return nodePath.value;
    });

  root
    .find(j.MemberExpression, {
      computed: false,
      object: {type: 'Identifier'},
      property: {type: 'Identifier'},
    })
    .filter(path => {
      const {object, property} = path.value;
      if (object.type !== 'Identifier' || property.type !== 'Identifier') {
        return false;
      }
      if (!namespaceImportNames.has(object.name)) {
        return false;
      }
      return !!systemIconMigration.find(migration =>
        compareIconNames(property.name, migration.deprecated)
      );
    })
    .replaceWith(path => {
      const {object, property} = path.value;
      if (property.type === 'Identifier') {
        const migration = systemIconMigration.find(m =>
          compareIconNames(property.name, m.deprecated)
        );
        if (migration) {
          return j.memberExpression(object, j.identifier(toCamelCase(migration.fallback)), false);
        }
      }

      return path.value;
    });

  return root.toSource();
}
