import {CallExpression, MemberExpression, Property} from 'jscodeshift';
import {systemColors} from '../../v13.2/mapping';
import {addMissingImports} from '../../v13.2/utils/addMissingImports';
import {varToMemberExpression} from '../../v13.2/utils/varToMemberExpression';
import baseMapping from '../baseMapping';

const checkSystemColors = (property: Property) =>
  Object.entries(systemColors).find(([blockKey]) =>
    blockKey
      .split(',')
      .some(prop => property.key.type === 'Identifier' && prop === property.key.name)
  )?.[1];

const updateArguments = (
  {j, root}: any,
  expr: CallExpression,
  property: Property,
  importDeclaration: any
) => {
  return expr.arguments.map((arg: any) => {
    if (
      arg.type === 'MemberExpression' &&
      arg.object.type === 'Identifier' &&
      arg.property.type === 'Identifier'
    ) {
      const tokens = Object.entries(systemColors).find(([blockKey]) =>
        blockKey
          .split(',')
          .some(prop => property.key.type === 'Identifier' && prop === property.key.name)
      )?.[1];

      const colorToken = tokens?.[arg.property.name as keyof typeof tokens];
      if (
        colorToken &&
        (importDeclaration[arg.object.name] === 'colors' ||
          importDeclaration[arg.object.name] === 'base')
      ) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        return varToMemberExpression(j, colorToken);
      }
    }
    return arg;
  });
};

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
    property.value.property.type === 'Identifier'
  ) {
    const cssProperty = property.key.name;
    const tokens = Object.entries(systemColors).find(([blockKey]) =>
      blockKey.split(',').some(prop => prop === cssProperty)
    )?.[1];

    const {
      property: value,
      object: {name},
    } = property.value;
    const colorToken = tokens?.[value.name as keyof typeof tokens];

    if (colorToken) {
      if (importDeclaration[name] === 'colors') {
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
          j.identifier(cssProperty),
          isCanvasKitStyling
            ? varToMemberExpression(j, colorToken)
            : j.callExpression(j.identifier('cssVar'), [varToMemberExpression(j, colorToken)])
        );
      }

      if (importDeclaration[property.value.object.name] === 'base') {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        return j.objectProperty(j.identifier(cssProperty), varToMemberExpression(j, colorToken));
      }
    } else {
      const baseToken = baseMapping[property.value.property.name as keyof typeof baseMapping];

      if (baseToken) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['base']}
        );

        return j.objectProperty(
          j.identifier(cssProperty),
          j.memberExpression(j.identifier('base'), j.identifier(baseToken))
        );
      }
    }

    return property;
  }

  if (property.value.type === 'CallExpression') {
    property.value.arguments = updateArguments(
      {j, root},
      property.value,
      property,
      importDeclaration
    );
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'TemplateLiteral') {
    const templateLiteral = property.value;
    const transformedQuasis = templateLiteral.quasis.map((quasi: string) => quasi);
    const transformedExpressions = templateLiteral.expressions.map(
      (expr: MemberExpression | CallExpression) => {
        if (
          expr.type === 'MemberExpression' &&
          expr.object.type === 'Identifier' &&
          expr.property.type === 'Identifier'
        ) {
          const tokens = Object.entries(systemColors).find(([blockKey]) =>
            blockKey.split(',').some(prop => prop === property.key.name)
          )?.[1];

          const colorToken = tokens?.[expr.property.name as keyof typeof tokens];

          if (colorToken) {
            if (importDeclaration[expr.object.name] === 'colors') {
              addMissingImports(
                {j, root},
                {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
              );

              addMissingImports(
                {j, root},
                {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
              );

              return j.callExpression(j.identifier('cssVar'), [
                varToMemberExpression(j, colorToken),
              ]);
            }

            if (importDeclaration[expr.object.name] === 'base') {
              addMissingImports(
                {j, root},
                {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
              );
              return j.memberExpression(j.identifier('base'), j.identifier(colorToken));
            }
          }
        }

        if (expr.type === 'CallExpression') {
          expr.arguments = updateArguments({j, root}, expr, property, importDeclaration);
        }

        return expr;
      }
    );

    return j.objectProperty(
      property.key,
      j.templateLiteral(transformedQuasis, transformedExpressions)
    );
  }

  if (property.type === 'ObjectProperty' && property.value.type === 'ConditionalExpression') {
    const {test, consequent, alternate} = property.value;
    const tokens = checkSystemColors(property);

    let consequentNode = consequent;
    let alternateNode = alternate;

    if (
      consequent.type === 'MemberExpression' &&
      consequent.object.type === 'Identifier' &&
      consequent.property.type === 'Identifier'
    ) {
      const consequentColorToken = tokens?.[consequent.property.name as keyof typeof tokens];

      if (consequentColorToken) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
        );

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        consequentNode = j.callExpression(j.identifier('cssVar'), [
          varToMemberExpression(j, consequentColorToken),
        ]);
      }
    }

    if (consequent.type === 'CallExpression') {
      consequent.arguments = updateArguments({j, root}, consequent, property, importDeclaration);
    }

    if (
      alternate.type === 'MemberExpression' &&
      alternate.object.type === 'Identifier' &&
      alternate.property.type === 'Identifier'
    ) {
      const alternateColorToken = tokens?.[alternate.property.name as keyof typeof tokens];

      if (alternateColorToken) {
        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-kit-styling', specifiers: ['cssVar']}
        );

        addMissingImports(
          {j, root},
          {importPath: '@workday/canvas-tokens-web', specifiers: ['system']}
        );

        alternateNode = j.callExpression(j.identifier('cssVar'), [
          varToMemberExpression(j, alternateColorToken),
        ]);
      }
    }

    if (alternate.type === 'CallExpression') {
      alternate.arguments = updateArguments({j, root}, alternate, property, importDeclaration);
    }

    return j.objectProperty(
      property.key,
      j.conditionalExpression(test, consequentNode, alternateNode)
    );
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
