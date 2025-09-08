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
      importDeclaration = {...importDeclaration, ...filterOutImports(nodePath)};
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

      addMissingImports(
        {j, root},
        {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
      );

      addMissingImports(
        {j, root},
        {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
      );

      nodePath.insertAfter(
        j.objectProperty(
          j.identifier('color'),
          j.callExpression(j.identifier('cssVar'), [
            j.memberExpression(
              j.memberExpression(
                j.memberExpression(j.identifier('system'), j.identifier('color')),
                j.identifier('fg')
              ),
              j.identifier(['heading', 'title'].includes(level) ? 'strong' : 'default')
            ),
          ])
        )
      );

      return [
        j.spreadElement(
          j.memberExpression(
            j.memberExpression(
              j.memberExpression(j.identifier('system'), j.identifier('type')),
              j.identifier(level)
            ),
            j.identifier(size)
          )
        ),
      ];
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
            const {name, values} = mapping.type.keys[innerKey];

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

      return nodePath;
    });

  return root.toSource();
};

export default transform;
