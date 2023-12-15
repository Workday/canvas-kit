import {API, FileInfo, JSXElement, Options} from 'jscodeshift';
import {getImportRenameMap} from '../v7/utils/getImportRenameMap';
import {hasImportSpecifiers} from '../v6/utils';

const mainPackage = '@workday/canvas-kit-react';
const textPackage = '@workday/canvas-kit-react/text';
const componentNames = {
  subtext: 'Subtext',
  body: 'BodyText',
  heading: 'Heading',
  title: 'Title',
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const newImports: string[] = [];
  const j = api.jscodeshift;

  const root = j(file.source);
  const hasCorrectLabelImports = hasImportSpecifiers(api, root, textPackage, ['LabelText']);

  // Failsafe to skip transforms unless a specific import is detected
  if (!hasCorrectLabelImports) {
    return root.toSource();
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, textPackage);

  const textPattern = styledMap.LabelText
    ? `(${importMap.LabelText}|${styledMap.LabelText})`
    : importMap.LabelText;
  const regex = new RegExp(`^${textPattern}$`);

  root
    .find(
      j.JSXElement,
      (value: JSXElement) =>
        value.openingElement.name.type === 'JSXIdentifier' &&
        regex.test(value.openingElement.name.name)
    )
    .forEach(nodePath => {
      const attributes = nodePath.value.openingElement.attributes || [];
      const typeLevelAttr = attributes.find(
        attr => attr.type === 'JSXAttribute' && attr.name.name === 'typeLevel'
      );

      if (typeLevelAttr) {
        const [level, size] = (typeLevelAttr as any).value.value.split('.');
        const newComponentName = componentNames[level as keyof typeof componentNames];

        const newAtrr = [
          ...attributes.filter(
            attr => attr.type === 'JSXAttribute' && attr.name.name !== 'typeLevel'
          ),
          j.jsxAttribute(j.jsxIdentifier('size'), j.stringLiteral(size)),
        ];

        (nodePath.value.openingElement.name as any).name = newComponentName;
        if (nodePath.value.closingElement) {
          (nodePath.value.closingElement.name as any).name = newComponentName;
        }

        nodePath.value.openingElement.attributes = newAtrr;

        if (!newImports.includes(newComponentName)) {
          newImports.push(newComponentName);
        }
      }
    });

  const labels = root.find(
    j.JSXElement,
    (value: JSXElement) =>
      value.openingElement.name.type === 'JSXIdentifier' &&
      regex.test(value.openingElement.name.name)
  );

  root
    .find(j.ImportDeclaration, {
      source: {value: (value: string) => value === mainPackage || value === textPackage},
    })
    .forEach(nodePath => {
      if (newImports.length) {
        const specifiers = nodePath.value.specifiers || [];

        const cleanedSpecifiers = specifiers?.filter(
          s => labels.length && s.type === 'ImportSpecifier' && s.imported.name === 'LabelText'
        );

        const newSpecifiers = newImports
          .filter(i => !Object.keys(importMap).includes(i))
          .map(i => j.importSpecifier(j.identifier(i)));

        nodePath.value.specifiers = [...cleanedSpecifiers, ...newSpecifiers];
      }
    });

  return root.toSource();
}
