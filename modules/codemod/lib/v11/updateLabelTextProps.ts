import {
  API,
  FileInfo,
  JSXElement,
  JSXIdentifier,
  JSXAttribute,
  Options,
  JSXExpressionContainer,
} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const mainPackage = '@workday/canvas-kit-react';
const textPackage = '@workday/canvas-kit-react/text';

export default function transformer(file: FileInfo, api: API, _: Options) {
  let newImports: string;
  const j = api.jscodeshift;

  const root = j(file.source);
  const hasCorrectLabelImports = hasImportSpecifiers(api, root, textPackage, ['LabelText']);

  // Failsafe to skip transforms unless a specific import is detected
  if (!hasCorrectLabelImports) {
    return root.toSource();
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, textPackage);

  // pattern to check matching imported or styled name
  const textPattern = styledMap.LabelText
    ? `(${importMap.LabelText}|${styledMap.LabelText})`
    : importMap.LabelText;
  const regex = new RegExp(`^${textPattern}$`);

  const labels = root.find(
    j.JSXElement,
    (value: JSXElement) =>
      value.openingElement.name.type === 'JSXIdentifier' &&
      regex.test(value.openingElement.name.name) &&
      !!value.openingElement.attributes &&
      value.openingElement.attributes.every(
        attr => attr.type === 'JSXAttribute' && attr.name.name !== 'typeLevel'
      )
  );

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        regex.test(value.openingElement.name.name) &&
        !!value.openingElement.attributes &&
        value.openingElement.attributes.some(
          attr => attr.type === 'JSXAttribute' && attr.name.name === 'typeLevel'
        )
    )
    .forEach(nodePath => {
      let attributes = (nodePath.value.openingElement.attributes || []) as JSXAttribute[];
      const findAttribute = (attributes: JSXAttribute[], name: string): JSXAttribute | undefined =>
        attributes.find(attr => attr.type === 'JSXAttribute' && attr.name.name === name);

      const removeAttribute = (attributes: JSXAttribute[], name: string): JSXAttribute[] =>
        attributes.filter(attr => attr.type === 'JSXAttribute' && attr.name.name !== name);

      // const typeLevelAttr = findAttribute(attributes, 'typeLevel') as JSXAttribute;
      const asAttr = findAttribute(attributes, 'as');
      const cursorAttr = findAttribute(attributes, 'cursor');
      const variantAttr = findAttribute(attributes, 'variant');
      const disabledAttr = findAttribute(attributes, 'disabled');

      const openingElemName = (nodePath.value.openingElement.name as JSXIdentifier).name;

      const newName = styledMap.LabelText
        ? !labels.length
          ? styledMap.LabelText
          : 'StyledModifiedText'
        : openingElemName !== 'LabelText' && openingElemName === importMap.LabelText
        ? importMap.LabelText
        : 'Text';

      (nodePath.value.openingElement.name as JSXIdentifier).name = newName;
      if (nodePath.value.closingElement) {
        (nodePath.value.closingElement.name as JSXIdentifier).name = newName;
      }

      if (!asAttr) {
        attributes.unshift(j.jsxAttribute(j.jsxIdentifier('as'), j.stringLiteral('label')));
      }

      const filteredWithoutDisabled = removeAttribute(attributes, 'disabled');
      const filtered = removeAttribute(filteredWithoutDisabled, 'cursor');

      attributes = filtered;

      nodePath.value.openingElement.attributes = attributes;

      // const styleAttr = {} as Record<string, string>;

      // console.log(cursorAttr, variantAttr, disabledAttr); //?

      const props = [];
      if (disabledAttr) {
        let colorPropExpression;
        let cursorPropExpression;
        let opacityPropExpression;
        if (
          disabledAttr.value?.type === 'JSXExpressionContainer' &&
          disabledAttr.value.expression.type !== 'BooleanLiteral'
        ) {
          if (variantAttr?.value?.type === 'StringLiteral') {
            if (variantAttr.value.value === 'inverse') {
              opacityPropExpression = j.conditionalExpression(
                (disabledAttr.value as JSXExpressionContainer).expression as any,
                j.stringLiteral('0.4'),
                j.identifier('1')
              );
            }
          } else if (variantAttr) {
            const logical = j.logicalExpression(
              '&&',
              (disabledAttr.value as JSXExpressionContainer).expression as any,
              j.binaryExpression(
                '===',
                (variantAttr.value as JSXExpressionContainer).expression as any,
                j.stringLiteral('inverse')
              )
            );
            opacityPropExpression = j.conditionalExpression(
              logical,
              j.stringLiteral('0.4'),
              j.identifier('1')
            );
          }

          const expression = (disabledAttr.value as JSXExpressionContainer).expression as any;

          if (!variantAttr || variantAttr.value?.type !== 'StringLiteral') {
            const logicValue =
              variantAttr && variantAttr.value?.type !== 'StringLiteral'
                ? j.logicalExpression(
                    '&&',
                    (disabledAttr.value as JSXExpressionContainer).expression as any,
                    j.binaryExpression(
                      '!==',
                      (variantAttr.value as JSXExpressionContainer).expression as any,
                      j.stringLiteral('inverse')
                    )
                  )
                : expression;

            colorPropExpression = j.conditionalExpression(
              logicValue,
              j.stringLiteral('#a1aab3'),
              j.identifier('undefined')
            );
          }

          if (cursorAttr) {
            cursorPropExpression = j.conditionalExpression(
              (disabledAttr.value as JSXExpressionContainer).expression as any,
              j.stringLiteral('default'),
              cursorAttr.value as any
            );
          }
        } else if (
          disabledAttr.value?.type === 'JSXExpressionContainer' &&
          disabledAttr.value?.expression.type === 'BooleanLiteral' &&
          disabledAttr.value.expression.value
        ) {
          colorPropExpression = j.stringLiteral('#a1aab3');
          cursorPropExpression = j.stringLiteral('default');
        }

        if (colorPropExpression) {
          const colorProp = j.property('init', j.identifier('color'), colorPropExpression);
          props.push(colorProp);
        }

        if (cursorPropExpression) {
          const cursorProp = j.property('init', j.identifier('cursor'), cursorPropExpression);
          props.push(cursorProp);
        }

        if (opacityPropExpression) {
          const opacityProp = j.property('init', j.identifier('opacity'), opacityPropExpression);
          props.push(opacityProp);
        }
      }

      if (props.length) {
        const newAttr = j.jsxAttribute(
          j.jsxIdentifier('style'),
          j.jsxExpressionContainer(j.objectExpression(props))
        );
        nodePath.value.openingElement.attributes = [...filtered, newAttr];
      }

      newImports = 'Text';
    });

  root.find(j.VariableDeclaration).forEach(nodePath => {
    if (
      nodePath.value.declarations[0].type === 'VariableDeclarator' &&
      nodePath.value.declarations[0].init?.type === 'CallExpression' &&
      nodePath.value.declarations[0].init.callee.type === 'CallExpression' &&
      nodePath.value.declarations[0].init.callee.arguments[0].type === 'Identifier' &&
      nodePath.value.declarations[0].init.callee.arguments[0].name === 'LabelText'
    ) {
      if (!labels.length) {
        nodePath.value.declarations[0].init.callee.arguments[0].name = 'Text';
      } else {
        nodePath.insertAfter(
          j.variableDeclaration('const', [
            j.variableDeclarator(
              j.identifier('StyledModifiedText'),
              j.callExpression(
                j.callExpression(j.identifier('styled'), [j.identifier('Text')]),
                nodePath.value.declarations[0].init.arguments
              )
            ),
          ])
        );
      }
    }
  });

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value === textPackage || value === mainPackage},
    })
    .forEach(nodePath => {
      if (newImports.length) {
        const specifiers = nodePath.value.specifiers || [];

        // removing LabelText import if there is no more LabelText components
        const cleanedSpecifiers = specifiers?.map(s => {
          if (!labels.length && s.type === 'ImportSpecifier') {
            s.imported.name = 'Text';
          }
          return s;
        });

        if (labels.length) {
          nodePath.value.specifiers?.push(j.importSpecifier(j.identifier('Text')));
        } else {
          nodePath.value.specifiers = cleanedSpecifiers;
        }
      }
    });

  return root.toSource();
}
