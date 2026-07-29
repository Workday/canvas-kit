import {API, FileInfo, JSXAttribute, JSXElement, Options} from 'jscodeshift';

import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const packages = ['@workday/canvas-kit-react', '@workday/canvas-kit-react/side-panel'];
const packageImports = ['SidePanel'];

function getVariantValue(attr: JSXAttribute): string | null {
  if (!attr.value) {
    return null;
  }

  if (attr.value.type === 'StringLiteral') {
    return attr.value.value;
  }

  if (
    attr.value.type === 'JSXExpressionContainer' &&
    (attr.value.expression.type === 'Literal' || attr.value.expression.type === 'StringLiteral')
  ) {
    return String(attr.value.expression.value);
  }

  return null;
}

export default function transformer(file: FileInfo, api: API, _options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, packages, packageImports)) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  const componentNames = new Set([importMap.SidePanel, styledMap.SidePanel].filter(Boolean));

  const components = root.find(
    j.JSXElement,
    (value: JSXElement) =>
      value.openingElement.name.type === 'JSXIdentifier' &&
      componentNames.has(value.openingElement.name.name)
  );

  components.forEach(component => {
    const attributes = component.value.openingElement.attributes;
    if (!attributes) {
      return;
    }

    const variantProp = attributes.find(
      attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
    ) as JSXAttribute | undefined;
    if (!variantProp) {
      return;
    }

    const variantValue = getVariantValue(variantProp);
    if (variantValue !== 'alternate') {
      return;
    }

    variantProp.value = j.stringLiteral('modal');
  });

  return root.toSource();
}
