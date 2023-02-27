import ts from 'typescript';
import {
  EnhancedComponentValue,
  CanvasColorValue,
  ElemPropsHookValue,
  ComposedElemPropsHookValue,
  SubModelElemPropsHookValue,
} from './customTypes';

import {
  createParserPlugin,
  defaultJSDoc,
  DocParser,
  findDocComment,
  getDefaultsFromObjectBindingParameter,
  getPackageName,
  getSymbolFromNode,
  getValueDeclaration,
  unknownValue,
  filterObjectProperties,
  getDefaultFromTags,
  getValidDefaultFromNode,
} from '../docParser';
import {
  CallExpression,
  FunctionParameter,
  FunctionValue,
  ObjectProperty,
  SymbolValue,
  Value,
} from '../docTypes';
import t from '../traverse';

/** Track if we've set a custom color symbol yet */
let shouldCreateColorSymbol = true;

function dashCase(value: string): string {
  return value
    .replace(/^([A-Z])/, (s, l) => l.toLowerCase())
    .replace(/([A-Z])/g, (s, l) => `-${l.toLowerCase()}`);
}

function isElemPropsJSXElement(node: ts.JsxSelfClosingElement | ts.JsxOpeningElement) {
  return (
    t.isJsxAttributes(node.attributes) &&
    node.attributes.properties.some(
      at =>
        t.isJsxSpreadAttribute(at) &&
        t.isIdentifier(at.expression) &&
        at.expression.text === 'elemProps'
    )
  );
}

function getDefaultFromJSX(
  parser: DocParser<SupportedValues>,
  node: ts.Node,
  propName: string
): SupportedValues | Value | undefined {
  const JSXElement = [
    ...t(node).find('JsxSelfClosingElement'),
    ...t(node).find('JsxOpeningElement'),
  ].find(isElemPropsJSXElement);

  if (JSXElement) {
    for (const attribute of JSXElement.attributes.properties) {
      /**
       * A JSXAttribute is the attribute and initializer
       *
       * ```tsx
       * <Element attribute={attribute} />
       * ```
       *
       * In this example `attribute={attribute}` is the JSXAttribute
       */
      if (
        t.isJsxAttribute(attribute) &&
        t.isIdentifier(attribute.name) &&
        attribute.name.text === propName
      ) {
        /**
         * We're filtering on JSXAttributes that have an `initializer` that is a JSXExpression.
         * From the above example, the JSXExpression is `{attribute}`. It will either be a string
         * with quotes, or has brackets.
         * - `"attribute"`
         * - `{attribute}`
         */
        if (
          attribute.initializer &&
          t.isJsxExpression(attribute.initializer) &&
          attribute.initializer.expression
        ) {
          /**
           * If we detect a self-referential prop, we'll ignore it. It isn't really a default
           *
           * ```tsx
           * <Element attribute={attribute} />
           * ```
           */
          if (
            t.isIdentifier(attribute.initializer.expression) &&
            attribute.initializer.expression.text === propName
          ) {
            return undefined;
          }
          /**
           * A JsxExpression is brackets around the attribute.
           *
           * ```tsx
           * // attribute.initializer is a regular node
           * <Element attribute="default" />
           * // attribute.initializer is a JsxExpression
           * <Element attribute={'default'} />
           * ```
           */
          return getValidDefaultFromNode(parser, attribute.initializer.expression);
        }
        return getValidDefaultFromNode(parser, attribute.initializer || ts.factory.createTrue());
      }
    }
  }
  return undefined;
}

function getBaseElement(
  parser: DocParser<SupportedValues>,
  /**
   * expression is `'button'` in the following example:
   * ```ts
   * export const MyComponent = createComponent('button')({...})
   * ```
   */
  expression: ts.Expression
): Value | undefined {
  if (expression && t.isStringLiteral(expression)) {
    return {
      kind: 'external',
      name: expression.text,
      url: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${expression.text}`,
    };
  } else if (expression && t.isIdentifier(expression)) {
    return {kind: 'symbol', name: expression.text};
  }

  return undefined;
}

type SupportedValues =
  | EnhancedComponentValue
  | CanvasColorValue
  | ElemPropsHookValue
  | ComposedElemPropsHookValue
  | SubModelElemPropsHookValue;

export const enhancedComponentParser = createParserPlugin<SupportedValues>((node, parser) => {
  /**
   * Filter out props from `@types/react`
   */
  if (t.isPropertySignature(node)) {
    const symbol = getSymbolFromNode(parser.checker, node);
    const declaration = getValueDeclaration(symbol);
    if (declaration && declaration.getSourceFile().fileName.includes('@types/react')) {
      return {kind: 'unknown', value: 'unknown', text: 'empty'};
    }
  }

  /**
   * Find all occurrences of `SystemPropValues['color']` and rewrite to a custom color symbol
   */
  if (
    t.isIndexedAccessType(node) &&
    t.isTypeReference(node.objectType) &&
    t.isIdentifier(node.objectType.typeName) &&
    node.objectType.typeName.text === 'SystemPropValues' &&
    t.isLiteralType(node.indexType) &&
    t.isStringLiteral(node.indexType.literal) &&
    node.indexType.literal.text === 'color'
  ) {
    const fileName = node.getSourceFile()?.fileName || '';

    if (shouldCreateColorSymbol) {
      shouldCreateColorSymbol = false;
      parser.symbols.push({
        name: 'CanvasColorTokens',
        packageName: getPackageName(fileName),
        fileName,
        ...defaultJSDoc,
        type: {
          kind: 'canvasColor',
        },
      });
    }
    return {kind: 'symbol', name: 'CanvasColorTokens'};
  }

  /**
   * Find all occurrences of `Property.X` and convert to external links to MDN
   */
  if (
    t.isTypeReference(node) &&
    t.isQualifiedName(node.typeName) &&
    t.isIdentifier(node.typeName.left) &&
    node.typeName.left.text === 'Property' &&
    t.isIdentifier(node.typeName.right)
  ) {
    return {
      kind: 'external',
      name: `${node.typeName.left.text}.${node.typeName.right.text}`,
      url: `https://developer.mozilla.org/en-US/docs/Web/CSS/${dashCase(node.typeName.right.text)}`,
    };
  }

  /**
   * Find all call expressions that use `subModel` hook
   *
   * ```ts
   * subModel(useMyModel)(m = m.subModel, useOtherComponent)
   * ```
   */
  if (
    t.isCallExpression(node) &&
    t.isCallExpression(node.expression) &&
    t.isIdentifier(node.expression.expression) &&
    node.expression.expression.text === 'createSubModelElemPropsHook'
  ) {
    // first argument in `subModel`
    const modelArgument = node.expression.arguments[0];
    const otherElemPropsHook = node.arguments[1];
    if (
      modelArgument &&
      otherElemPropsHook &&
      t.isIdentifier(modelArgument) &&
      t.isIdentifier(otherElemPropsHook)
    ) {
      const modelName = modelArgument.text.replace('use', '');
      const otherElemPropsHookName = otherElemPropsHook.text;

      return {
        kind: 'callExpression',
        name: {kind: 'symbol', name: node.expression.expression.text},
        parameters: [
          {
            kind: 'function',
            parameters: [
              {
                kind: 'parameter',
                name: 'model',
                ...defaultJSDoc,
                type: {
                  kind: 'symbol',
                  name: modelName,
                },
              },
            ],
            returnType: {
              kind: 'symbol',
              name: 'Model',
            },
          },
          {
            kind: 'symbol',
            name: otherElemPropsHookName,
          },
        ],
      } as CallExpression;
    }
  }

  /**
   * Function to get a elemPropsHook value out of a call expression. Breaking this out into a
   * function makes it reusable for composed elemProps hooks.
   */
  function getElemPropsHookValue(node: ts.Node, name?: string) {
    if (
      t.isCallExpression(node) &&
      t.isCallExpression(node.expression) &&
      t.isIdentifier(node.expression.expression) &&
      node.expression.expression.text === 'createElemPropsHook'
    ) {
      // first argument in `createElemPropsHook`
      const modelArgument = node.expression.arguments[0];
      // first argument in the curried function of `createElemPropsHook`
      if (modelArgument && t.isIdentifier(modelArgument)) {
        const modelName = modelArgument.text.replace('use', '');
        const type = parser.checker.getTypeAtLocation(node.arguments[0]);
        const signature = type.getCallSignatures()[0];
        const elemProps = getElemPropsFromElemPropsHook(parser, signature);
        const returnType = getReturnTypeFromElemPropsHook(parser, signature);

        const parameters: FunctionParameter[] = [
          {
            kind: 'parameter',
            name: 'model',
            ...defaultJSDoc,
            type: {
              kind: 'symbol',
              name: modelName,
            },
            required: true,
          },
          {
            kind: 'parameter',
            name: 'elemProps',
            ...defaultJSDoc,
            type: elemProps,
            required: false,
          },
          {
            kind: 'parameter',
            name: 'ref',
            ...defaultJSDoc,
            type: {
              kind: 'external',
              name: 'React.Ref',
              url: 'https://reactjs.org/docs/refs-and-the-dom.html',
            },
            required: false,
          },
        ];

        return {
          kind: 'function',
          name: {kind: 'symbol', name: node.expression.expression.text},
          parameters,
          returnType,
          // model: modelName,
          // elemProps,
          // returnProps,
        } as FunctionValue;
      }
    }

    return undefined;
  }

  if (
    t.isVariableDeclaration(node) &&
    t.isIdentifier(node.name) &&
    node.initializer &&
    t.isCallExpression(node.initializer) &&
    t.isIdentifier(node.initializer.expression) &&
    node.initializer.expression.text === 'composeHooks'
  ) {
    return {
      kind: 'callExpression',
      name: {kind: 'symbol', name: node.initializer.expression.text},
      parameters: node.initializer.arguments.map(value => parser.getValueFromNode(value)),
    } as CallExpression;
  }

  /**
   * Find all occurrences of:
   * ```ts
   * export const {HookName} = createElemPropsHook({ModelHooKName})(
   *   (
   *     model,
   *     ref?: any,
   *     elemProps: {
   *       // elemProps required by the hook
   *     }
   *   ) => {
   *     return {
   *       // elemProps returned by the hook
   *     }
   *   }
   * )
   * ```
   */
  if (
    t.isVariableDeclaration(node) &&
    t.isIdentifier(node.name) &&
    node.initializer &&
    t.isCallExpression(node.initializer)
  ) {
    const name = node.name.text;
    const elemPropsHookValue = getElemPropsHookValue(node.initializer, name);
    if (elemPropsHookValue) {
      return elemPropsHookValue;
    }
  }

  const elemPropsHookValue = getElemPropsHookValue(node);
  if (elemPropsHookValue) {
    return elemPropsHookValue;
  }

  /**
   * Find all occurrences of:
   * ```ts
   * export const {ComponentName} = createComponent({defaultElement})({
   *   displayName: {displayName},
   *   Component(elemProps: {ComponentProps}) {
   *     return <... />
   *   }
   * })
   * ```
   *
   * It will also try to figure out default props:
   * - @default {defaultValue}
   * - `{prop: defaultValue}: Props`
   * - `<Element prop={defaultProp} {...elemProps} />
   */
  if (
    t.isVariableDeclaration(node) &&
    node.initializer &&
    t.isCallExpression(node.initializer) &&
    t.isCallExpression(node.initializer.expression) &&
    t.isIdentifier(node.initializer.expression.expression) &&
    node.initializer.expression.expression.text === 'createComponent'
  ) {
    const baseElement = getBaseElement(parser, node.initializer.expression.arguments[0]);

    /**
     * options is the object containing the `Component` function
     * ```ts
     * export const MyComponent = createComponent('button')({
     *   displayName: 'MyComponent',
     *   Component() {...}
     * })
     * ```
     */
    const options = node.initializer.arguments[0];
    if (options && t.isObjectLiteralExpression(options)) {
      const signature = options.properties.find(
        n => n.name && t.isIdentifier(n.name) && n.name.text === 'Component'
      );
      const displayName = getDisplayName(parser, options);
      const subComponents = getSubcomponents(parser, options);

      if (signature) {
        const componentExpression = t.isMethodDeclaration(signature)
          ? signature
          : t.isPropertyAssignment(signature)
          ? signature.initializer
          : undefined;

        if (componentExpression && ts.isFunctionLike(componentExpression)) {
          const type = parser.checker.getTypeAtLocation(componentExpression.parameters[0]);
          const props = getComponentProps(parser, componentExpression, type, baseElement);
          const styleComponent = getStyleComponent(displayName, props);

          return {
            kind: 'enhancedComponent',
            componentType: 'regular',
            displayName,
            props: getNonDefaultNonLayoutProps(displayName, props),
            baseElement,
            subComponents,
            styleComponent,
          } as EnhancedComponentValue;
        }
      }
    }
  }

  if (
    t.isVariableDeclaration(node) &&
    node.initializer &&
    t.isCallExpression(node.initializer) &&
    t.isCallExpression(node.initializer.expression) &&
    t.isCallExpression(node.initializer.expression.expression) &&
    t.isIdentifier(node.initializer.expression.expression.expression) &&
    node.initializer.expression.expression.expression.text === 'createContainer'
  ) {
    const baseElement = getBaseElement(parser, node.initializer.expression.expression.arguments[0]);
    const options = node.initializer.expression.arguments[0];
    const modelName = getModelName(parser, options);
    const displayName = getDisplayName(parser, options);
    const subComponents = getSubcomponents(parser, options);
    const elemPropsHook = getElemPropsHook(parser, options);
    const signature = node.initializer.arguments[0];
    if (ts.isFunctionLike(signature) && modelName) {
      const type = node.initializer.typeArguments
        ? parser.checker.getTypeAtLocation(node.initializer.typeArguments[0])
        : undefined;
      const props = (type ? getComponentProps(parser, signature, type, baseElement) : []).filter(
        // Filter out `model` and `elemPropsHook` that might come if we extend an interface
        p => !['model', 'elemPropsHook'].includes(p.name)
      );
      props.push(getModelProp(parser, modelName));
      props.push(getElemProp(parser, modelName));
      const styleComponent = getStyleComponent(displayName, props);

      return {
        kind: 'enhancedComponent',
        componentType: 'container',
        displayName,
        elemPropsHook,
        props: getNonDefaultNonLayoutProps(displayName, props),
        baseElement,
        model: modelName,
        styleComponent,
        subComponents,
      };
    }
  }

  if (
    t.isVariableDeclaration(node) &&
    node.initializer &&
    t.isCallExpression(node.initializer) &&
    t.isCallExpression(node.initializer.expression) &&
    t.isCallExpression(node.initializer.expression.expression) &&
    t.isIdentifier(node.initializer.expression.expression.expression) &&
    node.initializer.expression.expression.expression.text === 'createSubcomponent'
  ) {
    const baseElement = getBaseElement(parser, node.initializer.expression.expression.arguments[0]);
    const options = node.initializer.expression.arguments[0];
    const modelName = getModelName(parser, options);
    const subComponents = getSubcomponents(parser, options);
    const elemPropsHook = getElemPropsHook(parser, options);
    const displayName = getDisplayName(parser, options);
    const signature = node.initializer.arguments[0];
    if (ts.isFunctionLike(signature) && modelName) {
      const type = node.initializer.typeArguments
        ? parser.checker.getTypeAtLocation(node.initializer.typeArguments[0])
        : undefined;
      const props = (type ? getComponentProps(parser, signature, type, baseElement) : []).filter(
        // Filter out `model` and `elemPropsHook` that might come if we extend an interface
        p => !['model', 'elemPropsHook'].includes(p.name)
      );
      props.push(getModelProp(parser, modelName));
      props.push(getElemProp(parser, modelName));
      const styleComponent = getStyleComponent(displayName, props);

      return {
        kind: 'enhancedComponent',
        componentType: 'subcomponent',
        elemPropsHook,
        displayName,
        props: getNonDefaultNonLayoutProps(displayName, props),
        baseElement,
        subComponents,
        styleComponent,
        model: modelName,
      };
    }
  }

  return undefined;
});

function getDisplayName(
  parser: DocParser<SupportedValues>,
  node: ts.Expression
): string | undefined {
  if (t.isObjectLiteralExpression(node)) {
    const displayProperty = node.properties.find(
      p => p.name && t.isIdentifier(p.name) && p.name.text === 'displayName'
    );

    if (
      displayProperty &&
      t.isPropertyAssignment(displayProperty) &&
      t.isStringLiteral(displayProperty.initializer)
    ) {
      return displayProperty.initializer.text;
    }
  }

  return undefined;
}

function getNonDefaultNonLayoutProps(
  displayName: string | undefined,
  props: ObjectProperty[]
): ObjectProperty[] {
  if (displayName && ['Stack', 'Flex', 'Box', 'Grid'].includes(displayName)) {
    return props;
  }
  return props.filter(p => {
    if (!p.declarations[0]) {
      // No declaration is found, we'll include this prop
      return true;
    }
    return !p.declarations[0].filePath.includes('layout/lib/utils');
  });
}

function getReturnTypeFromElemPropsHook(
  parser: DocParser<SupportedValues>,
  signature?: ts.Signature
): SupportedValues | Value {
  if (signature) {
    const type = signature.getReturnType();
    // A TypeNode is a synthetic AST representation of a type. No truncation removes the `... 12 more ...`
    const typeNode = parser.checker.typeToTypeNode(
      type,
      undefined,
      ts.NodeBuilderFlags.NoTruncation
    );
    if (typeNode) {
      const value = parser.getValueFromNode(typeNode);
      if (value.kind === 'object') {
        value.properties;
      }
      return value;
    }
  }
  return unknownValue('???');
}

function getElemPropsFromElemPropsHook(
  parser: DocParser<SupportedValues>,
  signature?: ts.Signature
): Value {
  if (signature) {
    const elemPropsParam = signature.getParameters()[2];
    if (!elemPropsParam) {
      return {kind: 'object', properties: []};
    }
    const elemPropsNode = getValueDeclaration(elemPropsParam);
    if (elemPropsNode && t.isParameter(elemPropsNode)) {
      return (parser.getValueFromNode(elemPropsNode) as FunctionParameter).type as Value;
    }
  }

  return unknownValue('elemPropsNotFound');
}

function getElemPropsHook(
  parser: DocParser<SupportedValues>,
  node: ts.Expression
): string | undefined {
  if (t.isObjectLiteralExpression(node)) {
    const subComponentProperty = node.properties.find(
      p => p.name && t.isIdentifier(p.name) && p.name.text === 'elemPropsHook'
    );

    if (
      subComponentProperty &&
      t.isPropertyAssignment(subComponentProperty) &&
      t.isIdentifier(subComponentProperty.initializer)
    ) {
      // Check if the elemProps is aliased to another hook
      // for example, `const useMyComponent = useMyOtherComponent`
      const symbol = getSymbolFromNode(parser.checker, subComponentProperty.initializer);
      const declaration = getValueDeclaration(symbol);
      if (
        declaration &&
        t.isVariableDeclaration(declaration) &&
        declaration.initializer &&
        t.isIdentifier(declaration.initializer)
      ) {
        return declaration.initializer.text;
      }
      return subComponentProperty.initializer.text;
    }
  }

  return undefined;
}

function getSubcomponents(
  parser: DocParser<SupportedValues>,
  node: ts.Expression
): EnhancedComponentValue['subComponents'] {
  if (t.isObjectLiteralExpression(node)) {
    const subComponentProperty = node.properties.find(
      p => p.name && t.isIdentifier(p.name) && p.name.text === 'subComponents'
    );

    if (
      subComponentProperty &&
      t.isPropertyAssignment(subComponentProperty) &&
      t.isObjectLiteralExpression(subComponentProperty.initializer)
    ) {
      return subComponentProperty.initializer.properties
        .map(p => {
          if (
            t.isPropertyAssignment(p) &&
            t.isIdentifier(p.name) &&
            t.isIdentifier(p.initializer)
          ) {
            const symbol = getSymbolFromNode(parser.checker, p.name);
            const jsDoc = findDocComment(parser.checker, symbol);
            return {
              name: p.name.text,
              symbol: p.initializer.text,
              ...jsDoc,
            };
          }
          if (t.isShorthandPropertyAssignment(p) && t.isIdentifier(p.name)) {
            const symbol = getSymbolFromNode(parser.checker, p.name);
            const jsDoc = findDocComment(parser.checker, symbol);
            return {
              name: p.name.text,
              symbol: p.name.text,
              ...jsDoc,
            };
          }

          return;
        })
        .filter((v: any) => !!v) as EnhancedComponentValue['subComponents'];
    }

    return;
  }

  return undefined;
}

function getModelProp(parser: DocParser<SupportedValues>, modelName: string): ObjectProperty {
  return {
    kind: 'property',
    name: 'model',
    ...defaultJSDoc,
    description:
      'Optional model to pass to the component. This will override the default model created for the component. This can be useful if you want to access to the state and events of the model, or if you have nested components of the same type and you need to override the model provided by React Context.',
    type: {
      kind: 'symbol',
      name: modelName,
    },
  };
}

function getElemProp(parser: DocParser<SupportedValues>, modelName: string): ObjectProperty {
  return {
    kind: 'property',
    name: 'elemPropsHook',
    ...defaultJSDoc,
    description:
      'Optional hook that receives the model and all props to be applied to the element. If you use this, it is your responsibility to return props, merging as appropriate. For example, returning an empty object will disable all elemProps hooks associated with this component. This allows finer control over a component without creating a new one.',
    type: {
      kind: 'function',
      parameters: [
        {
          kind: 'parameter',
          ...defaultJSDoc,
          name: 'model',
          type: {
            kind: 'symbol',
            name: modelName,
          },
          required: true,
        },
        {
          kind: 'parameter',
          ...defaultJSDoc,
          name: 'elemProps',
          type: {
            kind: 'generic',
            name: 'TProps',
          },
        },
      ],
      returnType: {
        kind: 'external',
        name: 'HTML Attributes',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes',
      },
    },
  };
}

function getModelName(parser: DocParser<SupportedValues>, node: ts.Expression) {
  if (t.isObjectLiteralExpression(node)) {
    const modelProperty = node.properties.find(property => {
      return (
        t.isPropertyAssignment(property) &&
        t.isIdentifier(property.name) &&
        property.name.text === 'modelHook'
      );
    });

    if (
      modelProperty &&
      t.isPropertyAssignment(modelProperty) &&
      t.isIdentifier(modelProperty.initializer)
    ) {
      return modelProperty.initializer.text.replace('use', '');
    }
  }

  return undefined;
}

/**
 *
 * @param parser
 * @param signature The function like component containing the component's implementation
 * @param type The type of the props
 * @returns
 */
function getComponentProps(
  parser: DocParser<SupportedValues>,
  signature: ts.SignatureDeclaration,
  type: ts.Type,
  baseElement: Value | undefined
): ObjectProperty[] {
  const parameterDefaults = getDefaultsFromObjectBindingParameter(parser, signature.parameters[0]);
  const props = type
    .getProperties()
    .map(symbol => {
      const defaultValue =
        parameterDefaults[symbol.name] ||
        getDefaultFromTags(symbol.getJsDocTags()) ||
        getDefaultFromJSX(parser, signature, symbol.name);

      const value = parser.getValueFromNode(getValueDeclaration(symbol)!);
      if (value.kind === 'property') {
        // @ts-ignore Not sure why this only fails in typecheck
        value.defaultValue = defaultValue;
      }

      return value;
    })
    .filter(filterObjectProperties);

  if (!props.find(p => p.name === 'children')) {
    props.push({
      kind: 'property',
      name: 'children',
      ...defaultJSDoc,
      type: {
        kind: 'external',
        name: 'React.ReactNode',
        url: 'https://reactjs.org/docs/rendering-elements.html',
      },
    });
  }
  if (baseElement) {
    // Make it the first prop
    props.push({
      kind: 'property',
      name: 'as',
      ...defaultJSDoc,
      description:
        'Optional override of the default element used by the component. Any valid tag or Component. If you provided a Component, this component should forward the ref using `React.forwardRef`and spread extra props to a root element.\n\n**Note:** Not all elements make sense and some elements may cause accessibility issues. Change this value with care.',
      type: {
        kind: 'external',
        name: 'React.ElementType',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/element',
      },
      defaultValue: baseElement,
    });
    props.push({
      kind: 'property',
      name: 'ref',
      ...defaultJSDoc,
      description:
        'Optional ref. If the component represents an element, this ref will be a reference to the real DOM element of the component. If `as` is set to an element, it will be that element. If `as` is a component, the reference will be to that component (or element if the component uses `React.forwardRef`).',
      type: {
        kind: 'external',
        name: 'React.Ref',
        url: 'https://reactjs.org/docs/refs-and-the-dom.html',
        typeParameters: [
          {
            kind: 'typeParameter',
            name: 'R',
            required: true,
            defaultValue: baseElement,
          },
        ],
      },
    });
  }

  return props;
}

function getStyleComponent(
  displayName: string | undefined,
  props: ObjectProperty[]
): SymbolValue | undefined {
  if (
    props.some(p => p.declarations[0]?.filePath.includes('utils/grid.ts')) &&
    displayName !== 'Grid'
  ) {
    return {
      kind: 'symbol',
      name: 'Grid',
    };
  }
  if (
    props.some(p => p.declarations[0]?.filePath.includes('utils/stack.ts')) &&
    displayName !== 'Stack'
  ) {
    return {
      kind: 'symbol',
      name: 'Stack',
    };
  }
  if (
    props.some(p => p.declarations[0]?.filePath.includes('utils/flex.ts')) &&
    displayName !== 'Flex'
  ) {
    return {
      kind: 'symbol',
      name: 'Flex',
    };
  }
  if (
    props.some(p => p.declarations[0]?.filePath.includes('utils/layout.ts')) &&
    displayName !== 'Box'
  ) {
    return {
      kind: 'symbol',
      name: 'Box',
    };
  }
  return undefined;
}
