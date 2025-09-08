import {MemberExpression} from 'jscodeshift';
import {systemColors} from '../mapping';
import {addMissingImports} from './addMissingImports';
import {varToMemberExpression} from './varToMemberExpression';

export const transformObjectPropertyRecursively = (
  {j, root}: any,
  property: any,
  importDeclaration: {[key: string]: any},
  isCanvasKitStyling?: boolean
): any => {
  if (
    property.type === 'ObjectProperty' &&
    property.key.type === 'Identifier' &&
    property.value.type === 'MemberExpression' &&
    property.value.object.type === 'Identifier' &&
    property.value.property.type === 'Identifier' &&
    importDeclaration[property.value.object.name] === 'colors'
  ) {
    const key = property.key.name;
    const tokens = Object.entries(systemColors).find(([blockKey]) =>
      blockKey.split(',').some(prop => prop === key)
    )?.[1];

    const {property: value} = property.value;
    const colorToken = tokens?.[value.name as keyof typeof tokens];

    if (colorToken) {
      if (!isCanvasKitStyling) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
        );
      }

      addMissingImports(
        {j, root},
        {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
      );

      return j.objectProperty(
        j.identifier(key),
        isCanvasKitStyling
          ? varToMemberExpression(j, colorToken)
          : j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, colorToken)])
      );
    }
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'TemplateLiteral') {
    const templateLiteral = property.value;
    const transformedQuasis = templateLiteral.quasis.map((quasi: string) => quasi);
    const transformedExpressions = templateLiteral.expressions.map((expr: MemberExpression) => {
      if (
        expr.type === 'MemberExpression' &&
        expr.object.type === 'Identifier' &&
        expr.property.type === 'Identifier' &&
        importDeclaration[expr.object.name] === 'colors'
      ) {
        const tokens = Object.entries(systemColors).find(([blockKey]) =>
          blockKey.split(',').some(prop => prop === property.key.name)
        )?.[1];

        const colorToken = tokens?.[expr.property.name as keyof typeof tokens];

        if (colorToken) {
          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
          );

          addMissingImports(
            {j, root},
            {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
          );

          return j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, colorToken)]);
        }
      }
      return expr;
    });

    return j.objectProperty(
      property.key,
      j.templateLiteral(transformedQuasis, transformedExpressions)
    );
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'ConditionalExpression') {
    const {test, consequent, alternate} = property.value;

    if (
      consequent.type === 'MemberExpression' &&
      consequent.object.type === 'Identifier' &&
      consequent.property.type === 'Identifier' &&
      importDeclaration[consequent.object.name] === 'colors' &&
      alternate.type === 'MemberExpression' &&
      alternate.object.type === 'Identifier' &&
      alternate.property.type === 'Identifier' &&
      importDeclaration[alternate.object.name] === 'colors'
    ) {
      const consequentTokens = Object.entries(systemColors).find(([blockKey]) =>
        blockKey.split(',').some(prop => prop === property.key.name)
      )?.[1];

      const alternateTokens = Object.entries(systemColors).find(([blockKey]) =>
        blockKey.split(',').some(prop => prop === property.key.name)
      )?.[1];

      const consequentColorToken =
        consequentTokens?.[consequent.property.name as keyof typeof consequentTokens];

      const alternateColorToken =
        alternateTokens?.[alternate.property.name as keyof typeof alternateTokens];

      if (consequentColorToken && alternateColorToken) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
        );

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        return j.objectProperty(
          property.key,
          j.conditionalExpression(
            test,
            j.callExpression(j.identifier('cssVar'), [
              varToMemberExpression(j, consequentColorToken),
            ]),
            j.callExpression(j.identifier('cssVar'), [
              varToMemberExpression(j, alternateColorToken),
            ])
          )
        );
      }
    }
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'ObjectExpression') {
    return j.objectProperty(
      property.key,
      j.objectExpression(
        property.value.properties.map((prop: any) =>
          transformObjectPropertyRecursively({j, root}, prop, importDeclaration, isCanvasKitStyling)
        )
      )
    );
  }

  return property;
};
