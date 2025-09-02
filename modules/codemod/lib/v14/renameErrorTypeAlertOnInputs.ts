import {API, FileInfo, JSXElement, JSXAttribute, Options} from 'jscodeshift';
import {hasImportSpecifiers} from '../v6/utils';
import {getImportRenameMap} from './utils/getImportRenameMap';

const packages = [
  '@workday/canvas-kit-react',
  '@workday/canvas-kit-react/text-input',
  '@workday/canvas-kit-react/switch',
  '@workday/canvas-kit-react/text-area',
];
const packageImports = ['TextInput', 'Switch', 'TextArea'];

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

  // Find all TextInput, Switch, and TextArea components
  const components = root.find(
    j.JSXElement,
    (value: JSXElement) =>
      value.openingElement.name.type === 'JSXIdentifier' &&
      (value.openingElement.name.name === importMap.TextInput ||
        value.openingElement.name.name === styledMap.TextInput ||
        value.openingElement.name.name === importMap.Switch ||
        value.openingElement.name.name === styledMap.Switch ||
        value.openingElement.name.name === importMap.TextArea ||
        value.openingElement.name.name === styledMap.TextArea)
  );

  // Update the `error` prop from ComponentName.ErrorType.Alert to ComponentName.ErrorType.Caution
  components.forEach(component => {
    const errorProp = component.value.openingElement.attributes?.find(
      attr => attr.type === 'JSXAttribute' && attr.name.name === 'error'
    ) as JSXAttribute;

    if (errorProp && errorProp.value && errorProp.value.type === 'JSXExpressionContainer') {
      const expression = errorProp.value.expression;

      // Check if it's a member expression like TextInput.ErrorType.Alert
      if (expression.type === 'MemberExpression') {
        const memberExpr = expression;

        // Check if it matches the pattern ComponentName.ErrorType.Alert
        if (
          memberExpr.object.type === 'MemberExpression' &&
          memberExpr.object.property.type === 'Identifier' &&
          memberExpr.object.property.name === 'ErrorType' &&
          memberExpr.property.type === 'Identifier' &&
          memberExpr.property.name === 'Alert'
        ) {
          // Get the component name (TextInput, Switch, or TextArea)
          const componentIdentifier = memberExpr.object.object;

          if (componentIdentifier.type === 'Identifier') {
            // Verify it's one of our target components
            const componentName = componentIdentifier.name;
            const isTargetComponent =
              componentName === importMap.TextInput ||
              componentName === styledMap.TextInput ||
              componentName === importMap.Switch ||
              componentName === styledMap.Switch ||
              componentName === importMap.TextArea ||
              componentName === styledMap.TextArea;

            if (isTargetComponent) {
              // Create the new member expression: ComponentName.ErrorType.Caution
              const newMemberExpression = j.memberExpression(
                j.memberExpression(j.identifier(componentName), j.identifier('ErrorType')),
                j.identifier('Caution')
              );

              errorProp.value = j.jsxExpressionContainer(newMemberExpression);
            }
          }
        }
      }
    }
  });

  return root.toSource();
}
