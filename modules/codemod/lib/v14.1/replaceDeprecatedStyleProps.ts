import {API, FileInfo, JSXElement, Options} from 'jscodeshift';
import {getImportRenameMap} from './utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';
import {
  backgroundStyleFnConfigs,
  borderStyleFnConfigs,
  colorStyleFnConfigs,
  depthStyleFnConfigs,
  flexStyleFnConfigs,
  flexItemStyleFnConfigs,
  gridStyleFnConfigs,
  gridItemStyleFnConfigs,
  layoutStyleFnConfigs,
  otherStyleFnConfigs,
  positionStyleFnConfigs,
  spaceStyleFnConfigs,
  textStyleFnConfigs,
} from '@workday/canvas-kit-react/layout';
import {getToken} from './utils/getToken';

const mainPackage = '@workday/canvas-kit-react';
const previewPackage = '@workday/canvas-kit-preview-react';
const labsPackage = '@workday/canvas-kit-labs-react';

const packages = [mainPackage, previewPackage, labsPackage];
const allProps = [
  ...backgroundStyleFnConfigs,
  ...borderStyleFnConfigs,
  ...colorStyleFnConfigs,
  ...depthStyleFnConfigs,
  ...flexStyleFnConfigs,
  ...flexItemStyleFnConfigs,
  ...gridStyleFnConfigs,
  ...gridItemStyleFnConfigs,
  ...layoutStyleFnConfigs,
  ...otherStyleFnConfigs,
  ...positionStyleFnConfigs,
  ...spaceStyleFnConfigs,
  ...textStyleFnConfigs,
];

const ignoredProps = {
  Avatar: ['color', 'backgroundColor'],
  Graphic: ['width', 'height'],
  Pill: ['maxWidth'],
  'Pill.Count': ['backgroundColor', 'borderColor'],
  'Breadcrumbs.Item': ['maxWidth'],
  'Breadcrumbs.Link': ['maxWidth'],
  BaseButton: [
    'background',
    'border',
    'boxShadowInner',
    'boxShadowOuter',
    'opacity',
    'borderRadius',
  ],
  ColorSwatch: ['color'],
  AccentIcon: ['color'],
  SVG: ['width', 'height'],
  SystemIcon: ['background', 'color', 'fill'],
  'Menu.Card': ['minWidth', 'maxHeight'],
  'Popup.Card': ['maxHeight'],
  'Skeleton.Header': ['width', 'height', 'backgroundColor'],
  'Skeleton.Shape': ['width', 'height', 'backgroundColor', 'borderRadius'],
  'Skeleton.Text': ['backgroundColor'],
  'InputGroup.InnerStart': [
    'width',
    'height',
    'insetInlineStart',
    'insetInlineEnd',
    'pointerEvents',
  ],
  'InputGroup.InnerEnd': ['width', 'height', 'insetInlineStart', 'insetInlineEnd', 'pointerEvents'],
  TextInput: ['width'],
};

const checkName = (
  name: string,
  {importMap, styledMap}: {importMap: Record<string, string>; styledMap: Record<string, string>}
) => {
  return Object.values(importMap).includes(name) || Object.values(styledMap).includes(name);
};

const getImportedName = (
  name: string,
  {importMap, styledMap}: {importMap: Record<string, string>; styledMap: Record<string, string>}
) => {
  const [importedName] =
    Object.entries(importMap).find(([_, imported]) => imported === name) ||
    Object.entries(styledMap).find(([_, styled]) => styled === name) ||
    [];

  return importedName || name;
};

const getPropConfig = (propName: string) => {
  return allProps.find(prop => prop.name === propName) as (typeof allProps)[number];
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Skip transformation if Expandable is not imported from the target package
  if (!hasImportSpecifiers(api, root, packages, [])) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, packages);

  // console.log('i', importMap);
  // console.log('s', styledMap);

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        ((value.openingElement.name.type === 'JSXIdentifier' &&
          checkName(value.openingElement.name.name, {importMap, styledMap})) ||
          (value.openingElement.name.type === 'JSXMemberExpression' &&
            value.openingElement.name.object.type === 'JSXIdentifier' &&
            checkName(value.openingElement.name.object.name, {importMap, styledMap}))) &&
        !!value.openingElement.attributes?.length
    )
    .forEach(nodePath => {
      const csProp = nodePath.node.openingElement.attributes?.find(
        attr =>
          attr.type === 'JSXAttribute' &&
          attr.name.type === 'JSXIdentifier' &&
          attr.name.name === 'cs'
      );

      const asProp = nodePath.node.openingElement.attributes?.find(
        attr =>
          attr.type === 'JSXAttribute' &&
          attr.name.type === 'JSXIdentifier' &&
          attr.name.name === 'as'
      );

      let csPropValue = {};

      const stringifiedName = (
        nodePath.node.openingElement.name.type === 'JSXMemberExpression' &&
        nodePath.node.openingElement.name.object.type === 'JSXIdentifier' &&
        nodePath.node.openingElement.name.property.type === 'JSXIdentifier'
          ? `${getImportedName(nodePath.node.openingElement.name.object.name, {
              importMap,
              styledMap,
            })}.${nodePath.node.openingElement.name.property.name}`
          : nodePath.node.openingElement.name.type === 'JSXIdentifier' &&
            getImportedName(nodePath.node.openingElement.name.name, {importMap, styledMap})
      ) as keyof typeof ignoredProps;

      nodePath.node.openingElement.attributes = nodePath.node.openingElement.attributes?.filter(
        attr => {
          if (
            attr.type === 'JSXAttribute' &&
            attr.name.type === 'JSXIdentifier' &&
            getPropConfig(attr.name.name)
          ) {
            if (
              ignoredProps[stringifiedName]?.includes(attr.name.name as string) ||
              (asProp &&
                asProp.type === 'JSXAttribute' &&
                asProp.value &&
                ((asProp.value.type === 'JSXExpressionContainer' &&
                  asProp.value.expression.type === 'Identifier' &&
                  ignoredProps[
                    getImportedName(asProp.value.expression.name, {
                      importMap,
                      styledMap,
                    }) as keyof typeof ignoredProps
                  ]?.includes(attr.name.name)) ||
                  (asProp.value.type === 'JSXExpressionContainer' &&
                    asProp.value.expression.type === 'MemberExpression' &&
                    asProp.value.expression.object.type === 'Identifier' &&
                    asProp.value.expression.property.type === 'Identifier' &&
                    ignoredProps[
                      `${getImportedName(asProp.value.expression.object.name, {
                        importMap,
                        styledMap,
                      })}.${asProp.value.expression.property.name}` as keyof typeof ignoredProps
                    ]?.includes(attr.name.name))))
            ) {
              return true;
            }

            const {properties, system} = getPropConfig(attr.name.name);

            if (
              csProp &&
              csProp.type === 'JSXAttribute' &&
              csProp.value &&
              csProp.value.type === 'JSXExpressionContainer' &&
              csProp.value.expression.type === 'ObjectExpression'
            ) {
              csProp.value.expression.properties.push(
                ...properties.map((prop: string) =>
                  j.objectProperty(
                    j.identifier(prop),
                    getToken({j, root}, {system, prop, value: attr.value as any})
                  )
                )
              );
            }

            if (!csProp && nodePath.node.openingElement.attributes) {
              const value =
                attr.value?.type === 'JSXExpressionContainer' ? attr.value.expression : attr.value;

              csPropValue = {
                ...csPropValue,
                ...properties.reduce((acc, prop) => {
                  return {
                    ...acc,
                    [prop]: getToken({j, root}, {system, prop, value}),
                  };
                }, {}),
              };
            }

            return false;
          }

          return true;
        }
      );
      if (Object.keys(csPropValue).length) {
        nodePath.node.openingElement.attributes?.push(
          j.jsxAttribute(
            j.jsxIdentifier('cs'),
            j.jsxExpressionContainer(
              j.objectExpression(
                Object.entries(csPropValue).map(([key, value]) =>
                  j.objectProperty(j.identifier(key), value as any)
                )
              )
            )
          )
        );
      }
    });

  return root.toSource();
}
