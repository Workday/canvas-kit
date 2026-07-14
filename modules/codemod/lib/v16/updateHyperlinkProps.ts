import {API, FileInfo, JSXAttribute, JSXElement, Options} from 'jscodeshift';

import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const packages = ['@workday/canvas-kit-react', '@workday/canvas-kit-react/button'];
const packageImports = ['Hyperlink', 'ExternalHyperlink'];

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

function hasTypeStandalone(attributes: JSXElement['openingElement']['attributes']): boolean {
  return Boolean(
    attributes?.some(attr => {
      if (attr.type !== 'JSXAttribute' || attr.name.name !== 'type') {
        return false;
      }
      return getVariantValue(attr) === 'standalone';
    })
  );
}

export default function transformer(file: FileInfo, api: API, _options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  if (!hasImportSpecifiers(api, root, packages, packageImports)) {
    return file.source;
  }

  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  const componentNames = new Set(
    [
      importMap.Hyperlink,
      styledMap.Hyperlink,
      importMap.ExternalHyperlink,
      styledMap.ExternalHyperlink,
    ].filter(Boolean)
  );

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

    const variantPropIndex = attributes.findIndex(
      attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
    );
    if (variantPropIndex === -1) {
      return;
    }

    const variantProp = attributes[variantPropIndex] as JSXAttribute;
    const variantValue = getVariantValue(variantProp);
    if (!variantValue) {
      return;
    }

    const ensureTypeStandalone = () => {
      if (!hasTypeStandalone(attributes)) {
        attributes.push(j.jsxAttribute(j.jsxIdentifier('type'), j.stringLiteral('standalone')));
      }
    };

    if (variantValue === 'standalone') {
      attributes.splice(variantPropIndex, 1);
      ensureTypeStandalone();
      return;
    }

    if (variantValue === 'standaloneInverse') {
      variantProp.value = j.stringLiteral('inverse');
      ensureTypeStandalone();
    }
  });

  return root.toSource();
}
