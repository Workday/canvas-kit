import {createProgramFromSource} from './createProgramFromSource';
import {parse} from '../docParser';
import {componentParser} from '../componentParser';

describe('componentParser', () => {
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
      const symbols = parse(program, 'test.tsx', [componentParser]); //?

      expect(symbols).toHaveProperty('0.name', 'Props');
      expect(symbols).toHaveProperty('0.type.kind', 'interface');
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
      const symbols = parse(program, 'test.tsx', [componentParser]); //?

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
      expect(symbols).toHaveProperty(
        '0.type.baseElement.url',
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
      const symbols = parse(program, 'test.tsx', [componentParser]); //?

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
      expect(symbols).toHaveProperty(
        '0.type.baseElement.url',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button'
      );
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
      const symbols = parse(program, 'test.tsx', [componentParser]); //?

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

    it('should handle deconstructed default props', () => {
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
      const symbols = parse(program, 'test.tsx', [componentParser]); //?

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

      const symbols = parse(program, 'test.tsx', [componentParser]); //?

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

    it('should handle default props in the JSX by detecting "elemProps" with a call expression', () => {
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

      const symbols = parse(program, 'test.tsx', [componentParser]); //?

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.displayName', 'My.Component');
      expect(symbols).toHaveProperty('0.type.baseElement.kind', 'external');
      expect(symbols).toHaveProperty('0.type.baseElement.name', 'button');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'string');
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

      const symbols = parse(program, 'test.tsx', [componentParser]); //?

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
      expect(symbols).toHaveProperty('0.type.subComponents.0.name', 'Item');
      expect(symbols).toHaveProperty('0.type.subComponents.0.symbol', 'MyComponentItem');
    });
  });

  describe('createSubcomponent', () => {
    it('should handle "createSubcomponent" utility', () => {
      const program = createProgramFromSource(
        'test.tsx',
        `
        export const MyComponent = createSubcomponent('div')({
          displayName: 'MyComponent',
          modelHook: useMyModel,
        })<MyComponentProps>((elemProps, Element) => {
          return <Element size="medium" {...elemProps} />
        });

        export interface MyComponentProps {
          size: string
        }
      `
      );

      const symbols = parse(program, 'test.tsx', [componentParser]); //?
    });
  });
});
