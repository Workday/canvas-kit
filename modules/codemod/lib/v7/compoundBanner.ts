import {
  API,
  FileInfo,
  Options,
  JSXElement,
  JSXAttribute,
  JSXSpreadAttribute,
  JSXMemberExpression,
  jsxAttribute,
  JSXExpressionContainer,
  MemberExpression,
  Identifier,
  ConditionalExpression,
  BooleanLiteral,
} from 'jscodeshift';

import {getImportRenameMap} from './utils/getImportRenameMap';

function filterDefined<T>(input: any): input is T {
  return !!input;
}

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const {containsCanvasImports, importMap, styledMap} = getImportRenameMap(
    j,
    root,
    '@workday/canvas-kit-react/banner'
  );

  if (!containsCanvasImports) {
    return file.source;
  }

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        (value.openingElement.name.name === importMap.Banner ||
          value.openingElement.name.name === styledMap.Banner)
    )
    .forEach(nodePath => {
      // bail early if we find a `Banner.Label` as a child
      for (const child of nodePath.value.children || []) {
        if (
          child.type === 'JSXElement' &&
          child.openingElement.name.type === 'JSXMemberExpression' &&
          child.openingElement.name.object.type === 'JSXIdentifier' &&
          child.openingElement.name.object.name === 'Banner' &&
          child.openingElement.name.property.type === 'JSXIdentifier' &&
          child.openingElement.name.property.name === 'Label'
        ) {
          return;
        }
      }

      const findAttribute = (name: string) => (item: JSXAttribute | JSXSpreadAttribute) => {
        if (
          item.type === 'JSXAttribute' &&
          item.name.type === 'JSXIdentifier' &&
          item.name.name === name
        ) {
          return true;
        }
        return false;
      };
      const attributes = nodePath.value.openingElement.attributes;

      if (attributes) {
        const label = attributes.find(findAttribute('label')) as JSXAttribute | undefined;
        const actionText = attributes.find(findAttribute('actionText')) as JSXAttribute | undefined;
        const errorIndex = attributes.findIndex(findAttribute('error'));
        const variantIndex = attributes.findIndex(findAttribute('variant'));

        if (errorIndex >= 0 && nodePath.value.openingElement.attributes?.[errorIndex]) {
          const errorExpression = ((nodePath.value.openingElement.attributes[
            errorIndex
          ] as JSXAttribute).value as JSXExpressionContainer).expression;
          const getNameToBoolean = (name: string) => {
            return name === 'Error' ? j.booleanLiteral(true) : j.booleanLiteral(false);
          };
          const setHasError = (hasErrorValue: BooleanLiteral | ConditionalExpression) => {
            if (nodePath.value.openingElement.attributes) {
              nodePath.value.openingElement.attributes[errorIndex] = j.jsxAttribute(
                j.jsxIdentifier('hasError'),
                j.jsxExpressionContainer(hasErrorValue)
              );
            }
          };
          if ((errorExpression as MemberExpression).property) {
            const previousExpression = errorExpression as MemberExpression;
            const newValue = getNameToBoolean((previousExpression.property as Identifier).name);
            setHasError(newValue);
          }
          if ((errorExpression as ConditionalExpression).test) {
            const previousExpression = errorExpression as ConditionalExpression;
            const newValue = j.conditionalExpression(
              previousExpression.test,
              getNameToBoolean(
                ((previousExpression.consequent as MemberExpression).property as Identifier).name
              ),
              getNameToBoolean(
                ((previousExpression.alternate as MemberExpression).property as Identifier).name
              )
            );
            setHasError(newValue);
          }
        }

        if (variantIndex >= 0 && nodePath.value.openingElement.attributes?.[variantIndex]) {
          const stickyExpression = ((nodePath.value.openingElement.attributes[
            variantIndex
          ] as JSXAttribute).value as JSXExpressionContainer).expression;
          const getNameToBoolean = (name: string) => {
            return name === 'Sticky' ? j.booleanLiteral(true) : j.booleanLiteral(false);
          };
          const setIsSticky = (hasStickyValue: BooleanLiteral | ConditionalExpression) => {
            if (nodePath.value.openingElement.attributes) {
              nodePath.value.openingElement.attributes[variantIndex] = j.jsxAttribute(
                j.jsxIdentifier('isSticky'),
                j.jsxExpressionContainer(hasStickyValue)
              );
            }
          };
          if ((stickyExpression as MemberExpression).property) {
            const previousExpression = stickyExpression as MemberExpression;
            const newValue = getNameToBoolean((previousExpression.property as Identifier).name);
            setIsSticky(newValue);
          }

          if ((stickyExpression as ConditionalExpression).test) {
            const previousExpression = stickyExpression as ConditionalExpression;
            const newValue = j.conditionalExpression(
              previousExpression.test,
              getNameToBoolean(
                ((previousExpression.consequent as MemberExpression).property as Identifier).name
              ),
              getNameToBoolean(
                ((previousExpression.alternate as MemberExpression).property as Identifier).name
              )
            );
            setIsSticky(newValue);
          }
        }

        // remove these attributes from the list - we'll add them as sub components
        nodePath.value.openingElement.attributes = attributes.filter(item => {
          if (
            item.type === 'JSXAttribute' &&
            item.name.type === 'JSXIdentifier' &&
            ['label', 'actionText'].includes(item.name.name)
          ) {
            return false;
          }
          return true;
        });

        const BannerIconJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Banner),
          j.jsxIdentifier('Icon')
        );

        const BannerLabelJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Banner),
          j.jsxIdentifier('Label')
        );

        const BannerActionTextJSX = j.jsxMemberExpression(
          j.jsxIdentifier(importMap.Banner),
          j.jsxIdentifier('ActionText')
        );

        const convertAttributeToChildren = (input: JSXAttribute) => {
          switch (input.value?.type) {
            case 'JSXExpressionContainer':
              // unwrap JSXElements
              if (input.value.expression.type === 'JSXElement') {
                return [input.value.expression];
              }
              return [input.value];
            default:
              return [input.value!];
          }
        };

        const createSelfClosingTag = (Tag: JSXMemberExpression) => {
          const OpeningTag = j.jsxOpeningElement(Tag);
          OpeningTag.selfClosing = true;
          return j.jsxElement(OpeningTag);
        };

        nodePath.value.openingElement.selfClosing = false;

        // Add subcomponents back as children
        nodePath.value.children = [
          createSelfClosingTag(BannerIconJSX),
          !!label
            ? j.jsxElement(
                j.jsxOpeningElement(BannerLabelJSX),
                j.jsxClosingElement(BannerLabelJSX),
                convertAttributeToChildren(label)
              )
            : createSelfClosingTag(BannerLabelJSX),
          !!actionText
            ? j.jsxElement(
                j.jsxOpeningElement(BannerActionTextJSX),
                j.jsxClosingElement(BannerActionTextJSX),
                convertAttributeToChildren(actionText)
              )
            : createSelfClosingTag(BannerActionTextJSX),
        ].filter<JSXElement>(filterDefined);

        nodePath.value.closingElement = j.jsxClosingElement(nodePath.value.openingElement.name);
      }
    });

  return root.toSource();
}
