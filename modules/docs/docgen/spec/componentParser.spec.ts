import {createProgramFromSource} from './createProgramFromSource';
import {parse} from '../docParser';
import {componentParser} from '../componentParser';

describe('componentParser', () => {
  describe('createComponent', () => {
    it('should handle "createComponent" utility function', () => {
      const program = createProgramFromSource(`
        export const MyComponent = createComponent('button')({
          displayName: 'MyComponent',
          Component(props: MyComponentProps, ref, Element) {
            return <Element />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `);
      const symbols = parse(program, 'test.ts', [componentParser]); //?

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
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
      const program = createProgramFromSource(`
        export const MyComponent = createComponent('button')({
          displayName: 'MyComponent',
          Component(props: MyComponentProps, ref, Element) {
            return <Element />
          }
        });

        export interface MyComponentProps {
          /** @default {'medium'} */
          size: string
        }
      `);
      const symbols = parse(program, 'test.ts', [componentParser]); //?

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
    });

    it('should handle deconstructed default props', () => {
      const program = createProgramFromSource(`
        export const MyComponent = createComponent('button')({
          displayName: 'MyComponent',
          Component({size = 'medium'}: MyComponentProps, ref, Element) {
            return <Element />
          }
        });

        export interface MyComponentProps {
          size: string
        }
      `);
      const symbols = parse(program, 'test.ts', [componentParser]); //?

      expect(symbols).toHaveProperty('0.name', 'MyComponent');
      expect(symbols).toHaveProperty('0.type.kind', 'enhancedComponent');
      expect(symbols).toHaveProperty('0.type.props.0.kind', 'property');
      expect(symbols).toHaveProperty('0.type.props.0.name', 'size');
      expect(symbols).toHaveProperty('0.type.props.0.type.kind', 'primitive');
      expect(symbols).toHaveProperty('0.type.props.0.type.value', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.kind', 'string');
      expect(symbols).toHaveProperty('0.type.props.0.defaultValue.value', 'medium');
    });
  });
});
