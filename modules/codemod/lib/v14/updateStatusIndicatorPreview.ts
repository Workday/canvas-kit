import {API, FileInfo, JSXElement, JSXAttribute, Options} from 'jscodeshift';
import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const packages = [
  '@workday/canvas-kit-preview-react',
  '@workday/canvas-kit-preview-react/status-indicator',
];
const packageImports = ['StatusIndicator'];

const variantMap = {
  blue: 'info',
  green: 'positive',
  orange: 'caution',
  red: 'critical',
  gray: 'neutral',
};

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, packages, packageImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-preview-react');

  // Find all <StatusIndicator> components
  const components = root.find(
    j.JSXElement,
    (value: JSXElement) =>
      value.openingElement.name.type === 'JSXIdentifier' &&
      (value.openingElement.name.name === importMap.StatusIndicator ||
        value.openingElement.name.name === styledMap.StatusIndicator)
  );

  // Update the `variant` prop to the new value
  components.forEach(component => {
    const variantProp = component.value.openingElement.attributes?.find(
      attr => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
    ) as JSXAttribute;
    // For string literals like `variant="blue"`
    if (variantProp && variantProp.value && variantProp.value.type === 'StringLiteral') {
      variantProp.value = j.stringLiteral(
        variantMap[variantProp.value.value as keyof typeof variantMap] || variantProp.value.value
      );
    }

    // For object literals like `variant={'blue'}`
    if (
      variantProp &&
      variantProp.value &&
      variantProp.value.type === 'JSXExpressionContainer' &&
      (variantProp.value.expression.type === 'Literal' ||
        variantProp.value.expression.type === 'StringLiteral')
    ) {
      variantProp.value = j.stringLiteral(
        variantMap[variantProp.value.expression.value as keyof typeof variantMap] ||
          String(variantProp.value.expression.value)
      );
    }
  });

  return root.toSource();
}
