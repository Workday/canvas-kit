import {createProgramFromSource} from './createProgramFromSource';
import {parse} from '../docParser';
import {enhancedComponentParser} from '../plugins/enhancedComponentParser';

// prettier-ignore
describe('enhancedComponentParser', () => {
  describe('csstype', () => {
    it('should handle csstype Property namespace (even when exported)', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export interface Props {
          overflowX: Property.BorderLeft
        }
        export namespace Property {
          export interface BorderLeft {}
        }
      `
      );
      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'Props');
      expect(symbols).toHaveProperty('0.type.kind', 'object');
      expect(symbols).toHaveProperty('0.type.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.properties.0.name', 'overflowX');
      expect(symbols).toHaveProperty('0.type.properties.0.type.kind', 'external');
      expect(symbols).toHaveProperty('0.type.properties.0.type.name', 'Property.BorderLeft');
      expect(symbols).toHaveProperty(
        '0.type.properties.0.type.url',
        'https://developer.mozilla.org/en-US/docs/Web/CSS/border-left'
      );
    });
  });

  describe('elemPropsHook', () => {
    it('should handle "createElemPropsHook" with elemProps defined', () => {
      const program = createProgramFromSource(`
        export const useMyComponent = createElemPropsHook(useMyModel)(
          (
            {state, events, getId},
            ref?: React.Ref<HTMLElement>,
            elemProps: {
              'data-id'?: string
            } = {}
          ) => {
            const localId = 'a';

            return {
              'data-id': localId
            }
          }
        )
      `);

      const symbols = parse(program, 'test.ts', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'useMyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'function');
      expect(symbols).toHaveProperty('0.type.name.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.name.name', 'createElemPropsHook');
      expect(symbols).toHaveProperty('0.type.parameters.0.name', 'model');
      expect(symbols).toHaveProperty('0.type.parameters.0.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.0.type.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.0.type.name', 'MyModel');
      expect(symbols).toHaveProperty('0.type.parameters.1.name', 'elemProps');
      expect(symbols).toHaveProperty('0.type.parameters.1.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.1.type.kind', 'object');
      expect(symbols).toHaveProperty('0.type.parameters.1.type.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.parameters.1.type.properties.0.name', 'data-id');
      expect(symbols).toHaveProperty(
        '0.type.parameters.1.type.properties.0.type.kind',
        'primitive'
      );
      expect(symbols).toHaveProperty('0.type.parameters.1.type.properties.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.returnType.kind', 'object');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.name', 'data-id');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.type.value', 'string');
    });
  });

  describe('elemPropsHook', () => {
    it('should handle "createElemPropsHook" with a ref in returnType', () => {
      const program = createProgramFromSource(`
        export const useMyComponent = createElemPropsHook(useMyModel)(
          (
            {state, events, getId},
            ref?: React.Ref<HTMLElement>,
            elemProps: {
              'data-id'?: string
            } = {}
          ) => {
            const localId = 'a';

            return {
              ref: (instance: HTMLElement | null) => undefined
            }
          }
        )
      `);

      const symbols = parse(program, 'test.ts', [enhancedComponentParser]);

      const temp = {
        ref(instance: HTMLElement | null) { return 'foo' }
      }

      expect(symbols).toHaveProperty('0.name', 'useMyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'function');
      expect(symbols).toHaveProperty('0.type.name.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.name.name', 'createElemPropsHook');
      expect(symbols).toHaveProperty('0.type.parameters.0.name', 'model');
      expect(symbols).toHaveProperty('0.type.parameters.0.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.0.type.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.0.type.name', 'MyModel');
      expect(symbols).toHaveProperty('0.type.parameters.1.name', 'elemProps');
      expect(symbols).toHaveProperty('0.type.parameters.1.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.1.type.kind', 'object');
      expect(symbols).toHaveProperty('0.type.parameters.1.type.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.parameters.1.type.properties.0.name', 'data-id');
      expect(symbols).toHaveProperty(
        '0.type.parameters.1.type.properties.0.type.kind',
        'primitive'
      );
      expect(symbols).toHaveProperty('0.type.parameters.1.type.properties.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.returnType.kind', 'object');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.name', 'ref');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.type.kind', 'function');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.type.parameters.0.name', 'instance');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.type.returnType.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.returnType.properties.0.type.returnType.value', 'undefined');
    });
  });

  describe('composeHooks', () => {
    it('should handle "composeHooks"', () => {
      const program = createProgramFromSource(`
        export const useMyComponent = composeHooks(
          createElemPropsHook(useMyModel)(
            (model, _?, elemProps: {
              'data-id'?: string
            }) => ({ id: '' })
          )
          useHook1,
          useHook2
        )

        // make the parser consider these exported symbols
        export const useHook1 = undefined
        export const useHook2 = undefined
      `);

      const symbols = parse(program, 'test.ts', [enhancedComponentParser]);
      expect(symbols).toHaveProperty('0.name', 'useMyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'callExpression');
      expect(symbols).toHaveProperty('0.type.name.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.name.name', 'composeHooks');
      expect(symbols).toHaveProperty('0.type.parameters.0.kind', 'function');
      expect(symbols).toHaveProperty('0.type.parameters.0.name.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.0.name.name', 'createElemPropsHook');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.name', 'model');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.type.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.type.name', 'MyModel');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.name', 'elemProps');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.type.kind', 'object');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.type.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.type.properties.0.name', 'data-id');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.type.properties.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.type.properties.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.kind', 'object');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.name', 'id');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.parameters.1.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.1.name', 'useHook1');
      expect(symbols).toHaveProperty('0.type.parameters.2.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.2.name', 'useHook2');
    });

    it('should handle "composeHooks" with empty elemProps', () => {
      const program = createProgramFromSource(`
        export const useMyComponent = composeHooks(
          createElemPropsHook(useMyModel)(
            () => ({ id: '' })
          )
          useHook1,
          useHook2
        )

        // make the parser consider these exported symbols
        export const useHook1 = undefined
        export const useHook2 = undefined
      `);

      const symbols = parse(program, 'test.ts', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'useMyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'callExpression');
      expect(symbols).toHaveProperty('0.type.name.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.name.name', 'composeHooks');
      expect(symbols).toHaveProperty('0.type.parameters.0.kind', 'function');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.name', 'model');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.type.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.0.type.name', 'MyModel');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.kind', 'parameter');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.name', 'elemProps');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.type.kind', 'object');
      expect(symbols).toHaveProperty('0.type.parameters.0.parameters.1.type.properties.length', 0);
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.kind', 'object');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.name', 'id');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.parameters.0.returnType.properties.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.parameters.1.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.1.name', 'useHook1');
      expect(symbols).toHaveProperty('0.type.parameters.2.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.parameters.2.name', 'useHook2');
    });
  });

  it('should handle "composeHooks" with a subModel hook', () => {
    const program = createProgramFromSource(`
      export const useMyComponent = composeHooks(
        useHook1,
        createSubModelElemPropsHook(useMyModel)(m => m.subModel, useHook2)
      )

      // make the parser consider these exported symbols
      export const useHook1 = undefined
      export const useHook2 = undefined
    `);

    const symbols = parse(program, 'test.ts', [enhancedComponentParser]);

    expect(symbols).toHaveProperty('0.name', 'useMyComponent');
    expect(symbols).toHaveProperty('0.type.kind', 'callExpression');
    expect(symbols).toHaveProperty('0.type.name.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.name.name', 'composeHooks');
    expect(symbols).toHaveProperty('0.type.parameters.0.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.parameters.0.name', 'useHook1');
    expect(symbols).toHaveProperty('0.type.parameters.1.kind', 'callExpression');
    expect(symbols).toHaveProperty('0.type.parameters.1.name.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.parameters.1.name.name', 'createSubModelElemPropsHook');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.0.kind', 'function');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.0.parameters.0.name', 'model');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.0.parameters.0.type.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.0.parameters.0.type.name', 'MyModel');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.0.returnType.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.0.returnType.name', 'Model');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.1.kind', 'symbol');
    expect(symbols).toHaveProperty('0.type.parameters.1.parameters.1.name', 'useHook2');
  });

  describe('createComponent', () => {
    it('should handle "createComponent" utility function with a MethodSignature', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component(props: MyComponentProps, ref, Element) {
            return <Element />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );
      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.baseElement.url',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
      );
    });

    it('should handle "createComponent" utility function with a PropertySignature', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component: (props: MyComponentProps, ref, Element) => {
            return <Element />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );
      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.baseElement.url',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
      );
    });

    it('should handle "createComponent" utility function with a component element', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent(SecondaryButton)({
          displayName: 'My.Component',
          Component: (props: MyComponentProps, ref, Element) => {
            return <Element />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );
      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'SecondaryButton');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'SecondaryButton');
    });

    it('should handle JSDoc default props', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component(props: MyComponentProps, ref, Element) {
            return <Element />
          }
        });

        export interface MyComponentProps {
          /** @default {'medium'} */
          size: string
        }
      `
      );
      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
    });

    it('should handle deconstructed default string props', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component({size = 'medium'}: MyComponentProps, ref, Element) {
            return <Element />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );
      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
    });

    it('should handle deconstructed default boolean props', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component({size = true}: MyComponentProps, ref, Element) {
            return <Element />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );
      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'boolean');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', true);
    });

    it('should handle default props in the JSX by detecting "elemProps"', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component(elemProps: MyComponentProps, ref, Element) {
            return <Element size="medium" {...elemProps} />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
    });

    it('should ignore default props in the JSX that are not valid', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component(elemProps: MyComponentProps, ref, Element) {
            return <Element size={getSize()} {...elemProps} />
          }
        });

        export interface MyComponentProps {
          size: string
        }

        function getSize() { return 'medium' }
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue', undefined);
    });


    it('should not default props in the JSX by detecting a self-referenced prop', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createComponent('button')({
          displayName: 'My.Component',
          Component({size, ...elemProps}: MyComponentProps, ref, Element) {
            return <Element size={size} {...elemProps} />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue', undefined);
    });
  });

  describe('createContainer', () => {
    it('should handle "createContainer" utility', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createContainer('div')({
          displayName: 'My.Component',
          modelHook: useMyModel,
          elemPropsHook: useMyComponent,
          subComponents: {
            Item: MyComponentItem
          }
        })<MyComponentProps>((elemProps, Element) => {
          return <Element size="medium" {...elemProps} />
        });

        export interface MyComponentProps {
          size: string
        }

        export const MyComponentItem = createSubcomponent('div')({
          modelHook: useMyModel
        })((elemProps, Element) => {
          return <Element {...elemProps} />
        })
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.elemPropsHook', 'useMyComponent');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'div');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
      expect(symbols).toHaveProperty('0.type.model', 'MyModel');
      expect(symbols).toHaveProperty('0.type.subComponents.0.name', 'Item');
      expect(symbols).toHaveProperty('0.type.subComponents.0.symbol', 'MyComponentItem');
    });

    it('should handle "elemPropsHook" that is aliased', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createContainer('div')({
          displayName: 'My.Component',
          modelHook: useMyModel,
          elemPropsHook: useMyComponent,
        })<MyComponentProps>((elemProps, Element) => {
          return <Element size="medium" {...elemProps} />
        });

        export const useMyComponent = useMyOtherComponent

        export interface MyComponentProps {
          size: string
        }
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.elemPropsHook', 'useMyOtherComponent');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'div');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
      expect(symbols).toHaveProperty('0.type.model', 'MyModel');
    });


    it('should handle "subComponents"', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createContainer('div')({
          displayName: 'My.Component',
          modelHook: useMyModel,
          subComponents: {
            /** MyComponent.Subcomponent */
            SubComponent: MySubcomponent
          }
        })<MyComponentProps>((elemProps, Element) => {
          return <Element size="medium" {...elemProps} />
        });

        export interface MyComponentProps {
          size: string
        }

        /** Subcomponent */
        export const MySubcomponent = () => {}
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'div');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
      expect(symbols).toHaveProperty('0.type.model', 'MyModel');
      expect(symbols).toHaveProperty('0.type.subComponents.0.name', 'SubComponent');
      expect(symbols).toHaveProperty('0.type.subComponents.0.symbol', 'MySubcomponent');
    });

    it('should filter out "model" and "elemPropsHooks" props that are already part of a prop interface', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createContainer('div')({
          displayName: 'My.Component',
          modelHook: useMyModel,
          elemPropsHook: useMyComponent,
          subComponents: {
            Item: MyComponentItem
          }
        })<MyComponentProps>((elemProps, Element) => {
          return <Element {...elemProps} />
        });

        export interface MyComponentProps {
          size: string
          elemPropsHook: any
          model: any
        }

        export const MyComponentItem = createSubcomponent('div')({
          modelHook: useMyModel
        })((elemProps, Element) => {
          return <Element {...elemProps} />
        })
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.elemPropsHook', 'useMyComponent');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'div');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.1.kind', 'property');
      // We're not sure which property position these are, so use asymmetric matchers
      expect(symbols).toHaveProperty('0.type.props', expect.arrayContaining([
        expect.objectContaining({name: 'model', type: expect.objectContaining({ kind: 'symbol' })})
      ]));
      expect(symbols).toHaveProperty('0.type.props', expect.arrayContaining([
        expect.objectContaining({name: 'elemPropsHook', type: expect.objectContaining({ kind: 'function' })})
      ]));
      // Not sure how to test number of keys in an array using only Jest + matchers
      expect((symbols[0].type as any).props.filter(p => p.name === 'model')).toHaveLength(1)
      expect((symbols[0].type as any).props.filter(p => p.name === 'elemPropsHook')).toHaveLength(1)
    });
  });

  describe('createSubcomponent', () => {
    it('should handle "createSubcomponent" utility', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createSubcomponent('div')({
          displayName: 'My.Component',
          modelHook: useMyModel,
          elemPropsHook: useMyComponent,
          subComponents: {
            Item: MyComponentItem
          }
        })<MyComponentProps>((elemProps, Element) => {
          return <Element size="medium" {...elemProps} />
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.elemPropsHook', 'useMyComponent');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'div');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
      expect(symbols).toHaveProperty('0.type.model', 'MyModel');
      expect(symbols).toHaveProperty('0.type.subComponents.0.name', 'Item');
      expect(symbols).toHaveProperty('0.type.subComponents.0.symbol', 'MyComponentItem');
    });

    it('should handle "createSubcomponent" utility with a component element', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createSubcomponent(SecondaryButton)({
          displayName: 'My.Component',
          modelHook: useMyModel,
        })<MyComponentProps>((elemProps, Element) => {
          return <Element size="medium" {...elemProps} />
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );

      const symbols = parse(program, 'test.tsx', [enhancedComponentParser]);

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'symbol');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'SecondaryButton');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
      expect(symbols).toHaveProperty('0.type.model', 'MyModel');
    });
  });
});
