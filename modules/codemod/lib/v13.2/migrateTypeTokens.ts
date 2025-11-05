import {Identifier, MemberExpression, Transform} from 'jscodeshift';
import {addMissingImports, filterOutImports, varToMemberExpression} from './utils';
import {typeProps} from './mapping/typeProps';
import {mapping} from './mapping';

type DeclarationType = {[key: string]: any};

const canvasImportSources = ['@workday/canvas-kit-styling', '@workday/canvas-kit-react/tokens'];

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  let importDeclaration: DeclarationType = {};
  const checkImport = (value: any) => Object.keys(importDeclaration).includes(value);

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => canvasImportSources.includes(value)},
    })
    .forEach(nodePath => {
      importDeclaration = {...importDeclaration, ...filterOutImports(nodePath, 'type')};
    });

  if (!Object.values(importDeclaration).includes('type')) {
    return root.toSource();
  }

  root
    .find(j.SpreadElement, {
      argument: {
        type: 'MemberExpression',
        object: {
          type: 'MemberExpression',
          object: {
            type: 'MemberExpression',
            object: {
              name: 'type',
            },
            property: {
              name: 'levels',
            },
          },
        },
      },
    })
    .replaceWith(nodePath => {
      const argument = nodePath.value.argument as MemberExpression;
      const object = argument.object as MemberExpression;
      const level = (object.property as Identifier).name;
      const size = (argument.property as Identifier).name;

      const mapKeys = mapping.type.keys.levels.values;
      const levelKeys = mapKeys[level as keyof typeof mapKeys] || {};
      const tokens = levelKeys[size as keyof typeof levelKeys];

      if (tokens) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
        );

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        const properties = typeProps
          .filter(prop => tokens[prop])
          .map((key: keyof typeof tokens) => {
            const tokenValue = tokens[key];
            if (!tokenValue) {
              return null;
            }
            return j.objectProperty(
              j.identifier(key),
              j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, tokenValue)])
            );
          })
          .filter((prop): prop is NonNullable<typeof prop> => prop !== null);

        // Replace the spread element with individual properties
        return properties;
      }

      return nodePath.value;
    });

  root
    .find(j.MemberExpression, (value: any) => {
      return (
        value.type === 'MemberExpression' &&
        typeProps.includes(value.property.name) &&
        value.object.type === 'MemberExpression' &&
        value.object.object.type === 'MemberExpression' &&
        value.object.object.object.type === 'MemberExpression' &&
        value.object.object.object.object.type === 'Identifier' &&
        checkImport(value.object.object.object.object.name)
      );
    })
    .replaceWith(nodePath => {
      const mainWrapper = nodePath.value.object;
      const property = nodePath.value.property;

      addMissingImports(
        {j, root},
        {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
      );

      if (
        mainWrapper.type === 'MemberExpression' &&
        mainWrapper.object.type === 'MemberExpression' &&
        mainWrapper.object.object.type === 'MemberExpression' &&
        mainWrapper.object.object.object.type === 'Identifier' &&
        checkImport(mainWrapper.object.object.object.name)
      ) {
        const level = (mainWrapper.object.property as Identifier).name;
        const size = (mainWrapper.property as Identifier).name;
        const prop = (property as Identifier).name;

        const {values} = mapping.type.keys.levels;
        const levels = values[level as keyof typeof values];
        const tokens = levels[size as keyof typeof levels];
        const value = tokens[prop as keyof typeof tokens];

        if (value) {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );

          return j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, value)]);
        }
      }

      return nodePath;
    });

  root
    .find(j.MemberExpression, (value: any) => {
      return (
        value.type === 'MemberExpression' &&
        ((value.object.type === 'MemberExpression' &&
          value.object.object.type === 'MemberExpression' &&
          checkImport(value.object.object.object.name)) ||
          checkImport(value.object.name))
      );
    })
    .replaceWith(nodePath => {
      const mainWrapper = nodePath.value.object;

      if (
        mainWrapper.type === 'MemberExpression' &&
        mainWrapper.object.type === 'MemberExpression'
      ) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        const mainProperty = mainWrapper.object.property;
        const innerProperty = mainWrapper.property;
        const lowestProperty = nodePath.value.property;

        if (
          mainProperty.type === 'Identifier' &&
          innerProperty.type === 'Identifier' &&
          (lowestProperty.type === 'Identifier' || lowestProperty.type === 'NumericLiteral')
        ) {
          const lowestPropertyValue =
            lowestProperty.type === 'Identifier' ? lowestProperty.name : lowestProperty.value;

          const innerKey = innerProperty.name as keyof typeof mapping.type.keys;

          if (mainProperty.name === 'properties') {
            const {name, values} = mapping.type.keys[innerKey] || {};

            if (!name || !values) {
              return nodePath.value;
            }

            const newValue: string = values[lowestPropertyValue as keyof typeof values];

            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
            );

            if (newValue.includes('.')) {
              const [first, second] = newValue.split('.');
              return j.callExpression(j.identifier('cssVar'), [
                j.memberExpression(
                  j.memberExpression(
                    j.memberExpression(j.identifier('system'), j.identifier(name)),
                    j.identifier(first)
                  ),
                  j.identifier(second)
                ),
              ]);
            } else {
              return j.callExpression(j.identifier('cssVar'), [
                j.memberExpression(
                  j.memberExpression(j.identifier('system'), j.identifier(name)),
                  j.identifier(newValue)
                ),
              ]);
            }
          } else if (mainProperty.name === 'levels') {
            const {values} = mapping.type.keys.levels;
            const levels = values[innerKey as keyof typeof values];

            const lowestKey = lowestPropertyValue as keyof typeof levels;
            const tokens = levels[lowestKey];

            const props = Object.entries(tokens).map(([key, value]) => {
              addMissingImports(
                {j, root},
                {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
              );

              return j.property(
                'init',
                j.identifier(key),
                j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, value)])
              );
            });

            return j.objectExpression(props);
          }
        }
      }

      return nodePath.value;
    });

  return root.toSource();
};

export default transform;
