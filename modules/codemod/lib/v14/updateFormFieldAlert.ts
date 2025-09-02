import {API, FileInfo, JSXElement, JSXAttribute, Options} from 'jscodeshift';
import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const packages = ['@workday/canvas-kit-preview-react', '@workday/canvas-kit-react/form-field'];
const packageImports = ['FormField'];

export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // exit if the named imports aren't found
  if (!hasImportSpecifiers(api, root, packages, packageImports)) {
    return file.source;
  }

  // getImportRenameMap utility will tell us if the file containsCanvasImports
  // and give us an importMap to track what identifiers we need to update
  const {importMap, styledMap} = getImportRenameMap(j, root, '@workday/canvas-kit-react');

  // Find all <FormField> components
  const components = root.find(
    j.JSXElement,
    (value: JSXElement) =>
      value.openingElement.name.type === 'JSXIdentifier' &&
      (value.openingElement.name.name === importMap.FormField ||
        value.openingElement.name.name === styledMap.FormField)
  );

  // Update the `error` prop to the new value
  components.forEach(component => {
    const errorProp = component.value.openingElement.attributes?.find(
      attr => attr.type === 'JSXAttribute' && attr.name.name === 'error'
    ) as JSXAttribute;

    // For string literals like `error="alert"`
    if (errorProp && errorProp.value && errorProp.value.type === 'StringLiteral') {
      errorProp.value = j.stringLiteral('caution');
    }

    if (
      errorProp &&
      errorProp.value &&
      errorProp.value.type === 'JSXExpressionContainer' &&
      (errorProp.value.expression.type === 'Literal' ||
        errorProp.value.expression.type === 'StringLiteral')
    ) {
      errorProp.value = j.stringLiteral('caution');
    }

    if (
      errorProp &&
      errorProp.value &&
      errorProp.value.type === 'JSXExpressionContainer' &&
      errorProp.value.expression.type === 'ConditionalExpression'
    ) {
      errorProp.value = j.jsxExpressionContainer(
        j.conditionalExpression(
          errorProp.value.expression.test,
          j.stringLiteral('error'),
          j.stringLiteral('caution')
        )
      );
    }
  });

  return root.toSource();
}
