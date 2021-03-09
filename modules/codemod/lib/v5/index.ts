import {
  API,
  FileInfo,
  ImportDefaultSpecifier,
  ImportNamespaceSpecifier,
  ImportSpecifier,
  JSCodeshift,
} from 'jscodeshift';
import {bundleExportMap, sourceMap} from './maps';

type ImportReplacements = {
  [source: string]: {
    default?: ImportDefaultSpecifier; // import x
    namedImports?: ImportSpecifier[]; // import { x }
    namespace?: ImportNamespaceSpecifier; // import * as x
  };
};

/**
 * Adds a default import specifier with the same name to the `newImports`
 * object under the correct new source package.
 *
 * e.g. `import canvas from '@workday/canvas-kit-react'` > `import canvas from '@workday/canvas-kit-react/core'`
 *
 * @param specifier The specifier object for the default import
 * @param source The source string to reference so we can get the new source package
 * @param newImports
 */
const addMappedDefaultSpecifier = (
  specifier: ImportDefaultSpecifier,
  source: string,
  newImports: ImportReplacements,
  j: JSCodeshift
) => {
  const specifierName = specifier.local?.name;

  if (!specifierName) {
    return;
  }

  // We oddly made type the default export from the labs core module. This converts it to a named import.
  if (specifierName === 'type' && source === '@workday/canvas-kit-labs-react-core') {
    addMappedSpecifier(j.importSpecifier(j.identifier(specifierName)), source, newImports);
    return;
  }

  const mappedSource = bundleExportMap[specifierName];

  newImports[mappedSource] = {
    ...newImports[mappedSource],
    default: specifier,
  };
};

/**
 * Adds a namespaced import specifier with the same name to the `newImports`
 * object under the correct new source package.
 *
 * e.g. `import * as Button from '@workday/canvas-kit-react-button'` > `import * as Button from '@workday/canvas-kit-react/button'`
 *
 * @param specifier The specifier object for the default import
 * @param source The source string to reference so we can get the new source package
 * @param newImports
 */
const addMappedNamespaceSpecifier = (
  specifier: ImportNamespaceSpecifier,
  source: string,
  newImports: ImportReplacements
) => {
  const specifierName = specifier.local?.name;

  if (!specifierName) {
    return;
  }

  // TODO: ADD HANDLING FOR @workday/canvas-kit-react source. Need to split imports
  if (source === '@workday/canvas-kit-react') {
    console.error(
      `Failed to split namespace import \`import * as ${specifierName} from ${source}\``
    );
    return;
  }

  const mappedSource = sourceMap[source];
  newImports[mappedSource] = {
    ...newImports[mappedSource],
    namespace: specifier,
  };
};

/**
 * Adds a named import specifier with the same name to the `newImports`
 * object under the correct new source package.
 *
 * e.g. `import { ErrorType } from '@workday/canvas-kit-react'` > `import { ErrorType } from '@workday/canvas-kit-react/common'`
 *
 * @param specifier The specifier object for the default import
 * @param source The source string to reference so we can get the new source package
 * @param newImports
 */
const addMappedSpecifier = (
  specifier: ImportSpecifier,
  source: string,
  newImports: ImportReplacements
) => {
  const specifierName = specifier.imported.name;

  // If the import is coming from the bundle import, use the bundle export map
  // to get the correct new source. Otherwise, use the mapped source name.
  const newSource =
    source === '@workday/canvas-kit-react' ? bundleExportMap[specifierName] : sourceMap[source];

  // Create new array of import specifiers for new import if not defined, otherwise push new import
  if (!newImports[newSource] || !newImports[newSource].namedImports) {
    newImports[newSource] = {
      ...newImports[newSource],
      namedImports: [],
    };
  }
  newImports[newSource].namedImports?.push(specifier);
};

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration)
    .forEach(_import => {
      // Move on if source isn't a canvas kit package
      if (
        typeof _import.value.source.value !== 'string' ||
        (_import.value.source.value !== '@workday/canvas-kit-react' &&
          !Object.keys(sourceMap).includes(_import.value.source.value))
      ) {
        return;
      }

      const source = _import.value.source.value;
      const newImports: ImportReplacements = {};

      _import.value.specifiers?.forEach(specifier => {
        switch (specifier.type) {
          case 'ImportDefaultSpecifier':
            addMappedDefaultSpecifier(specifier, source, newImports, j);
            break;
          case 'ImportNamespaceSpecifier':
            addMappedNamespaceSpecifier(specifier, source, newImports);
            break;
          case 'ImportSpecifier':
          default:
            addMappedSpecifier(specifier, source, newImports);
            break;
        }
      });

      if (!Object.keys(newImports).length) {
        return;
      }

      j(_import).replaceWith(
        Object.keys(newImports).map(source => {
          const newImportSet: (
            | ImportDefaultSpecifier
            | ImportNamespaceSpecifier
            | ImportSpecifier
          )[] = [];

          const {default: defaultImport, namespace, namedImports} = newImports[source];

          // add `import X` default specifier
          if (defaultImport) {
            newImportSet.push(defaultImport);
          }
          // add `import * as X` namespace specifier
          if (namespace) {
            newImportSet.push(namespace);
          }
          // Add `import { X }` named specifier
          if (namedImports?.length) {
            namedImports?.forEach(specifier => {
              newImportSet.push(specifier);
            });
          }

          // Create new declaration based on set of imports
          // (eg. `import X, { Y } from 'Z'` or `import * as X, { Y } from 'Z'`)
          return j.importDeclaration(newImportSet, j.stringLiteral(source), 'value');
        })
      );
    })
    .toSource();
}
