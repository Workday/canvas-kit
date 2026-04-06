import {Transform} from 'jscodeshift';
import {addMissingImports, filterOutImports, getImports} from './utils';

type DeclarationType = {[key: string]: any};

const canvasImportSources = [
  '@workday/canvas-kit-styling',
  '@workday/canvas-kit-react/tokens',
  '@workday/canvas-depth-web',
];

const depthValues = ['0', '1', '2', '3', '4', '5', '6'];

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
      importDeclaration = {...importDeclaration, ...getImports(nodePath)};
    });

  if (!Object.values(importDeclaration).includes('depth')) {
    return root.toSource();
  }

  root
    .find(j.SpreadElement, {
      argument: {
        type: 'MemberExpression',
        object: {
          type: 'Identifier',
          name: (name: string) => importDeclaration[name] === 'depth',
        },
        property: {
          type: (type: string) => type === 'NumericLiteral' || type === 'StringLiteral',
          value: (value: any) => ['0', '1', '2', '3', '4', '5', '6'].includes(`${value}`),
        },
      },
    })
    .replaceWith(nodePath => {
      const argument = nodePath.value.argument;

      if (
        argument.type === 'MemberExpression' &&
        (argument.property.type === 'NumericLiteral' || argument.property.type === 'StringLiteral')
      ) {
        const depthValue = argument.property.value;
        const isDepthNotZero = `${depthValue}` !== '0';

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        if (isDepthNotZero) {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );
        }

        return j.objectProperty(
          j.identifier('boxShadow'),
          isDepthNotZero
            ? j.callExpression(j.identifier('cssVar'), [
                j.memberExpression(
                  j.memberExpression(j.identifier('system'), j.identifier('depth')),
                  j.numericLiteral(parseInt(`${depthValue}`, 10)),
                  true
                ),
              ])
            : j.literal('none')
        );
      }

      return nodePath.value;
    });

  root
    .find(j.MemberExpression, (value: any) => {
      return (
        value.type === 'MemberExpression' &&
        value.property.name === 'boxShadow' &&
        checkImport(value.object.object.name)
      );
    })
    .replaceWith(nodePath => {
      if (
        nodePath.value.object.type === 'MemberExpression' &&
        nodePath.value.object.object.type === 'Identifier' &&
        (nodePath.value.object.property.type === 'NumericLiteral' ||
          (nodePath.value.object.property.type === 'StringLiteral' &&
            depthValues.includes(nodePath.value.object.property.value)))
      ) {
        const value = nodePath.value.object.property.value;
        const isNotZero = `${value}` !== '0';

        if (isNotZero) {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );

          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
          );
        }

        return !isNotZero
          ? j.literal('none')
          : j.callExpression(j.identifier('cssVar'), [
              j.memberExpression(
                j.memberExpression(j.identifier('system'), j.identifier('depth')),
                j.numericLiteral(parseInt(`${value}`, 10)),
                true
              ),
            ]);
      }

      return nodePath.value;
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

      if (mainWrapper.type === 'Identifier' && importDeclaration[mainWrapper.name] === 'depth') {
        const lowestProperty = nodePath.value.property;

        if (
          lowestProperty.type === 'NumericLiteral' ||
          (lowestProperty.type === 'StringLiteral' && depthValues.includes(lowestProperty.value))
        ) {
          const isZero = `${lowestProperty.value}` === '0';

          if (!isZero) {
            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
            );

            addMissingImports(
              {j, root},
              {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
            );
          }

          return j.objectExpression([
            j.property(
              'init',
              j.identifier('boxShadow'),
              isZero
                ? j.literal('none')
                : j.callExpression(j.identifier('cssVar'), [
                    j.memberExpression(
                      j.memberExpression(j.identifier('system'), j.identifier('depth')),
                      j.numericLiteral(parseInt(`${lowestProperty.value}`, 10)),
                      true
                    ),
                  ])
            ),
          ]);
        }
      }

      return nodePath.value;
    });

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => canvasImportSources.includes(value)},
    })
    .forEach(nodePath => {
      filterOutImports({root, j}, nodePath, 'depth');
    });

  return root.toSource();
};

export default transform;
